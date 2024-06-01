<?php
include 'db.php';

$name = $_POST["name"]??null;
$email = $_POST["email"]??null;
$password = $_POST["password"]??null;
if (!$name || !$email || !$password) {
    echo("Missing form data.");
    exit();
}

$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

$sql = "INSERT INTO users(name, email, password) VALUES ('".$name."', '".$email."', '".$hashedPassword."')";

if ($conn->query($sql) === TRUE) {
    echo("User registered Successfully.");
} else {
    echo("Query exception Error: " . $conn->error);
}

$conn->close();
?>