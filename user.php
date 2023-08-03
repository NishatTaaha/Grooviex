<?php
require 'config.php';
$conn = dbConnection();
$authenticated = false;
if (isset($_SESSION["login"]) && $_SESSION["login"] === true) {
    $authenticated = true;
}

if (!$authenticated) {
    header("location: login_form.php");
}
$user = null;
if (isset($_SESSION["id"])) {
    $id = $_SESSION["id"];
    $result = getQuery($conn, "SELECT * FROM tb_user WHERE id = $id");
    $dataLen = count($result);
    if ($dataLen == 1) {
        $user = $result[0];
    }
} else {
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/user.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <!-- header starts -->
    <div class="header">
        <div class="navbar">
            <div class="logo">
                <i class="fa-brands fa-slack"></i>
                <h2>Grooviex</h2>
            </div>

            <div class="toggler" onclick="navDisplay()">
                <button class="toggler-btn"><i class="fas fa-bars" onclick="changeBar(this)"></i></button>
            </div>
            <div class="social">
                <ul>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- header ends -->
    <!-- home stars -->
    <div id="home" class="home-container">
        <video id="myVideo" autoplay muted loop>
            <source src="userImage/music.mp4" style="overflow-y: hidden;">
        </video>
        <section class="home">
            <div class="left">
                <h1>welcome <?php echo $user["username"]; ?></h1>
                <h3>$ <span></span></h3>
                <div class="btns">
                    <a href="index.php">Explore Your's! --> </a>
                </div>
            </div>
            <div class="right">
                <div class="imges">
                    <img src="userImage/m1.jpg" alt="" id="homeImg">
                </div>
            </div>
        </section>
    </div>


</body>
<script src="js/userScript.js"></script>

</html>