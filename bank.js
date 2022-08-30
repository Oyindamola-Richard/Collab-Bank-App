var bankDetails = []
    if(localStorage.customerDetails){
        bankDetails = JSON.parse(localStorage.getItem('customerDetails'))
    }

function signup(){
    var newCustomer ={
        firstName : firstname.value,
        lastName: lastname.value,
        email:userEmail.value,
        password:userPassword.value,

        
    }
    if(firstname.value, lastname.value, userEmail.value, userPassword.value){
        alert("Registration successful")
        bankDetails.push(newCustomer)
        firstname.value = ""
        lastname.value = ""
        userEmail.value = ""
        userPassword.value = ""
        
        localStorage.setItem("customerDetails",JSON.stringify(bankDetails))
        window.location.href = "login.html"
        console.log(bankDetails)
   }
    else{
        alert("kindly provide all informations")
    }
    
}

 function search(){
     var confirmSearch = disp.value
     var randomNumber = "SQIBANK-" + Math.round(Math.random()*1000000);
     var date = new Date();
     date.getDate;

    var infoStudent = JSON.parse(localStorage.getItem("customerDetails"))
    if (confirmSearch = disp.value){
       result.innerText = "hello, the student's details are " 
       + "first name-- " + bankDetails[disp.value].firstName
       + " last name-- " + bankDetails[disp.value].lastName 
       + " email-- " + bankDetails[disp.value].email
       + " password-- " + bankDetails[disp.value].password
        + " Matric No-- " + randomNumber 
        + " date-- " + date
       result.style.fontSize = "20px" 
    }
    else{
        result.innerText = "Invalid search"
    }
}
function logIn(){
    var myUsername = userName.value
    var userPassword = Password.value
    var bankDetails = JSON.parse (localStorage.getItem("customerDetails"))
    var found = false
for (let index = 0; index < bankDetails.length; index++){
    if (bankDetails[index].firstName==myUsername && bankDetails[index].password==userPassword){
        found = true
    alert ("login successfully")
    
    }

if (found){
    window.location.href = "dashboard.html"
}
    else{
    alert("INVALID")
    }
    
}
}