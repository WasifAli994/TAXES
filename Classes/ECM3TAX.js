const currency = require('currency.js');

//ECM-3 (MRP With GST in Invoice) 17% Tax :

class ECM3TAX{

    constructor(tradePrice, mrpWithGST, discount, advanceTax, quantity){
        this.tradePrice = currency(tradePrice);
        this.mrpWithGST = currency(mrpWithGST);
        this.discount = currency(discount);
        this.advanceTax = currency(advanceTax, {precision: 3});
        this.quantity = currency(quantity);
    }

    ECM3withGSTAmount() {
        const GST = currency((this.mrpWithGST.value),{ precision: 5, increment: null }).divide(1.17).multiply(0.17);
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }

}

module.exports = ECM3TAX;
/*
//console.log("discount:" + discount);
//console.log("advance tax:" + advanceTax);
const GST = currency((mrpWithGST).divide(1.17).multiply(0.17), { precision: 5 });
//console.log('GST: '+ GST.value)
//((mrpWithGST / 1.17) * 0.17);
const discountedAmount = currency(tradePrice).multiply(discount);
//console.log('discounted Amount: '+ discountedAmount.value)
const discountedTP =  currency(tradePrice).subtract(discountedAmount);
//console.log('discountedTP: ', discountedTP.value)
//correct
const advanceTaxInAmount = currency((discountedTP).add(GST).multiply(advanceTax),{ precision: 5 } );

//console.log("Advance taxin value: ", advanceTaxInAmount.value);

const totalAmount =  currency((discountedTP).add(GST).add(advanceTaxInAmount), { precision: 5 });

console.log(totalAmount.value);
*/