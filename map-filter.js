const number = [5, 6, 7, 8];
const output = [];

for(let i = 0; i <number.length; i++){
    const elements = number[i];
    const result = elements * elements;
    output.push(result);
}
console.log(output);


const result = number.map(function(x){
    return x*x;
})
console.log(result);

const result2 = number.map(x=> x * x);
console.log(result2);

const bigger = number.filter(x => x > 5);
console.log(bigger);