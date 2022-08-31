var allBankUser = []
    if(localStorage.customerDetails){
        allBankUser = JSON.parse(localStorage.getItem('customerDetails'))
    }

const signup = ()=>{
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
        customerName.innerHTML = `${allBankUser[index].firstName} ${allBankUser[index].lastName}`
        customerMail.innerHTML = `E-mail: ${allBankUser[index].email}`
        customerAcountNO.innerHTML = `Account No: ${allBankUser[index].accountNo}`
        Userbalance.innerHTML = `Account Balance: ₦ ${allBankUser[index].accountbalance}`
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
    window.location.href = "dashboard.html"

    // var pinn = prompt('Enter Your Trasaction Pin')
    // if(pinn == userPin()){
    //     window.location.href = "dashboard.html"
    // }
    // else if(pinn != userPin){
    //     alert("Incorrect Password")
    // }
}
}
// function transfer(){
//     var amountEntered = Number(customerInput.value)
//     if(amountEntered>balance){
//         disp.innerHTML = "Insufficient Fund"
//         // alert("Insufficient Fund")
//     }
//     else if (amountEntered<0){
//         disp.innerHTML = "Out of Bounds"
//         // alert("Out of Bounds")
//     }
//     else if(amountEntered==""){
//         disp.innerHTML = "Kindly enter an amount"
//         // alert("Kindly enter an amount")
//     }
//     // else if(amountEntered!=Number){
//     //     disp.innerHTML = "Invalid"
//     // }
//     else{
//         balance = balance - amountEntered
//         bba.innerHTML = "<h4>$" + balance + "</h3>"
//         // alert("Withdrawal Successful and your current balance is $" + balance)
//     }
// }