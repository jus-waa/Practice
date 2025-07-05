<?php
//database config
$host = "localhost";
$username = "root";
$password = "";
$dbname = "testdb";
$port = "3306";

// create connection
$conn = new mysqli($host, $username, $password, $dbname, $port);

// check connection
if ($conn->connect_errno){
    die("Connection Failed: " . $conn->connect_errno);
}
echo "Connected Successfully";
?>