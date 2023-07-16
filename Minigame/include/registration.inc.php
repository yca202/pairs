<!-- This file is used to check the input from the registration form and set the cookie if the input is valid. -->

<?php
$name = $_GET['uname'];
$error = false;
$regex = '/[!@#%^&*()+={}\[\]\—;:\'\"<>?\/]/';
$errors = "Location: ../registration.php";
if (trim($name) === '') {
    $error = true;
    $errors .= "?error=empty";
}
if (preg_match($regex, $name)) {
    $error = true;
    $errors .= "?error=invalid";
}
if (!isset($GET['uname'])) {
    header($errors);
}
if (strlen($name) > 30) {
    $error = true;
    $errors .= "?error=long";
}
if (strlen($name) < 2) {
    $error = true;
    $errors .= "?error=short";
}
if (!$error) {
    setCookie("name", $name, time() + (60 * 60 * 24), '/');
    header("Location: ../avatar_selector.php");
} else {
    header($errors);
}
