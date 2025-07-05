<?php
//database config
$host = "localhost";
$username = "root";
$password = "";
$dbname = "testdb";
$port = "3306";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;port:$port", $username, $password); //instantiating pdo class ($pdo is an instance of pdo class.)
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //configures how pdo behaves
} catch (PDOException $e) {
    echo "Connection Failed: " . $e->getMessage();
}
?>