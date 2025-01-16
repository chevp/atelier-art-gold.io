<?php

// Helper function to check if a string starts with a given substring
function startsWith($haystack, $needle)
{
    return substr($haystack, 0, strlen($needle)) === $needle;
}

// Get the URL path
$url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

// Define the route mappings
$routes = [
    '/content'           => '/../content/ContentView.php',
    '/read'              => '/../read/ReadView.php',
    '/page'              => '/../page/PageView.php',
    '/plugin'            => '/../plugin/PluginView.php',
    '/img'               => '/../img/ImageView.php',
    '/search'            => '/../search/SearchView.php',
    '/sc-admin'          => '/../sc-admin/index.php',
    '/auth/authenticate' => '/../auth/authenticate.php',
    '/auth/logout'       => '/../auth/logout.php',
    '/auth/style.css'    => '/../auth/style.css',
    '/auth/login'        => '/../auth/index.html',
    '/auth/home'         => '/../auth/home.php',
    '/auth/registrate'   => '/../auth/registrate.php',
    '/auth/profile'      => '/../auth/profile.php'
];

// Iterate through the routes and check if the URL matches any route
foreach ($routes as $route => $view) {
    if (startsWith($url, $route)) {
        // If a match is found, include the corresponding view file
        if ($route === '/auth/style.css') {
            header('Content-Type: text/css');
        }
        include __DIR__ . $view;
        exit; // Stop further processing once a match is found
    }
}

// If no match is found, redirect to a default page
header('Location: https://atelier-art-gold.ch/content/aag-home');
exit;

?>