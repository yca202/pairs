<?php
include_once 'header.php';
?>
<link rel="stylesheet" href="css\avatarselector.css">

<!-- Send the use to the registration page if they are not logged in -->
<?php
if (!isset($_COOKIE["name"])) {
    header("Location: registration.php");
}
?>
<div class=box-wrapper>
    <div class="box">

        <!-- Display the title -->
        <div class=avasection>
            <h2>Choose your avatar</h2>
        </div>

        <link rel="stylesheet" href="css\emojiAvatar.css">

        <!-- The avatar selector -->
        <div class="selection-wrapper">

            <!-- The preview of the avatar -->
            <div id="preview">
                <div class="emoji-avatar" style="background-color: #F5F5F5">
                    <span class="face"><img src="images/skin-3.png"></span>
                    <span class="face"><img src="images/eyes-1.png"></span>
                    <span class="face"><img src="images/mouth-1.png"></span>
                    <span class="accessory">t</span>
                </div>
            </div>

            <!-- The carousel selectors for the avatar -->
            <div class="selectors">
                <div class="selector">
                    <button onclick="scrollRightSelectorEye()" style="float:left">&#9664</button>
                    <div id="eye" class="carousel">
                        <div id="eyeBox0" class="eye selection-box i0"></div>
                        <div id="eyeBox1" class="eye selection-box i1"></div>
                        <div id="eyeBox2" class="eye selection-box i2"></div>
                        <div id="eyeBox3" class="eye selection-box i3"></div>
                        <div id="eyeBox4" class="eye selection-box i4"></div>
                    </div>
                    <button onclick="scrollLeftSelectorEye()" style="float:right">&#9654</button>
                </div>
                <div class="selector">
                    <button onclick="scrollRightSelectorMouth()" style="float:left">&#9664</button>
                    <div id="mouth" class="carousel">
                        <div id="mouthBox0" class="mouth selection-box i0"></div>
                        <div id="mouthBox1" class="mouth selection-box i1"></div>
                        <div id="mouthBox2" class="mouth selection-box i2"></div>
                        <div id="mouthBox3" class="mouth selection-box i3"></div>
                        <div id="mouthBox4" class="mouth selection-box i4"></div>
                    </div>
                    <button onclick="scrollLeftSelectorMouth()" style="float:right">&#9654</button>
                </div>
                <div class="selector">
                    <button onclick="scrollRightSelectorItem()" style="float:left">&#9664</button>
                    <div id="item" class="carousel">
                        <div id="itemBox0" class="item selection-box i0"></div>
                        <div id="itemBox1" class="item selection-box i1"></div>
                        <div id="itemBox2" class="item selection-box i2"></div>
                        <div id="itemBox3" class="item selection-box i3"></div>
                        <div id="itemBox4" class="item selection-box i4"></div>
                    </div>
                    <button onclick="scrollLeftSelectorItem()" style="float:right">&#9654</button>
                </div>
            </div>
        </div>

        <!-- Display the button for going back to the previous page -->
        <a href="registration.php"><button class="material-button" id="previous">Previous</button></a>

        <!-- A form that sends the selected avatar to the include files -->
        <form action="include\avatar_inc.php" medthod="post">

            <!-- A hidden input that stores the selected avatar -->
            <div style="display: none;">
                <select id="eye-options" name="eyes">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                    <option value="6">Option 6</option>
                </select>
                <select id="mouth-options" name="mouth">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                    <option value="6">Option 6</option>
                </select>
                <select id="item-options" name="item">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                    <option value="6">Option 6</option>
                </select>
            </div>

            <!-- Display the button for going to the next page -->
            <button type="submit" class="material-button" id="next">Next</button>
        </form>
    </div>
</div>

<!-- javascript for handling the box-->
<script src="script/avatarSelector.js"></script>

<?php
include_once 'footer.php';
?>