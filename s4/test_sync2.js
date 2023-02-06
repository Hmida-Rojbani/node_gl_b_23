function softTraitment() {
    let sum = 0;
    console.log('Connection to Calc API');
    setTimeout(() => {
        console.log('receiving resp from Calc API');
        sum =1000000000;
        return sum;
    }, 3000);
    
}

console.log('Begin ');
let sum = softTraitment();
console.log('sum :',sum);
console.log('End');