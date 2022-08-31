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
        accountNo : "7" + Math.round(Math.random()*10000000),
        userPin : pin.value,
        accountbalance: 1000,

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
        Userbalance.innerHTML = `Account Balance: ₦ ${allBankUser[index].accountbalance}`
    })
}
const transfer = ()=>{
    window.location.href = "transfer.html"
}
const depositPage = ()=>{
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

let balance = 1000
function deposit(){
    let amountEntered = Number(customerInput.value)
if(amountEntered < 0){
    alert("Enter Valid Digit")
}
else if(amountEntered == ""){
    alert("Kindly enter an amount")
}
else{
    let m = JSON.parse(localStorage.customerDetails)
    m[m.length-1]
    m[m.length-1].accountbalance
    let amountEntered =  Number( m[m.length-1].accountbalance) + Number(customerInput.value)
    m[m.length-1].accountbalance = amountEntered
    localStorage.customerDetails = JSON.stringify(m)
    
    var pinn = prompt('Enter Your Trasaction Pin')
    if(pinn == userPin()){
        window.location.href = "dashboard.html"
    }
    else if(pinn != userPin){
        alert("Incorrect Password")
    }
}
}