<?php
session_start();
session_destroy();
header("location: javascript/ajax/login.php");

?>