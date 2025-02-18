<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="loginstyle.css">
    <script type="text/javascript" src="../main.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"> 
</head>
<body>
    <div id="container">
        <div id="left">
            <p id="cursive-text">“Ang kabataan ang pag-asa ng Bayan”</p>
            <img src="SK-removebg-preview.png" alt="SK Logo" class="logo">
        </div>
        <div id="right">
            <h1>Project Operations Management System</h1>
            <h2>Log in</h2>
            <form>
                <input id="username" type="text" placeholder="username">
                <input id="password" type="password" placeholder="password">
                <input id="loginbtn" type="submit" class="submit-btn" value="LOGIN" onclick="return loginBtn()" ><i class="fas fa-arrow-right"></i>
                <a href="#" class="forgot-password">Forgot password?</a>
            </form>
        </div>
    </div>
</body>
</html>