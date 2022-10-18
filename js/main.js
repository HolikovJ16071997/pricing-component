const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPaymentPriceValue = document.querySelectorAll('.pricing-plan_value');

elsPaymentPeriodRadio.forEach(function(elPaymantPeriodRadio){
    elPaymantPeriodRadio.addEventListener('change',function(){
        const period =elPaymantPeriodRadio.value;
       
        if (period === 'annual'){
            elsPaymentPriceValue.forEach(function(elPrice){
                elPrice.textContent=elPrice.closest('.pricing-plan').dataset.paymentAnnual;
            });
        }else{
            elsPaymentPriceValue.forEach(function(elPrice){
                elPrice.textContent=elPrice.closest('.pricing-plan').dataset.paymentMonthly;
            });
        }
    });
});

