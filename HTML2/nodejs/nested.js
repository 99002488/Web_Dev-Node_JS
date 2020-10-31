(function greet(name){
    console.log('hello '+name);
})('Shweta');

// var sum= (function(n1,n2,n3){
//     return ((n1+n2+n3)/3);
// })(10,20,30);
// console.log(sum);

function avg(x,y){
    var total= function(){
        return x+y;
    }
    return total()/2;
}
var result=avg(10,20);
console.log(result);


(function(n1,n2,n3){
    console.log((n1+n2+n3)/3);
})(10,20,30);

