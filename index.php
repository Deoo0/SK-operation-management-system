<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="javascript/main.js"></script>
    <link rel="stylesheet" href="design/css/style.css">
    <title>HOME</title>
</head>
<body>
    <?php
    error_reporting(1);
    session_start();
    include('nav.php');
    nav();

    switch($_REQUEST['nav']){
        case 'home':
            include('home.php');
            break;
        case 'budget':
            include('budget_management.php');
            break;
        case 'events':
            include('events.php');
            break;
        case 'documents':
            include('documents.php');
            break;
        case 'statistics':
            include('statistics.php');
            break;
        case 'tasks':
            include('task.php');
            break;
        case 'users':
            include('users.php');
            break;
        case 'logout':
            include('logout.php');
            break;

        default:
        include('home.php');
        break;
    }
    
    ?>
    
</body>
</html>