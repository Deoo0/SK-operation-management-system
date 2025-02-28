<!-- <?php
session_start();
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page if not logged in
    header("Location: ?");
    exit();
}

?> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Management - SK Operation Management</title>
    <link rel="stylesheet" href="design/css/budgetstyle.css">
</head>
<body>
<div class="parent">
    <div class="div1">
        <header>
            <h1>SK Operations Management System</h1>
        </header>
    </div>
    <div class="div2">
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
    </div>
    <div class="div3">
        <!-- Placeholder for Graph 1 -->
        <canvas id="projectGraph1"></canvas>
    </div>
    <div class="div4">
        <!-- Placeholder for Graph 2 -->
        <canvas id="projectGraph2"></canvas>
    </div>
    <div class="div5">
        <!-- Placeholder for Project Summary 1 -->
        <h2>Project Summary 1</h2>
        <p>Details about the first project...</p>
    </div>
    <div class="div6">
        <!-- Placeholder for Project Summary 2 -->
        <h2>Project Summary 2</h2>
        <p>Details about the second project...</p>
    </div>
</div>
</body>
</html>
