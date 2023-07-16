<?php
include_once 'header.php';
?>

<!-- Stylesheet for the index page -->
<link rel="stylesheet" href="css\index.css">
<!-- Stylesheet for the button -->
<link rel="stylesheet" href="css\cyber.css">


<div class=welcome>
	<div class="welcome-message">
		<p style='font-size:36px' class="animated-text">Welcome to pairs</p>
	</div>

	<?php
	// Generate welcome message and button depending on if the user is logged in or not
	if (isset($_COOKIE["name"]) & isset($_COOKIE["eyeValue"]) & isset($_COOKIE["itemValue"]) & isset($_COOKIE["mouthValue"])) {
		$mainMessage = "";
		$buttonMessage = "Click here to play";
		$buttonLink = "pairs.php";
	} else {
		$mainMessage = "You're not using a registered session?";
		$buttonMessage = "Register now";
		$buttonLink = "registration.php";
	}

	// Generate the welcome message and button depending on the theme
	if (!isset($_COOKIE["theme"]) || ($_COOKIE["theme"] != "cyber")) {
		echo "<div class=\"secondary-message animated-text\" >$mainMessage</div>" . "<div class=\"welcome-button animated-text\">" .
			"<a href=\"$buttonLink\"><button name=\"pairs\">$buttonMessage</button></a></div>";
	} else {
		echo "<div class=\"secondary-message animated-text\">$mainMessage</div>" . "<a href=\"$buttonLink\">" .
			"<button class=\"cybr-btn animated-text\">
			$buttonMessage<span aria-hidden> </span>
			<span aria-hidden class=\"cybr-btn__glitch \">$buttonMessage</span>
		</button></a>";
	}
	?>
</div>
<script src="script/index.js"></script>
<?php
include_once 'footer.php';
?>