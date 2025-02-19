<?php
    function nav(){
        ?>
        <nav id="navbar">
            <ul class="nav-menu">
                <li><a href="?nav=home">HOME</a></li>
                <?php
                session_start();
                if(isset($_SESSION['user_id'])){
                    $user_id = $_SESSION['user_id'];
                    include('javascript/ajax/config.php');

                    $sql_userchecker = mysqli_query($conn, "SELECT * FROM users WHERE id = $user_id");
                    $data = mysqli_fetch_assoc($sql_userchecker);
                    $usertype_id = $data['usertype_id'];
                    echo '<li><a href="?nav=budget">BUDGET MANAGEMENT</a></li>';
                    echo '<li><a href="?nav=events">EVENTS</a></li>';
                    echo '<li><a href="?nav=documents">DOCUMENTS</a></li>';
                    echo '<li><a href="?nav=statistics">STATISTICS</a></li>';
                    echo '<li><a href="?nav=tasks">TO-DO</a></li>';
                    if ($usertype_id == 1 || $usertype_id == 0) {
                        echo '<li><a href="?nav=user">USERS</a></li>';
                    }
                    echo ' <li><a id="logout" href="?nav=logout">LOGOUT</a></li>';
                } else {
                    echo '<li><a id="login" href="javascript/ajax/login.php" >LOGIN</a></li>';
                }
                
                ?>
            </ul>
        </nav>


        <?php
    }

?>