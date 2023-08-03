<?php
include "config.php";
$conn = dbConnection();
$authenticated = false;
if (isset($_SESSION["login"]) && $_SESSION["login"] === true) {
   $authenticated = true;
}
if ($authenticated) {
   header("location: user.php");
}
$login_error_message = null;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $email = $_POST["email"];
   $password = $_POST["password"];
   $sql = "select * from tb_user where email = '$email' and password = '$password'";
   $result = getQuery($conn, $sql);
   $dataLen = count($result);
   if ($dataLen == 1) {
      $result = $result[0];
      $_SESSION["login"] = true;
      $_SESSION["id"] = $result["id"];
      header("location: user.php");
   } else {
      $_SESSION["login"] = false;
      $_SESSION["id"] = null;
      $login_error_message = "Please correct email and password";
   }
}

dbClose($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>login form</title>
   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/login_form.css">
</head>

<body>
   <div class="center" id="overlay">
      <h1>login now</h1>
      <form action="login_form.php" method="post" autocomplete="off">
         <div class="txt_field">
            <input type="email" name="email" required>
            <span></span>
            <label for="">Email</label>
         </div>
         <div class="txt_field">
            <input type="password" name="password" required>
            <span></span>
            <label for="">Password</label>
         </div>
         <div class="pass" style="color: red; font-weight: bold;"><?php echo $login_error_message; ?></div>
         <div class="pass">Forgot Password?</div>
         <a href="index.php"><input type="submit" name="submit" class="form-btn" value="Login" onclick="myFunction()"></a>
         <div class="signup_link">
            Not a member? <a href="register_form.php">Sign Up</a>
         </div>
      </form>
   </div>
</body>

</html>