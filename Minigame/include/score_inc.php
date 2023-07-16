<!-- This file is used to save the score of the user from the POST request made by pairs game-->

<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'), true);

    if (isset($postData['username']) && isset($postData['cookieData'])) {
        $username = $postData['username'];
        $cookieData = $postData['cookieData'];
        $usericon = [$_COOKIE['eyeValue'], $_COOKIE['mouthValue'], $_COOKIE['itemValue']];
        $usericon = json_encode($usericon);

        // Set the cookies
        setcookie("level_" . $username, $cookieData['level'], time() + (86400 * 30), "/"); // Expires in 30 days
        setcookie("highestscore_" . $username, $cookieData['highestScore'], time() + (86400 * 30), "/"); // Expires in 30 days
        setcookie('icon_' . $username, $usericon, time() + (86400 * 30), "/"); // Expires in 30 days

        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' => $username, $_COOKIE['mouthValue']]);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid data received']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
