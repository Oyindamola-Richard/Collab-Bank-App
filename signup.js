var allCustomers = [];
if(localStorage.userinfo){
    allCustomers = JSON.parse(localStorage.getItem("useraccountinfo"))
}
function signUp(){
    var newCustomers = {
        firstName : firstname.value,
        lastName : lastname.value,
        userEmail : email.value,
        userPassword : password.value,
        userPin : pin.value,
        phoneNumber : phonenumber.value,
        randomNumber  : "30" +Math.round(Math.random()*10000000),
    }
     
     if(firstname.value,lastname.value,email.value,password.value,pin.value,phonenumber.value,confirmpassword.value && password.value==confirmpassword.value){
        alert("account successfully created")
       
        allCustomers.push(newCustomers)
        firstname.value = ""
        lastname.value =""
        email.value = ""
        password.value = ""
        confirmpassword.value= ""
        phonenumber.value = ""
        pin.value = ""

        localStorage.setItem("useraccountinfo",JSON.stringify(allCustomers))
        // window.location.href = "signin.html"
        // console.log(allUsers)
    }
    
    else{
        alert(" check your password if it matches and kindly fill out the empty spaces")
    }
}
