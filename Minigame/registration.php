<?php
include_once 'header.php';
?>
<?php
$redborder = '';
if (isset($_GET["error"])) {
    $redborder = 'style="border-color: red;"';
}
$redColor = '';
if (isset($_GET["error"])) {
    $redColor = 'style="color: red;"';
}
?>

<link rel="stylesheet" href="css\register.css">

<div class="box-wrapper">
    <div class="box" id="register-box">

        <!-- Display the title -->
        <span class="title">
            <h2>Choose your name</h2>
        </span>

        <!-- Form section starts -->
        <div class="form-wrapper">
            <form action="include/registration.inc.php" medthod="post">

                <!-- Form display section starts-->
                <div class="input-field-wrapper">

                    <!-- Display the input field -->
                    <div class="input-field">

                        <input type="text" name="uname" required <?= $redborder ?>>
                        <label <?= $redColor ?>>&nbspusername&nbsp</label>
                    </div>

                    <!-- Display the error message -->
                    <label class="error">
                        <?php
                        if (isset($_GET["error"])) {
                            if (preg_match("/invalid/", $_GET["error"])) {
                                echo "<p>The username musn't contains any of the<br> invalid characters</p>";
                            }
                            if (preg_match("/empty/", $_GET["error"])) {
                                echo "<p>The username musn't be empty</p>";
                            }
                            if (preg_match("/long/", $_GET["error"])) {
                                echo "<p>The username musn't be longer than<br> 30 characters</p>";
                            }
                            if (preg_match("/short/", $_GET["error"])) {
                                echo "<p>The username musn't be shorter than<br> 2 characters</p>";
                            }
                        }
                        ?>
                    </label>

                </div>
                <!-- Form display section ends -->

                <!-- Display the button -->
                <button class="material-button" id="next" type="submit" name="submit">Next</button>
            </form>
        </div>
        <!-- Form section ends -->

    </div>
</div>

<?php
include_once 'footer.php';
?>