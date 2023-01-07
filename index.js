const ECM3TAX = require('./Classes/ECM3TAX');
const ECM4TAX = require('./Classes/ECM4TAX');
const TAX10 = require('./Classes/TAX10');
const EXEMPtANDZERO_RATED = require('./Classes/EXEMPT&ZER-RATED');
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

    const ecm4Tax = new ECM4TAX(
        /*tradePrice*/ 100, 
        /*mrpWith/WithoutGST*/ 200, 
        /*discount*/ 0.1, 
        /*advanceTax*/ 0.005, 
        /*quantity*/ 1 );

    console.log("ECM-4 (17%): ", ecm4Tax.ECM4Amount());

    const tax10 = new TAX10(
        /*tradePrice*/ 100, 
        /*mrpWith/WithoutGST*/ 200, 
        /*discount*/ 0.1, 
        /*advanceTax*/ 0.005, 
        /*quantity*/ 1 );

    console.log("TAX10 (17%): " ,tax10.TAX10Amount());

    const exemptAndZeroRated = new EXEMPtANDZERO_RATED(
        /*tradePrice*/ 100, 
        /*mrpWith/WithoutGST*/ 200, 
        /*discount*/ 0.1, 
        /*advanceTax*/ 0.005, 
        /*quantity*/ 1 );
    
    console.log("EXEMPt AND ZERO_RATED Tax: ", exemptAndZeroRated.exemptAndZeroRatedDAmount());
    
}

main();
