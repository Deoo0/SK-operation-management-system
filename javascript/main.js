function loginBtn(){
    var loginbtn = document.getElementById("loginbtn");
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var formdata = new FormData();
    formdata.append('lbtn', loginbtn.value);
    formdata.append('usn', username.value);
    formdata.append('pass', password.value);

    if(username.value == ""){
        alert("Empty USN FIELD");
<<<<<<< HEAD
        return false;
=======
    } else{
        if (password.value == ""){
            alert("Emplty Pass Field");
        } else{
            fetch("./config.php",{
                method: "POST",
                body: formdata,
            })
            .then((response) => response.text())
            .then((data)=>{
                if(data == "1"){
                    alert("Welcome User");
                    window.location.href = "../../?";
                }else{
                    alert(data);
                }
            })
        }
>>>>>>> c6f55af09b04c8a17b9caf5628ac9efc47c1d065
    }
    
    if (password.value == ""){
        alert("Empty Pass Field");
        return false;
    }

    fetch("./config.php",{
        method: "POST",
        body: formdata,
    })
    .then((response) => response.text())
    .then((data)=>{
        if(data == "1"){
            alert("User Found");
            window.location.href = "../../index.php";
        }else{
            alert(data);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("An error occurred during login");
    });
    
    return false;
}

// Modal functions (moved to login.php)
