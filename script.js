// BANK ACCOUNT

// Start by creating the object and the properties. You can leave the functions empty for now if you want.




// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt
// parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
// isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
// alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.

// STARTER FUNCTION
// function atm() {
//     let choice = parseInt(prompt("Display menu choices here"));
//prompt user for choice.

// you can use the variable choice for your switch or if/else statement
// so choice will hold the value of the user input.

const account = {
    accountName: "hurshida",
    psw: 111,
    balance: 100,
    accountNumber: 123,
    // confirm: function() {
    //     let user = parseInt(prompt('please enter account number'));
    //     let password = parseInt(prompt('please enter password'));
    //     if (password === account.psw && user === account.accountNumber) {
    //         program(main());
    //         return;
    //     }
    //     accountError();
    //     confirm();
    // },
    getBalance: function() {
        alert(`account balance ${account.balance}kr`);
        program(main());
    },
    deposit: function() {
        let num = parseInt(prompt(`please enter deposit amount`));
        if (isNaN(num) || num <= 0 || num === "") {
            alert(`please enter valid number`);
            this.deposit();
        } else {
            num = num + account.balance;
            alert(`your current balance is ${num}kr`);
            account.balance = num;
            program(main());
        }
    },
    withdrawal: function() {
        let num = parseInt(prompt(`please enter withdrawal amount`));
        if (isNaN(num) || num <= 0 || num === "") {
            alert(`please enter valid number`);
            account.withdrawal();
        } else if (account.compare(num, account.balance)) {
            alert('insufficient account balance');
            account.withdrawal();
        } else {
            account.balance = account.balance - num;
            alert(`account balance is${account.balance}kr`);

            program(main());
        }
    },
    compare: function(a, b) {
        if (a > b) {
            return true;
        } else {
            return false;
        }
    },
    getAccountName: function() {
        alert(`account${account.accountNumber} account holder is ${account.accountName}`);
        program(main());
    },
    accountError: function() { alert(`error`); },
    exitAccount: function() {
        alert(`log out account`);

        window.close();
    }
}

function confirm() {
    let user = parseInt(prompt('please enter account number'));
    let password = parseInt(prompt('please enter password'));
    if (password === account.psw && user === account.accountNumber) {
        program(main());
        return;
    }
    account.accountError();
    confirm();
}

function main() {
    let num = parseInt(prompt('please choose: 1.deposit; 2.withdrawal; 3.check balance; 4..account information;5.exit;'));
    return num;
}

function program(num) {
    switch (num) {
        case 1:
            account.deposit();
            break;
        case 2:
            account.withdrawal();
            break;
        case 3:
            account.getBalance();
            break;
        case 4:
            account.getAccountName();
            break;
        default:
            account.exitAccount();
    }
}

// function checkNumber() {
//     let pattern = /^[0-9]*[1-9][0-9]*$/;
//     return pattern.test();
// }

// function checkNull() {
//     if (n.length > 0) {
//         return true;
//     }
//     return false;
// }

// function getBalance() {
//     alert(`account balance ${account.balance}kr`);
//     program(main());
// }

// function deposit() {
//     let num = parseInt(prompt(`please enter deposit amount`));
//     if (isNaN(num) || num <= 0 || num === "") {
//         alert(`please enter valid number`);
//         this.deposit();
//     } else {
//         num = num + account.balance;
//         alert(`your current balance is ${num}kr`);
//         account.balance = num;
//         program(main());
//     }
// }



// function withdrawal() {
//     let num = parseInt(prompt(`please enter withdrawal amount`));
//     if (isNaN(num) || num <= 0 || num === "") {
//         alert(`please enter valid number`);
//         this.withdrawal();
//     } else if (compare(num, account.balance)) {
//         alert('insufficient account balance');
//         withdrawal();
//     } else {
//         account.balance = account.balance - num;
//         alert(`account balance is${account.balance}kr`);

//         program(main());
//     }
// }

// function compare(a, b) {
//     if (a > b) {
//         return true;
//     } else {
//         return false;
//     }
// }


// function getAccountName() {
//     alert(`account${account.accountNumber} account holder is ${account.accountName}`);
//     program(main());
// }

// function accountError() {
//     alert(`error`);
// }

// function exitAccount() {
//     alert(`log out account`);

//     window.close();

// }


//answer
//parseInt method parses a value as a string and returns the first integer.
//example: parseInt("3.14") = 3.
//parseFloat method used to accept string and convert into a floating-point number.
//example:parseFloat("8.51") = 8.51.