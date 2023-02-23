function compareNumbers(a,b){
    return (a > b && `${a} is greater than ${b}`) ||
           (a < b && `${a} is smaller than ${b}`) ||
           `{a} is equal to ${b}`;
}

console.log(compareNumbers(5,4));