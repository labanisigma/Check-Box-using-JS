/**
 * Created by labaniacharjee on 19/10/20.
 */
function FillBilling(f) {
    if(f.billingtoo.checked == true) {
        f.billingname.value = f.shippingname.value;
        f.billingnum.value = f.shippingnum.value;
    }
}
f.billingname.value = f.shippingname.value;
f.billingnum.value = f.shippingnum.value;