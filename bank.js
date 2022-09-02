var allBankUser = []
    if(localStorage.customerDetails){
        allBankUser = JSON.parse(localStorage.getItem('customerDetails'))
    }

const signup = ()=>{
    var newCustomer ={
        firstName : firstname.value,
        middleName : middlename.value,
        lastName: lastname.value,
        email: userEmail.value,
        dateOfBirth : userdateofbirth.value,
        password : userPassword.value,
        accountNo : "7" + Math.round(Math.random()*1000000000),
        accountbalance: 1000,

    }
    if((firstName = firstname.value) && (middleName = middlename.value) && (lastName = lastname.value) && (email = userEmail.value) && (dateOfBirth = userdateofbirth.value) && (password = userPassword.value)){
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

const logIn = ()=>{
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
        customerName.innerHTML = `${allBankUser[index].lastName} ${allBankUser[index].firstName} ${allBankUser[index].middleName}`
        customerMail.innerHTML = `E-mail: ${allBankUser[index].email}`
        customerAcountNO.innerHTML = `Account No: ${allBankUser[index].accountNo}`
        Userbalance.innerHTML = `Account Balance: $ ${allBankUser[index].accountbalance}`
    })
}
const depositPage = ()=>{
    window.location.href = "deposit.html"
}
const transferPage = ()=>{
    window.location.href = "transfer.html"
}
const withdrawalPage = ()=>{
    window.location.href = "withdraw.html"
}
const backward = () =>{
    window.location.href = "dashboard.html"
}
const homebtn = () =>{
    window.location.href = "dashboard.html"
}

let balance = 1000
const deposit = ()=>{
    let depositAmount = Number(depositInput.value)
if(depositAmount < 0){
    alert("Enter Valid Digit")
}
else if(depositAmount == ""){
    alert("Kindly enter an amount")
}
else{
    let m = JSON.parse(localStorage.customerDetails)
    m[m.length-1]
    m[m.length-1].accountbalance
    let depositAmount =  Number( m[m.length-1].accountbalance) + Number(depositInput.value)
    m[m.length-1].accountbalance = depositAmount
    localStorage.customerDetails = JSON.stringify(m)
    window.location.href = "dashboard.html"
    
    var pinn = prompt('Enter Your Trasaction Pin')
    if(pinn == userConfirmPin){
        alert("Deposit Successful")
        window.location.href = "dashboard.html"
    }
    else if(pinn != userConfirmPin){
        alert("Incorrect Password")
    }
}
}
function transfer(){
    var transferAmount = Number(transferInput.value)
    if(transferAmount>balance){
        alert("Insufficient Fund")
    }
    else if (transferAmount<0){
        alert("Out of Bounds")
    }
    else if(transferAmount==""){
        alert("Kindly enter an amount")
    }
    // else if(transferAmount != Number){
    //     alert("Invalid")
    // }
    else{
            let m = JSON.parse(localStorage.customerDetails)
            m[m.length-1]
            m[m.length-1].accountbalance
            let transferAmount =  Number(m[m.length-1].accountbalance) - Number(transferInput.value)
            m[m.length-1].accountbalance = transferAmount
            localStorage.customerDetails = JSON.stringify(m)
            alert("Transfer Successful")
            window.location.href = "dashboard.html"
    }
}
function withdraw(){
    var withdrawAmount = Number(withdrawInput.value)
    if(withdrawAmount>balance){
        alert("Insufficient Fund")
    }
    else if (withdrawAmount<0){
        alert("Out of Bounds")
    }
    else if(withdrawAmount==""){
        alert("Kindly enter an amount")
    }
    // else if(withdrawAmount != Number){
    //     alert("Invalid")
    // }
    else{
            let m = JSON.parse(localStorage.customerDetails)
            m[m.length-1]
            m[m.length-1].accountbalance
            let withdrawAmount =  Number(m[m.length-1].accountbalance) - Number(withdrawInput.value)
            m[m.length-1].accountbalance = withdrawAmount
            localStorage.customerDetails = JSON.stringify(m)
            alert("Withdrawal Successful")
            window.location.href = "dashboard.html"
    }
}
const block = ()=>{
    Userbalance.innerHTML = `Account Balance: $ ${'#####'}`
}

var allBankPin = []
    if(localStorage.customerPin){
        allBankPin = JSON.parse(localStorage.getItem('customerPin'))
    }
const setpin = ()=>{
    var userpinSet ={
        userPin : userpin.value,
        userConfirmPin : userconfirmpin.value,
    }
    if((userPin = userpin.value) && (muserConfirmPin = userconfirmpin.value)){
        window.location.href = "dashboard.html",
        alert("Trasaction Pin Set successful"),
        allBankPin.push(userpinSet),
        userpin.value = "",
        userconfirmpin.value = ""
    }
    else if((userPin = userpin.value) != (muserConfirmPin = userconfirmpin.value)){
        incorrect.innerHTML = "Enter Pin Correctly"
    }
    else{
        alert("kindly provide all informations")
    }
    localStorage.setItem("customerPin",JSON.stringify(allBankPin))
}