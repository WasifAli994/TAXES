const currency = require('currency.js');
const ECM3TAX = require('./Classes/ECM3TAX');

function main(){

    console.log(`Inbounding Tax Calculation:`);
    //                      (tradePrice, mrpWithGST, discount, advanceTax, quantity)
    const tax = new ECM3TAX(100, 200, 0.1, 0.005, 1);

    console.log(tax.ECM3withGSTAmount());

}

main();
