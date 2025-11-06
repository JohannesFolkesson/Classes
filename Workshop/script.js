class BankAccount {

    constructor(accountNum, startBalance) {
        this.accountNum = accountNum
        this.balance = startBalance
        
    }

    deposit(amount) {
        this.balance += amount
        console.log(`Du satte in ${amount} kr. Ny balance: ${this.balance} kr`)

    }

    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance -= amount
        
            console.log(this.balance)

        }

    }

    showBalance() {
        console.log(`Konto ${this.accountNum} har ${this.balance} kr kvar`)

    }

}

function init() {
console.log(init)

const myAccount = new BankAccount('12345', 1000)
myAccount.deposit(500)
myAccount.withdraw(200)
myAccount.showBalance();



}




window.addEventListener("load", init)