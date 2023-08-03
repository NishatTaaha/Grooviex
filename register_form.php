<?php
require 'config.php';
$conn = dbConnection();
$authenticated = false;
if (isset($_SESSION["login"]) && $_SESSION["login"] === true) {
   $authenticated = true;
}
if ($authenticated) {
   header("location: user.php");
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $username = $_POST["username"];
   $email = $_POST["email"];
   $password = $_POST["password"];
   $confirmpassword = $_POST["confirmPassword"];
   $duplicate = getQuery($conn, "SELECT * FROM tb_user WHERE email = '$email'");
   print_r($duplicate);
   $dupLen = count($duplicate);
   if ($dupLen > 0) {
      echo
      "<script> alert('Username or Email Has Already Taken'); </script>";
   } else {
      if ($password == $confirmpassword) {
         $query = "INSERT INTO tb_user (username, email, password) VALUES('$username','$email','$password')";
         $result = insertQuery($conn, $query);
         print_r($result);
         if ($result) {
            $_SESSION["login"] = true;
            $_SESSION["id"] = $result;
            header("location: user.php");
         }
      } else {
         echo
         "<script> alert('Password Does Not Match'); </script>";
      }
   }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>register form</title>
   <script src="js/register.js"></script>
   <link rel="stylesheet" href="css/register_form.css">
</head>

<body>
   <div class="container" id="form">
      <div class="title">Sign Up</div>
      <form action="" method="post">
         <div class="userDetails">
            <div class="txt_field">
               <input type="text" name="username" required>
               <span></span>
               <label for="">Username</label>
            </div>
            <div class="txt_field">
               <input type="email" name="email" required>
               <span></span>
               <label for="">Email</label>
            </div>
            <div class="txt_field">
               <input type="password" name="password" id="password" required oninput="check()" onchange="release()">
               <span></span>
               <label for="">Password</label>
            </div>
            <div class="txt_field">
               <input type="password" name="confirmPassword" id="confirmPassword" required onkeyup="checkPassword()">
               <span></span>
               <label for="">Confirm Password</label>
            </div>
            <div class="conditions" id="conditions">
               <div id="set">
                  <div id="count">Length: 0</div>
               </div>
               <div id="check0" class="check">
                  <i class="fas fa-check-circle"></i><span>Length more than 5</span>
               </div>
               <div id="check1" class="check">
                  <i class="fas fa-check-circle"></i><span>Length less than 10</span>
               </div>
               <div id="check2" class="check">
                  <i class="fas fa-check-circle"></i><span>Contains numeric character</span>
               </div>
               <div id="check3" class="check">
                  <i class="fas fa-check-circle"></i><span>Contains special character</span>
               </div>
               <div id="check4" class="check">
                  <i class="fas fa-check-circle"></i><span>Shouldn't contain spaces</span>
               </div>
            </div>
         </div>
         <div class="txt_field" class="select">
            <select name="user_type" style="width:120px; height: 35px; text-align: center; font-size: 17px; background-color: transparent; border: 2px solid #301934; color: #301934;">
               <option value="user">user</option>
               <option value="admin">admin</option>
            </select>
         </div>
         <div class="button">
            <input type="submit" name="submit" value="register now" onclick="checkPassword()" class="form-btn">
            <p>already have an account? <a href="login_form.php">login now</a></p>
      </form>
   </div>
</body>

</html>