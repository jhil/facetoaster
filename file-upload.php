<?php

$client_id = ccb04612b4a8b91;

if (@$_FILES['file']['error'] !== 0 || @$_FILES['file']['size'] > 50000) {
    exit;
}

$filetype = explode('/',mime_content_type($_FILES['file']['tmp_name']));
if ($filetype[0] !== 'image') {
    die('Invalid image type');
}

$image = file_get_contents($_FILES['file']['tmp_name']);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.imgur.com/3/image.json');
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER, array( 'Authorization: Client-ID ' . $client_id ));
curl_setopt($ch, CURLOPT_POSTFIELDS, array( 'image' => base64_encode($image) ));

$reply = curl_exec($ch);

curl_close($ch);

$reply = json_decode($reply);

echo "<h3>Image</h3>";
printf('<img height="180" src="%s" >', $reply->data->link);

echo "<h3>API Debug</h3><pre>";
var_dump($reply);

?>