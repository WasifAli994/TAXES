//import ECM3TAX from './Classes/ECM3TAX';
//import ECM4TAX from './Classes/ECM4TAX';
//import TAX10 from './Classes/TAX10';
//import EXEMPtANDZERO_RATED from './Classes/EXEMPT&ZER-RATED';

//Classes

class ECM3TAX{

    constructor(tradePrice, mrp, discount, advanceTax, quantity){
        this.tradePrice = currency(tradePrice);
        this.mrp = currency(mrp);
        this.discount = currency(discount);
        this.advanceTax = currency(advanceTax, {precision: 3});
        this.quantity = currency(quantity);
    }

    //ECM-3 (MRP With GST in Invoice) 17% Tax :
    ECM3withGSTAmount() {
        const GST = currency((this.mrp.value),{ precision: 5, increment: null }).divide(1.17).multiply(0.17);
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }

    //ECM-3 (MRP Without GST in Invoice):
    ECM3withoutGSTAmount(){
        const GST = currency((this.mrp.value),{ precision: 5, increment: null }).multiply(0.17);
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }
}

class ECM4TAX{

    constructor(tradePrice, mrp, discount, advanceTax, quantity){
        this.tradePrice = currency(tradePrice);
        this.mrp = currency(mrp);
        this.discount = currency(discount);
        this.advanceTax = currency(advanceTax, {precision: 3});
        this.quantity = currency(quantity);
    }

    //ECM-4 (17% Tax):
    ECM4Amount(){
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const GST = currency((discountedTP),{ precision: 5, increment: null }).multiply(0.17);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }
}

class TAX10{

    constructor(tradePrice, mrp, discount, advanceTax, quantity){
        this.tradePrice = currency(tradePrice);
        this.mrp = currency(mrp);
        this.discount = currency(discount);
        this.advanceTax = currency(advanceTax, {precision: 3});
        this.quantity = currency(quantity);
    }

    //TAX-10 (17% Tax):
    TAX10Amount(){
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const GST = currency((discountedTP),{ precision: 5, increment: null }).multiply(0.1);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }
}

class EXEMPtANDZERO_RATED{

    constructor(tradePrice, mrp, discount, advanceTax, quantity){
        this.tradePrice = currency(tradePrice);
        this.mrp = currency(mrp);
        this.discount = currency(discount);
        this.advanceTax = currency(advanceTax, {precision: 3});
        this.quantity = currency(quantity);
    }

    //TAX-10 (17% Tax):
    exemptAndZeroRatedDAmount(){
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const GST = currency((discountedTP),{ precision: 5, increment: null }).multiply(0);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    } 
}

function main(){

    //Input Values:
    const tradePrice = document.querySelector('.tradePrice');
    const mrp = document.querySelector('.mrp');
    const discount = document.querySelector('.discount');
    const advanceTax = document.querySelector('.advanceTax');
    const quantity = document.querySelector('.quantity');
    const button = document.querySelector('.button');


    //Display Values
    const ecm3WithGST = document.querySelector('.ecm3WithGST');
    const ecm3WithoutGST = document.querySelector('.ecm3WithoutGST');
    const ecm4Tax = document.querySelector('.ecm4Tax');
    const tax10 = document.querySelector('.tax10');
    const exemptAndZeroRated = document.querySelector('.exemptAndZeroRated');

    console.log(`Inbounding Tax Calculation:`);
    const ecm3Tax = new ECM3TAX(
        /*tradePrice*/ tradePrice, 
        /*mrpWith/WithoutGST*/ mrp, 
        /*discount*/ discount, 
        /*advanceTax*/ advanceTax, 
        /*quantity*/ quantity );

    //console.log("ECM-3 with GST: ", ecm3Tax.ECM3withGSTAmount());
    //console.log("ECM-3 without GST: " ,ecm3Tax.ECM3withoutGSTAmount());

    const ecm4 = new ECM4TAX(
        /*tradePrice*/ tradePrice, 
        /*mrpWith/WithoutGST*/ mrp, 
        /*discount*/ discount, 
        /*advanceTax*/ advanceTax, 
        /*quantity*/ quantity );

  //  console.log("ECM-4 (17%): ", ecm4.ECM4Amount());

    const Tax10 = new TAX10(
        /*tradePrice*/ tradePrice, 
        /*mrpWith/WithoutGST*/ mrp, 
        /*discount*/ discount, 
        /*advanceTax*/ advanceTax, 
        /*quantity*/ quantity);

//    console.log("TAX10 (17%): " ,Tax10.TAX10Amount());

    const ExemptAndZeroRated = new EXEMPtANDZERO_RATED(
        /*tradePrice*/ tradePrice, 
        /*mrpWith/WithoutGST*/ mrp, 
        /*discount*/ discount, 
        /*advanceTax*/ advanceTax, 
        /*quantity*/ quantity );
    
   // console.log("EXEMPt AND ZERO_RATED Tax: ", ExemptAndZeroRated.exemptAndZeroRatedDAmount());
    
    button.addEventListener('click', ()=> {
        console.log("ECM-3 with GST: ", ecm3Tax.ECM3withGSTAmount());
        console.log("ECM-3 without GST: " ,ecm3Tax.ECM3withoutGSTAmount());
        console.log("ECM-4 (17%): ", ecm4.ECM4Amount());
        console.log("TAX10 (17%): " ,Tax10.TAX10Amount());
        console.log("EXEMPt AND ZERO_RATED Tax: ", ExemptAndZeroRated.exemptAndZeroRatedDAmount());
    });

}
main();


