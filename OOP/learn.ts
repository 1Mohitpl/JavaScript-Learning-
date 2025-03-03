// open closed principle

class paymentprocess {
    processPayment(amount: number){
        console.log(`processsing payment of ${amount} using credit card`);
        
    }
}

const process = new paymentprocess();

process.processPayment(200);