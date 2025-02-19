<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page if not logged in
    header("Location: ?");
    exit();
}

?>
<h1>TO-DO</h1>