const userDatabase = {
    "oluwakeys" : {
        firstName: "Israel",
        lastName: "Kutu",
        email: "israelkutu03@gmail.com",
        accountActivated: true,
        password: "israel123"
    },
    "segzy" : {
        firstName: "Samuel",
        lastName: "Kutu",
        email: "sammykutu03@gmail.com",
        accountActivated: true,
        password: "segun123"
    },
    "seyiKodes" : {
        firstName: "Oluwaseyi",
        lastName: "Fagbemi",
        email: "seyiCodes3@gmail.com",
        accountActivated: true,
        password: "seyiKodes123"
    },
    "buhnmi" : {
        firstName: "Oluwabunmi",
        lastName: "Orogbemi",
        email: "buhnmi@gmail.com",
        accountActivated: true,
        password: "buhnmi123"
    }
}


function displayUserDetails() {

    //enter username
    let username = prompt("Enter your Username")


    while(validateUsername(username) == false) {
        
        username = prompt("Username must be less than 10")
        
    }

    if (username == null) {
        return
    }

    //enter password
    let password = prompt("Enter your password")

    while (validatePassword(password) == false) {
        password = prompt("password must be greater than 6.")
    }

    if (password == null) {
        return
    }
    
    //confirm password

    let passwordConfirm = prompt("Re-check your password")
    while (passwordConfirm !== password) {
        passwordConfirm = prompt("Please confirm your password!")
    }
    if (passwordConfirm == null) {
        return 
    }


    //check if userdatabse contains the username entered
    const user = userDatabase[username]

    if (user == undefined) {
        alert("user not found")
        return
    }
    console.log(user)

    alert(`
        User found with the following details:
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Email: ${user.email}
        Account Activated: ${user.accountActivated}
    `)


}
    displayUserDetails()
    alert("You have come to the end of this test, Goodbye!")





function validateUsername(username) {
    if (username == null) {
        return true
    }
    if (username.length > 10) {
        return false
    } else {
        return true
    }
}

function validatePassword (password) {
    if (password == null) {
        return true
    }
    if (password.length < 6) {
        return false
    }
    else {
        return true
    }
}

