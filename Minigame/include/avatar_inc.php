<!-- This file is used to check the input from the user selection for the emojis -->

<?php
$eyesValue = $_GET['eyes'];
$mouthValue = $_GET['mouth'];
$itemValue = $_GET['item'];
$error = false;

echo $_GET['eyes'];
if (!isset($_COOKIE["name"])) {
    header("Location: ../registration.php");
} elseif (!isset($itemValue) | !isset($mouthValue) | !isset($eyesValue)) {
    $error = true;
    header("Location: ../registration.php");
}
if (!$error) {
    setcookie("eyeValue", $eyesValue, time() + (60 * 60 * 24), '/');
    setcookie("mouthValue", $mouthValue, time() + (60 * 60 * 24), '/');
    setcookie("itemValue", $itemValue, time() + (60 * 60 * 24), '/');
    header("Location: ../index.php");
}
