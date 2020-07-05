const user = {
    name: 'Gabriel',
    transactions: [],
    balance: 0
};

function createTransacion(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction;
    let highValue = 0;

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === type && user.transactions[i].value > highValue) {
            if (user.transactions[i].value) {
                highValue = user.transactions[i].value;
                higherTransaction = user.transactions[i];
            }
        }
    }

    return higherTransaction;
}

function getAverageTransactionValue() {
    let transactionTotalValue = 0;
    const allTransactions = user.transactions.length;
    
    for (let transaction of user.transactions) {
        transactionTotalValue = transactionTotalValue + transaction.value;
    }

    return transactionTotalValue / allTransactions;    
}

function getTransactionsCount() {
    let transactionCount = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            transactionCount.credit++;
        } else {
            transactionCount.debit++;
        }
    }
    
    return transactionCount;
}

createTransacion({type: 'credit', value: 50.5});
createTransacion({type: 'credit', value: 10.5});
createTransacion({type: 'debit', value: 10.5});
createTransacion({type: 'credit', value: 70});

console.log(getHigherTransactionByType('debit'));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
