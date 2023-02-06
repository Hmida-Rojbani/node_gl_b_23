function softTraitment() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        console.log('Connection to Calc API');
        setTimeout(() => {
            console.log('receiving resp from Calc API');
            sum =10000;
            resolve(sum);
        }, 3000);
    
    })
   
    
}

console.log('Begin ');
// softTraitment(function (sum) {
//     By5(sum, function (res) {
//        display(res) 
//     })
// });

// softTraitment()
//     .then(sum => By5(sum))
//     .then(res => display(res))
//     .catch(err => console.error(err))


exec()  
console.log('End');

function display(res) {
    console.log('sum :',res); 
}

function By5(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('MultilyBy5');
            if(x > 5000000)
                reject('Number too long')
            resolve(x*5); 
        }, 2000);}
    )
   
    
}

async function exec() {
    try {
        let sum = await softTraitment();
        let res = await By5(sum);
    display(res);
    } catch (error) {
       console.error(error); 
    }
    
}