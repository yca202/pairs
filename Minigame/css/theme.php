/* A PHP file that generates CSS based on the selected theme. */
<?php
header("Content-type: text/css");

// Themes
$themes = [
    'blue' => [
        'main-color' => 'blue',
        'secondary-color' => '#fc8955',
        'text-color' => 'white',
        'header-font-family' => 'verdana',
        'wallpaper-path' => '../background/arcade-unsplash.jpg'
    ],
    'aqua' => [
        'main-color' => '#0583d2',
        'secondary-color' => '#fc8955',
        'text-color' => 'white',
        'header-font-family' => 'verdana',
        'wallpaper-path' => '../background/arcade-unsplash.jpg'
    ],
    'cyber' => [
        'main-color' => '#F3E601',
        'secondary-color' => '#00f1ff',
        'text-color' => 'black',
        'header-font-family' => 'BlenderPro',
        'wallpaper-path' => '../background/cyberpunk.jpg'
    ]
];

// Get selected theme
$selected_theme = isset($_COOKIE['theme']) ? $_COOKIE['theme'] : 'blue';

// Get theme
$theme = $themes[$selected_theme];

?>

/* Set theme colors */
:root {
--main-color: <?= $theme['main-color'] ?>;
--secondary-color: <?= $theme['secondary-color'] ?>;
--text-color: <?= $theme['text-color'] ?>;
--header-font-family: <?= $theme['header-font-family'] ?>;
}

/* Set wallpaper */
div.background {
background-image: url("<?= $theme['wallpaper-path'] ?>");
}

/* Set font family */
* {
margin: 0;
font-family:
<?= ($selected_theme == 'cyber') ? "\"BlenderPro\", \"Montserrat\", sans-serif" : "\"Gotham SSm\",\"Lato\", \"Montserrat\", sans-serif;" ?>;
}