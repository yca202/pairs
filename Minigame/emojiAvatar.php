<!-- A script to show the emoji combination the user has selected once included -->

<!-- Getting cookie section starts -->
<?php
if (isset($_COOKIE["eyeValue"])) {
    $eye = $_COOKIE["eyeValue"];
}
if (isset($_COOKIE["mouthValue"])) {
    $mouth = $_COOKIE["mouthValue"];
}
if (isset($_COOKIE["eyeValue"])) {
    $eye = $_COOKIE["eyeValue"];
}
if (isset($_COOKIE["itemValue"])) {
    switch ($_COOKIE["itemValue"]) {
        case 1:
            $item = "&#8986";
            $class = "accessory";
            break;
        case 2:
            $item = "&#127918";
            $class = "accessory";
            break;
        case 3:
            $item = "&#127913";
            $class = "hat";
            break;
        case 4:
            $item = "&#129506";
            $class = "hat";
            break;
        case 5:
            $item = "&#128077";
            $class = "accessory";
            break;
        case 6:
            $item = "&#127922";
            $class = "accessory";
            break;
    }
}
?>
<!-- Getting cookie section ends -->

<!-- Combination sections starts -->
<link rel="stylesheet" href="css\emojiAvatar.css">
<div class="emoji-avatar" style="background-color: #F5F5F5">
    <span class="face"><img src="images/skin-3.png"></span>
    <span class="face"><img src="images/eyes-<?= $eye ?>.png"></span>
    <span class="face"><img src="images/mouth-<?= $mouth ?>.png"></span>
    <span class=<?= $class ?>><?= $item ?></span>
</div>
<!-- Combination section ends -->