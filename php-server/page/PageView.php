<?php 

// Include the PageService class for database interaction
include('PageService.php');

// Get the page name from the URL and fetch the corresponding content from the database
$pageName = basename($_SERVER["REQUEST_URI"]);
$data = PageService::findOneContentByName($pageName);

// Check if data was returned and set the appropriate Content-Type header
if ($data) {
    header("Content-Type: " . $data->content_type);
}

// Output the content if found and valid, otherwise show a 404 Not Found message
if ($data && $data->content_type == 'text/html' && $data->content) {
    // If the content type is 'text/html' and content exists, display it
    echo $data->content;
} else {
    // If no content or invalid content type, display a 404 error message
    echo '<center style="margin-top:200px;font-size:48pt;font-weight:bold;"><pre>404 Not Found</pre></center>';
}

?>