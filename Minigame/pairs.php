<?php
include_once 'header.php';
?>

<!-- Stylesheet for the pairs page -->
<link rel="stylesheet" href="css/pairs.css">

<!-- Dialog section starts -->
<!-- This disables and provides white overlay until user interacts with the dialog window -->
<div id="dialogoverlay"></div>
<div class="dialog-wrapper">
    <div class="dialog">
        <div id="dialogbox">
            <div id="dialogboxbody"></div>
            <div class="dialogbutton" id="dialogboxfootL"></div>
            <div class="dialogbutton" id="dialogboxfootR"></div>
        </div>
    </div>
</div>
<script src="script/customAlert.js"></script>
<!-- Dialog section ends -->

<!-- Pairs section starts -->
<div class="pairs-wrapper">
    <div class="gray-box">
        <div class="cards-wrapper">

            <!-- Developer tools starts -->
            <div class="dev">
                <button class="material-button" onclick="skipLevel()">Skip Level</button>
                <button class="material-button" onclick="getLevelPoints()">Print cookies</button>
                <button class="material-button" onclick="hoverToggle()">Show cards</button>
            </div>
            <!-- Developer tools ends -->

            <!-- Level and score starts -->
            <div id="score"></div>
            <div id="timer">
                <span id="timer-loading" class=""></span>
                <span id="timer-dynamic" class="timer-item">
                    <span class="left">Flips: 48</span>
                    <span class="separator">|</span>
                    <span class="right">1:05</span>
                </span>
                <span id="timer-static">
                    <span class="timer-item">
                        <span class="left">Pairs: 2</span>
                        <span class="separator">|</span>
                        <span class="right">level: 1</span>
                    </span>
                    <span class="timer-item">
                        <span class="left">Score: 0</span>
                        <span class="separator">|</span>
                        <span class="right"><button class="material-button"
                                onclick="gameEnd()">Surrender</button></span>
                    </span>
                </span>
            </div>

            <!-- Level and score ends -->

            <!-- Cards div starts -->
            <ul class="cards">
                <!-- javascript will populate this area -->
            </ul>
            <!-- Cards div ends -->
        </div>

        <!-- Card template starts -->
        <div style="display: none" class="cardTemplate">
            <li class="card">
                <div class="view front-view glow">
                    <img src="images/que_icon.svg" alt="icon">
                </div>
                <div class=""></div>
                <div class="view back-view glow">
                    <img class="skin" src="images/skin-3.png">
                    <img class="eyes" src="images/eyes-1.png">
                    <img class="mouth" src="images/mouth-2.png">
                </div>
            </li>
        </div>
        <!-- Card template ends -->
    </div>
    <!-- Javascript for the pair game -->
    <script src="script/pairs.js"></script>
</div>
<!-- Pairs section ends -->

<?php
include_once 'footer.php';
?>