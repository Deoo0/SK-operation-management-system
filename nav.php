<?php
    function nav(){
        ?>
        <nav id="navbar">
            <ul>
                <li><a href="?">HOME</a></li>
                <?php
                session_start();
                if(isset($_POST['user_id'])){
                    $user_id = $_SESSION['user_id'];
                    include('javascript/ajax/config.php');

                    $sql_userchecker = mysqli_query($conn, "SELEC * FROM login WHERE id = $user_id");
                    $data = mysqli_fetch_assoc($sql_userchecker);
                    $usertype_id = $data['usertype_id'];
                    // NEED CODE FOR NAVIGATION
                }
                
                ?>
            </ul>
        </nav>


        <?php
    }

?>