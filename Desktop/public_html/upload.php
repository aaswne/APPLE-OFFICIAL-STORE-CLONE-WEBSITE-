<?php
if(isset($_FILES['cv'])){
    $file = $_FILES['cv'];
    $uploadDir = "uploads/";

    // Create folder if it doesn't exist
    if(!is_dir($uploadDir)){
        mkdir($uploadDir, 0777, true);
    }

    $filePath = $uploadDir . basename($file['name']);

    if(move_uploaded_file($file['tmp_name'], $filePath)){
        echo "<h2>✅ CV Uploaded Successfully!</h2>";
        echo "<a href='index.html'>Go Back</a>";
    } else {
        echo "<h2>❌ Upload Failed!</h2>";
    }
}
?>