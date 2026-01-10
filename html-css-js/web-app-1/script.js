function dispMessage(){
    //     a=10
    //     b=20
    //     c=a+b
    //     alert("Hello")
    //     alert(document.getElementById("txtEmail").value)
    //    lblMessage.innerHTML = document.getElementById("txtEmail").value
    // lblPassword.innerHTML= document.getElementById("txtPassword").value
    let email = document.getElementById("txtEmail").value
    let password = document.getElementById("txtPassword").value
    if(email==="hasinivuppu1052@gmail.com" && password==="1234"){
        lblMessage.innerHTML = "Welcome Hasini";
        lblMessage.style.color = "green";
    }else{
        lblMessage.innerHTML = "Access Denied";
        lblMessage.style.color = "red";
    }
}
function showLoginForm(){
    let str = `
      <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><label id="lblPassword"></label></p>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPassword" placeholder="Password"></p>
      <p><button class="login-btn" onclick="dispMessage()">Login</button></p>
      <hr>
      <p><button class="register-btn" onclick = "showRegisterForm()">Create Account</button></p>
    `;
    root.innerHTML = str;
}
function showRegisterForm(){
    let str=`
    <h1>Registration Form</h1>
    <p><label id="lblRegister"></label></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button class="register-btn" onclick="registerUser()">Register</button></p>
    <hr>
    <p><button class="register-btn" onclick = "showLoginForm()">Back to Login Form</button></p>
    `;
    root.innerHTML = str;
}
function registerUser(){
    let email = document.getElementById("txtEmail").value
    let password = document.getElementById("txtPassword").value
    let msg = document.getElementById("lblRegister")
    if (email === ""||password===""){
        msg.innerHTML = "Please fill all the details";
        msg.style.color = "red";
    }else{
        msg.innerHTML = "Successfully Registered";
        msg.style.color = "green";
    }
}