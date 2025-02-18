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
                    alert("User Found" + data);
                    window.location.href = "../../?";
                }else{
                    alert(data);
                }
            })
        }
    }
    return false;
}