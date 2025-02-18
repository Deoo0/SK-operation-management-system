<?php
    function nav(){
        ?>
        <nav id="navbar">
            <ul>
                <li><a href="?nav=home">HOME</a></li>
                
                <!-- session_start();
                if(isset($_POST['user_id'])){
                    $user_id = $_SESSION['user_id'];
                    include('javascript/ajax/config.php');

                    $sql_userchecker = mysqli_query($conn, "SELEC * FROM login WHERE id = $user_id");
                    $data = mysqli_fetch_assoc($sql_userchecker);
                    $usertype_id = $data['usertype_id']; -->
                    
                    <!-- echo--><li><a href="?nav=budget">BUDGET MANAGEMENT</a></li>
                    <!-- echo--><li><a href="?nav=events">EVENTS</a></li>
                    <!-- echo--><li><a href="?nav=documents">DOCUMENTS</a></li>
                    <!-- echo--><li><a href="?nav=statistics">STATISTICS</a></li>
                    <!-- echo--><li><a href="?nav=tasks">TO-DO</a></li>
                     <!-- echo--><li><a href="?nav=users">USERS</a></li>
                    <!-- echo--><li><a href="?nav=logout">LOGOUT</a></li>
                <!-- } -->
            </ul>
        </nav>


        <?php
    }

?>