var sumofNums= (...arguments) => {
    var let = 0;
    for (let i in arguments ) {
        let += arguments[i];
    }
    return (let);
}
console.log(sumofNums(10,10))