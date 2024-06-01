<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = "user_db";

$conn = new mysqli($servername, $username, $password, $db);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
// echo("Database Connected Successfully.")
?>