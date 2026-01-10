function dispMessage(){
    let email = document.getElementById("txtEmail").value
    let password = document.getElementById("txtPassword").value
    let found = users.find(
        (element=>element.email===email && element.password == password)
    );
    if(found){
        lblMessage.innerHTML = "Welcome " + found.name
        lblMessage.style.color = "green"
    }else{
        lblMessage.innerHTML = "Access Denied"
        lblMessage.style.color = "red"
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
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button class="register-btn" onclick="registerUser()">Register</button></p>
    <hr>
    <p><button class="register-btn" onclick = "showLoginForm()">Back to Login Form</button></p>
    `;
    root.innerHTML = str;
}
let users = [];
function registerUser(){
    let name = document.getElementById("txtName").value
    let email = document.getElementById("txtEmail").value
    let password = document.getElementById("txtPassword").value
    let msg = document.getElementById("lblRegister")
    let user = {name:name,email:email,password:password}
    users.push(user);
    showLoginForm();
    console.log(users);
    if (name=== ""||email === ""||password===""){
        msg.innerHTML = "Please fill all the details";
        msg.style.color = "red";
    }else{
        msg.innerHTML = "Successfully Registered";
        msg.style.color = "green";
    }
}