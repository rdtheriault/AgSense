<?php
// Set your return content type
header('Content-type: text/html');
ini_set("allow_url_fopen", true);
// Website url to open
$url = $_GET['url'];
$url = str_replace("/%3A", ":", $url);

// Get that website's content
$handle = fopen($url, "r");

// If there is something, read and return
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}

?>
