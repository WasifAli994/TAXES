const currency = require('currency.js');

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

module.exports = TAX10;