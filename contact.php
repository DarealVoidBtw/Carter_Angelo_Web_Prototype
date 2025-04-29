<?php

$host="localhost";
$username="sha_24243575_Flynn";
$password="!Password&2025";
$dbname="sha24243575_Enquiries";

$conn = mysqli_connect($host, $username, $password, $dbname);

if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());    
}


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

if (empty($name) && empty($email) && empty($message)){
    echo 'Please correct fields';
    return false;
}

$sql = "INSERT INTO contacts(name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE){
    echo "New record created sucessfully";
} else {
    echo "Error: " . sql . "<br>" . $conn->error;
}

$conn->close;
?>