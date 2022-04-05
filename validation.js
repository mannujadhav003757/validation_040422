let namenode = document.getElementById("fname");
let error1node = document.getElementById("error1");

let agenode = document.getElementById("age");
let error2node = document.getElementById("error2");

let emailnode = document.getElementById("email");
let error3node = document.getElementById("error3");

let passwordnode = document.getElementById("pass");
let error4node = document.getElementById("error4");

let confirmpassnode = document.getElementById("conpass");
let error5node = document.getElementById("error5");

let checknode = document.getElementById("show");


//  name validation 
function validate1() {
    error1node.innerHTML="";
    let firstname=namenode.value;
   if (firstname=="")
   {
       error1node.innerHTML = "<b>This is required</b>";
       namenode.style.border="2px solid red";
       return false;
   }
   else if(firstname.length<2){
    error1node.innerHTML = "<b>Character more than 2 is required</b>";
    namenode.style.border="2px solid red";
    return false;
   }
   else{
    namenode.style.border="2px solid green";
    return true;
}
}

//  age validation 
function validate2() {
    error2node.innerHTML="";
    let age=agenode.value;
   if (age=="")
   {
       error2node.innerHTML = "<b>Age  is required</b>";
       agenode.style.border="2px solid red";
       return false;
   }
   else if(isNaN(age)){
    error2node.innerHTML = "<b>Age should be a no</b>";
    agenode.style.border="2px solid red";
    return false;
   }
   else if (age<0){
       error2node.innerHTML="<b>Age should not be neagtive</b>"
       agenode.style.border="2px solid red"
       return false;
   }
   else{
    agenode.style.border="2px solid green";
    return true;
}
}
// email validate
function validate3() {
    error3node.innerHTML="";
    let email=emailnode.value;
    let ss= email.substring(email.indexOf("@")+1);
   if (email=="")
   {
       error3node.innerHTML = "<b>email  is required</b>";
       emailnode.style.border="2px solid red";
       return false;
   }
   else if (!email.includes("@")|| ss==""){
    error3node.innerHTML = "<b>put valid email</b>";
    emailnode.style.border="2px solid red";
    return false;
}
else{
    emailnode.style.border="2px solid green";
    return true;
}
}


// password validate
function validate4() {
    error4node.innerHTML="";
    let password=passwordnode.value;
    console.log(password);
    let regexp=new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])");

   if (password=="")
   {
       error4node.innerHTML = "<b>Password  is required</b>";
       passwordnode.style.border="2px solid red";
       return false;
   }
   else if (regexp.test(password)==false){
    error4node.innerHTML = "<b>There should be one capital letter small letter number and special case </b>";
    passwordnode.style.border="2px solid red";
    return false;

   }
   else{
       passwordnode.style.border="2px solid green";
       return true;
   }



}



// confirm password validate
function validate5() {
    error5node.innerHTML="";
    let password = passwordnode.value;
    let Confirmpassword=confirmpassnode.value;
   if (Confirmpassword=="")
   {
       error5node.innerHTML = "<b>Password is required </b>";
       namenode.style.border="2px solid red";
       return false;
   }
   else if(Confirmpassword!=password){
    error5node.innerHTML = "<b>Password should same</b>";
    namenode.style.border="2px solid red";
    return false;
   }
   else{
    namenode.style.border="2px solid green";
    return true;
}
}


// check password validation 
function showpass() {
    if (checknode.checked)
{
    passwordnode.type="text";
    confirmpassnode.type="text";
}
else{
    passwordnode.type="password";
    confirmpassnode.type="password";
}
}

function validateform() {
    let state1=validate1();
    let state2=validate2();
    let state3=validate3();
    let state4=validate4();
    let state5=validate4();
    return(state1&&state2&&state3&&state4&&state5)
    
}