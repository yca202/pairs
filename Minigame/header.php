<!DOCTYPE html>
<html lang="en">

<head>
    <title>Pairs</title>
    <meta charset="UTF-8">
    <link href="icon\icon.png" rel="icon" type="image/png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css\main.css">
    <link rel="stylesheet" href="css\theme.php">
    <link rel="stylesheet" href="css\font.css">
</head>

<body>
    <!-- Header section starts -->
    <div class="header">
        <!-- Navigation bar starts -->

        <!-- Menu item left -->
        <ul class="home">
            <li name="home"><a href="index.php">Home</a></li>
        </ul>

        <!-- Menu items right -->
        <!-- Hamburger-menu will only show if display with a screen width of 750px or less -->
        <span class="hamburger-menu">&#9776;</span>

        <ul class="menu">
            <!-- Generate menu items depending on if the user is logged in or not -->
            <?php if (isset($_COOKIE["name"]) & isset($_COOKIE["eyeValue"]) & isset($_COOKIE["itemValue"]) & isset($_COOKIE["mouthValue"])) {
                echo "<li name=\"leaderboard\"><a href=\"leaderboard.php\">Leaderboard</a></li>
                      <li name=\"mypage-mobile\" style=\"display: none;\"><a href=\"mypage.php\">My-page</a></li>";
            } else {
                echo "<li name=\"register\"><a href=\"registration.php\">Register</a></li>";
            }
            ?>

            <!-- Menu items that are always visible -->
            <li name="memory"><a href="pairs.php">Play Pairs</a></li>

            <!-- Menu items that are only visible if display with a screen width of 750px or less -->
            <div class="mobile" style="display:none">
                <hr>
                <li><a style="user-select:none;">Themes:</a></li>
                <li onclick="setTheme('blue')"><a style="color:blue; cursor: pointer;">Coursework</a></li>
                <li onclick="setTheme('aqua')"><a style="color:#0583d2; cursor: pointer;">Default</a></li>
                <li onclick="setTheme('cyber')"><a style="color:#F3E601; cursor: pointer;">Cyberpunk</a></li>
            </div>
        </ul>

        <!-- Avatar icon -->
        <a href="mypage.php">
            <div class="navicon">
                <?php if (isset($_COOKIE["name"]) & isset($_COOKIE["eyeValue"]) & isset($_COOKIE["itemValue"]) & isset($_COOKIE["mouthValue"])) {
                    include 'emojiAvatar.php';
                }
                ?>
            </div>
        </a>
        <!-- Navigation bar ends -->
    </div>
    <!-- Header section ends -->

    <!-- Theme selector starts -->
    <div class="theme-selector">
        <div class="color-palette">
            <label onclick="setTheme('blue')" style="background: blue;"></label>
            <label onclick="setTheme('aqua')" style="background: #0583d2;"></label>
            <label onclick="setTheme('cyber')" style="background: #f3e601;"></label>
        </div>
    </div>
    <script src="script/main.js"></script>
    <!-- Theme selector ends -->

    <!-- Main content section starts -->
    <main>
        <div id="main">
            <div class=background></div>