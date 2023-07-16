<?php
include_once 'header.php';
?>

<link rel="stylesheet" href="css\leaderboard.css">

<!-- Leaderboard header section starts -->
<ul id="leaderboard">
    <!-- This will be populated with JavaScript -->
</ul>
<!-- Leaderboard header section ends -->

<!-- Leaderboard table section starts -->
<div class="table-box">
    <table>
        <h1>Leaderboard</h1>
        <tbody id="leaderboard-table">
            <!-- This will be populated with JavaScript -->
        </tbody>
    </table>
</div>
<!-- Leaderboard table section ends -->

<!-- Script to populate the leaderboard -->
<script src="script/leaderboard.js"></script>

<?php
include_once 'footer.php';
?>