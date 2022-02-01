const Statement = require('../src/statement.js')
const Transaction = require('../src/Transaction.js')
const Account = require('../src/Account.js')

// describe('Account', () => {
//     let statement
//     beforeEach(() => {
//         statement = new Statement()

//     })

describe('Statement', () => {

    it('print headlines', () => {
        const statement = new Statement([])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance'
        expect(result).toEqual(expected)
    })

    it('print single credit transaction', () => {
        const statement = new Statement([
            new Transaction(1000, '10/10/2021', 1000)
        ])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance\n' +
            '10/10/2021,1000,,1000'
        expect(result).toEqual(expected)
    })

    it('a debit transaction', () => {
        const statement = new Statement([
            new Transaction(1000, '10/10/2021', -1000)
        ])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance\n' +
            '10/10/2021,1000,,-1000'
        expect(result).toEqual(expected)
    })

    it('print multiple transaction', () => {
        const statement = new Statement([
            new Transaction(1000, '10/10/2021', 1000),
            new Transaction(-500, '11/10/2021', 500)
        ])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance\n' +
            '10/10/2021,1000,,1000\n' +
            '11/10/2021,-500,,500'
        expect(result).toEqual(expected)
    })

})