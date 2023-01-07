const currency = require('currency.js');
const ECM3TAX = require('./Classes/ECM3TAX');

function main(){

    console.log(`Inbounding Tax Calculation:`);
    const ecm3Tax = new ECM3TAX(
        /*tradePrice*/ 100, 
        /*mrpWith/WithoutGST*/ 200, 
        /*discount*/ 0.1, 
        /*advanceTax*/ 0.005, 
        /*quantity*/ 1 );

    console.log("ECM-3 with GST: ", ecm3Tax.ECM3withGSTAmount());
    console.log("ECM-3 without GST: " ,ecm3Tax.ECM3withoutGSTAmount());

    
}

main();
