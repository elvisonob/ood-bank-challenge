const Account = require('../src/Account.js')
const Transaction = require('../src/Transaction.js')
describe('Account', () => {
    let account
    beforeEach(() => {
        account = new Account()

    })

    it("Can credit account", () => {
        // execute
        account.depositMoney(1000, "10/10/2021")
        account.depositMoney(100, "11/10/2021")

        // verify
        expect(account.balance).toEqual(1100)
    })

    it("Make a deposit updates transactions list balance", () => {
        // execute
        account.depositMoney(1000, "10/10/2021")
        account.depositMoney(100, "11/10/2021")

        const expected = [
            new Transaction(1000, '10/10/2021', 1000),
            new Transaction(100, '11/10/2021', 1100)
        ]

        // verify
        expect(account.transactions).toEqual(expected)
    })

    it("Can withdraw from account", () => {

        //set-up
        account.depositMoney(2000, '10/10/2021')
            // execute
        account.withdrawMoney(1000, "10/10/2021")

        // verify
        expect(account.balance).toEqual(1000)
    })

    it("Make a deposit updates transactions list balance", () => {
        // execute
        account.depositMoney(2000, "10/10/2021")
        account.withdrawMoney(1000, "11/10/2021")

        const expected = [
            new Transaction(2000, '10/10/2021', 2000),
            new Transaction(1000, '11/10/2021', 1000)
        ]

        // verify
        expect(account.transactions).toEqual(expected)
    })

})