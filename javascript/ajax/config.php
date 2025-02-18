<?php
    error_reporting(1);
    session_start();

    $conn = mysqli_connect('localhost','root','','sk-poms');

    if(isset($_POST['lbtn'])){
        $usn = $conn->real_escape_string($_POST['usn']);
        $pw = $conn->real_escape_string($_POST['pass']);

        $chk = mysqli_query($conn,"SELECT * FROM login WHERE username='$usn'");
        $row = mysqli_num_rows($chk);

        if($row > 0){
            $data = mysqli_fetch_assoc($chk);
            $pw2 = $data['password'];

            if($pw == $pw2){
                session_start();
                echo '1';
            }
            else{
                echo " NO MATCH";
            }
        }
        else{
            echo "USER DOESN'T EXIST";
        }

    }



?>