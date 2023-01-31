const _ = require('lodash')
module.exports.mult=function mult_array_elts(array,coef){
    _.map(array,el=> el*=coef);
    return array;
}

module.exports.mult_by_10=function mult_array_10(array){
    _.map(array,el=> el*=10);
    return array;
}