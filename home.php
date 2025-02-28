<?php
session_start();
include('javascript/ajax/config.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - SK Operation Management</title>
    <link rel="stylesheet" href="design/css/homestyle.css">
</head>
<body>
    <nav class="nav-floating">
        <ul>
            <li><a href="?nav=home">Home</a></li>
            <li><a href="?nav=tasks">Tasks</a></li>
            <li><a href="?nav=documents">Documents</a></li>
            <li><a href="?nav=events">Events</a></li>
        </ul>
        <div class="logout-container">
            <a href="logout.php" class="logout-btn">Logout</a>
        </div>
    </nav>

    <header>
        <h1>SK Operations Management System</h1>
    </header>
    
    <div class="main-content">
        <img src="asset/SK-removebg-preview.png" alt="SK Logo" class="logo-center">
    </div>
</body>
</html>
