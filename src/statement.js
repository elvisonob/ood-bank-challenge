const Transaction = require('./Transaction.js')

class Statement {
    constructor(transactions) {
        this.transactions = transactions
    }

    createStatement() {
        let statementLines = []
        for (const transaction of this.transactions) {
            statementLines.push = (transaction.date + ',' + transaction.amount + ',,' + transaction.amount)
        }
        statementLines.reverse()
        statementLines.unshift('date,credit,debit,balance')
        return statementLines.join('\n')
    }
}

module.exports = Statement