Noun-Client

Method- Deposits, Withdrawal


Object(Noun)|   Properties        |    Method(Verb)       |  Output
  Account   |     Date            |    Deposits           |  Number
            |     Name            |    Withdraws          |  Number
Transaction |     Balance         |                       |
            |     credit          |    Print Statement    | A receipt
Printer     |     debit           |                       |
            |                     |                       |


That looks like a good start for the top level. So, as a client, I would be able to deposit/withdraw from an account and be able to request a printed statement.

Now have a thought about the statement part, how can you store each bank operation and then print it out? What kind of object(s) would be required for that?

Yes, you can expand your domain model to cover more details about the system you wish to design. For example, what will your deposits return, when you deposit? How will you test and verify that when you perform the deposit action, the bank account stores the information correctly? You can add a bit more detail on what each method returns, enough so you have a better idea on how to verify the action in your tests.

Client, Deposit, Date
Print, Statement, Withdrawal