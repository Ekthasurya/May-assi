function BankAccount(accountNumber, name, type,balance){
       this.accountNumber = accountNumber;
       this.name = name;
       this.type = type;
       this.balance = balance;
       this.active = true;

       this.deposit = function(amount){
              this.balnce += amount;
              console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
       }
       
       this.withdraw =function(amount){
              if (this.balance >= amount) {
                 this.balance -= amount;
                 console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
              } else {
                     console.log(`Insufficient balance in account ${this.accountNumber}.`);
              }
       }

       this.checkBalance = function(){
              console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
       }

       this.isActive = function(){
              return this.active;
       }


}


let account1 = new BankAccount("001", "Rakesh", "Savings", 1000);
let account2 = new BankAccount("002", "Surya", "cheaking", 500);
let account3 = new BankAccount("003", "Manish", "Savings", 2000);


account1.deposit(200)
account2.withdraw(600)
account3.checkBalance()
account1.checkBalance()


console.log("Account 1 active status is : " + account1.isActive());
console.log("Account 2 active status is : " + account2.isActive());
console.log("Account 3 active status is : " + account3.isActive());


function getTotalBalance(accounts) {
       let totalBalance = 0;
       accounts.forEach(account => {
           if (account.isActive()) {
               totalBalance += account.balance;
           }
       });
       return totalBalance;
   }

   let accounts = [account1, account2, account3];
   console.log("Total balance of all active accounts:", getTotalBalance(accounts));