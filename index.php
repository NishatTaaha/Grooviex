<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="login_form.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kablammo&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Acme&family=Kablammo&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>Document</title>
</head>

<body>
    <nav class="sidebar close">
        <header>
            <div class="imageDiv">
                <span class="image">
                    <i class="fa-brands fa-slack"></i>
                </span>
                <a href="user.php" style="text-decoration: none;">
                    <div class="text" id="headerText">
                        <span class="name">Grooviex</span>
                    </div>
                </a>
            </div>
            <!-- <div class="userDiv">Welcome</div> -->
        </header>
        <div class="menuBar">
            <div class="menu">
                <li class="searchBox">
                    <i class="fas fa-search icon"></i>
                    <input type="search" name="" id="myInput" onkeyup="myFunction()" placeholder="Search....">
                </li>
            </div>
            <h2>Favourites</h2>
            <div class="favdiv"></div>
            <div class="bottomContent">
                <li class="mode">
                    <div class="moonSun">
                        <i class="fa-solid fa-moon icon moon"></i>
                        <i class="fa-solid fa-sun icon sun"></i>
                    </div>
                    <span class="modeText text">Light Mode</span>
                    <div class="toggleSwitch">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>
    <header class="topClass">
        <div class="buttonClass">
            <div class="btn-box">
                <a class="button-value" onclick="filterSongs('All')">All</a>
                <a class="button-value" onclick="filterSongs('English')">English</a>
                <a class="button-value" onclick="filterSongs('Bengali')">Bengali</a>
                <a class="button-value" onclick="filterSongs('Hindi')">Hindi</a>
                <a class="button-value" onclick="filterSongs('Violin')">Violin</a>
                <a class="button-value" onclick="filterSongs('Guitar')">Guitar</a>
            </div>
            <div class=" headerBtn">
                <div class="inDiv">
                    <!-- <a href="login_form.php">Sign In</a> -->
                </div>
                <div class="upDiv">
                    <i class="fa-solid fa-right-from-bracket icon"></i>
                    <a href="login_form.php">Log Out</a>
                </div>
            </div>





        </div>
        <div class="mainSongs">
            <div class="song_side">
                <div class="popular_song">
                    <div class="pop_song" id="myUL">
                    </div>
                </div>
            </div>
        </div>
        <!-- master_play div  -->
        <!-- -------------------------------------------->
        <div class="master_play">
            <div class="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="img/26.jpg" alt="Alan" id="poster_master_play">
            <h5 id="title">Cholo Shobai<br>
                <div class="subtitle">Fuad</div>
            </h5>
            <div class="icon">
                <i class="fa-solid fa-backward" id="back"></i>
                <i class="fa-solid fa-circle-play" id="masterPlay"></i>
                <i class="fa-solid fa-forward" id="next"></i>
            </div>
            <span id="currentStart">0:00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" value="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0:00</span>
            <div class="vol">
                <i class="fas fa-volume-down" id="vol_icon"></i>
                <input type="range" id="vol" min="0" value="30" max="100">
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>
        </div>
    </header>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="js/indexScript.js"></script>
</body>

</html>