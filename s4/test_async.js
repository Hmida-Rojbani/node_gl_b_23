function softTraitment(callback) {
    let sum = 0;
    console.log('Connection to Calc API');
    setTimeout(() => {
        console.log('receiving resp from Calc API');
        sum =1000000000;
        callback(sum);
    }, 3000);
    
}

console.log('Begin ');
softTraitment(function (sum) {
    By5(sum, function (res) {
       display(res) 
    })
});

console.log('End');

function display(res) {
    console.log('sum :',res); 
}

function By5(x,callback) {
    setTimeout(() => {
        console.log('MultilyBy5');
        callback(x*5); 
    }, 2000);
    
}