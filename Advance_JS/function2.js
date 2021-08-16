function interest(principal){

    var interest = 0.5;
    return principal * interest;
}
var principal = 10000;
var interest = interest(principal);
console.log('Interest is ->' +interest);
var finalamount = principal + interest;
console.log('The Final Amount is ->' +finalamount);