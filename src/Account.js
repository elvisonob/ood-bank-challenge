const Transaction = require('./Transaction.js')

class Account {
    constructor(balance = 0) {
        this.balance = balance
        this.transactions = []
    }


    depositMoney(money, date) {
        this.balance += money
        const transaction = new Transaction(money, date, this.balance)
        this.transactions.push(transaction)

    }

    withdrawMoney(money, date) {
        this.balance -= money
        const transaction = new Transaction(money, date, this.balance)
        this.transactions.push(transaction)
    }

}


module.exports = Account