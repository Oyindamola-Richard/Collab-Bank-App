var allBankUser = []
    if(localStorage.customerDetails){
        allBankUser = JSON.parse(localStorage.getItem('customerDetails'))
    }

function signup(){
    var newCustomer ={
        firstName : firstname.value,
        lastName: lastname.value,
        email: userEmail.value,
        dateOfBirth : userdateofbirth.value,
        password : userPassword.value,
        accountNo : "7" + Math.round(Math.random()*10000000) 

    }
    if((firstName = firstname.value) && (lastName = lastname.value) && (email = userEmail.value) && (dateOfBirth = userdateofbirth.value) && (password = userPassword.value)){
        window.location.href = "login.html",
        alert("Registration successful"),
        allBankUser.push(newCustomer),
        firstname.value = "",
        lastname.value = "",
        userEmail.value = "",
        userPassword.value = ""
        
    }
    else{
        alert("kindly provide all informations")
    }
    localStorage.setItem("customerDetails",JSON.stringify(allBankUser))
}

function logIn(){
    var myUsername = username.value
    var userPassword = Password.value
    var allBankUser = JSON.parse (localStorage.getItem("customerDetails"))
    var found = false
for (let index = 0; index < allBankUser.length; index++){
    if (allBankUser[index].email==myUsername && allBankUser[index].password==userPassword){
        found = true
    alert ("login successfully")
    
    }

if (found){
    window.location.href = "dashboard.html"
}
    else{
        incorrect.innerHTML = "Incorrect Email or Password"
        incorrect.style.color = "red"
    }
    
}
}
const ooo = ()=>{
    allBankUser.map((items, index)=>{
        customerName.innerHTML = `${allBankUser[index].firstName} ${allBankUser[index].lastName}`
        customerMail.innerHTML = `E-mail: ${allBankUser[index].email}`
        customerAcountNO.innerHTML = `Account No: ${allBankUser[index].accountNo}`
    })
}
const transfer = ()=>{
    window.location.href = "transfer.html"
}
const deposit = ()=>{
    window.location.href = "deposit.html"
}
const withdrawal = ()=>{
    window.location.href = "withdraw.html"
}
const backward = () =>{
    window.location.href = "dashboard.html"
}
const homebtn = () =>{
    window.location.href = "dashboard.html"
}