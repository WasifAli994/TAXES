const currency = require('currency.js');

class ECM3TAX{

    constructor(tradePrice, mrpWithGST, discount, advanceTax, quantity){
        this.tradePrice = currency(tradePrice);
        this.mrpWithGST = currency(mrpWithGST);
        this.discount = currency(discount);
        this.advanceTax = currency(advanceTax, {precision: 3});
        this.quantity = currency(quantity);
    }

    //ECM-3 (MRP With GST in Invoice) 17% Tax :

    ECM3withGSTAmount() {
        const GST = currency((this.mrpWithGST.value),{ precision: 5, increment: null }).divide(1.17).multiply(0.17);
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }

    //ECM-3 (MRP Without GST in Invoice):
    ECM3withoutGSTAmount(){
        const GST = currency((this.mrpWithGST.value),{ precision: 5, increment: null }).multiply(0.17);
        const discountedAmount = currency((this.tradePrice.value)).multiply(this.discount.value);
        const discountedTP =  currency((this.tradePrice.value)).subtract(discountedAmount.value);
        const advanceTaxInAmount = currency((discountedTP.value), { precision: 5, increment: null }).add(GST).multiply(this.advanceTax.value);
        const totalAmount =  currency((discountedTP.value), { precision: 5, increment: null }).add(GST).add(advanceTaxInAmount.value);
        return totalAmount.value;
    }
}

module.exports = ECM3TAX;