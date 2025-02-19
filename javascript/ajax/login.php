<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="../../design/css/loginstyle.css">
    <script type="text/javascript" src="../main.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"> 
</head>
<body>
    <div id="container">
        <div id="left">
            <p id="cursive-text">“Ang kabataan ang pag-asa ng Bayan”</p>
            <img src="../../asset/SK-removebg-preview.png" alt="SK Logo" class="logo">
        </div>
        <div id="right">
            <div class="button-container">
                <button class="modal-btn" onclick="openLoginModal()">Login</button>
                <button class="modal-btn about-btn" onclick="openAboutModal()">About</button>
            </div>
        </div>

        <div id="loginModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeLoginModal()">&times;</span>
                <h2>Log in</h2>
                <form>
                    <input id="username" type="text" placeholder="username">
                    <input id="password" type="password" placeholder="password">
                    <input id="loginbtn" type="submit" class="submit-btn" value="LOGIN" onclick="return loginBtn()">
                    <a href="#" class="forgot-password">Forgot password?</a>
                </form>
            </div>
        </div>

        <div id="aboutModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeAboutModal()">&times;</span>
                <h2>About</h2>
                <p>SK Operations Management System</p>
                <p>Developed by <span><strong><a href="AbouTheDevs.php">ByteForge Developers</a></strong></span></p>
            </div>
        </div>
    </div>
    <script>
        function openLoginModal() {
            document.getElementById('loginModal').style.display = 'block';
        }

        function closeLoginModal() {
            document.getElementById('loginModal').style.display = 'none';
        }

        function openAboutModal() {
            document.getElementById('aboutModal').style.display = 'block';
        }

        function closeAboutModal() {
            document.getElementById('aboutModal').style.display = 'none';
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
    </script>
</body>
</html>
