<?php
include_once 'header.php';
?>

<!-- Stylesheet for the mypage page -->
<link rel="stylesheet" href="css\mypage.css">

<div class="box-wrapper">
    <div class="box" id="register-box">
        <span class="title">
            <h2>My profile</h2>
        </span>

        <!-- Display the avatar -->
        <div class=icon-wrapper>
            <div class=icon>
                <?php
                include 'emojiAvatar.php';
                ?>
            </div>
        </div>

        <!-- Display the name -->
        <?php
        if (isset($_COOKIE["name"])) {
            echo "<p>" . $_COOKIE["name"] . "</p><br>";
        } else {
            header("Location: registration.php");
        }
        ?>

        <!-- Display the buttons -->
        <a href="avatar_selector.php"><button class="material-button" style=float:left>Edit</button></a>
        <a href="include/session_destroy.php"><button class="material-button" style=float:right>Logout</button></a>
    </div>
</div>

<?php
include_once 'footer.php';
?>