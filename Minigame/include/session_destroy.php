<!-- Destroy cookies -->

<?php
setcookie("name", "value", time() - (60 * 60 * 24), '/');
setcookie("mouthValue", "value", time() - (60 * 60 * 24), '/');
setcookie("eyeValue", "value", time() - (60 * 60 * 24), '/');
setcookie("itemValue", "value", time() - (60 * 60 * 24), '/');
header("location: ../index.php");
