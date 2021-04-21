// null vs undefined
{
    "i can set a value null example for compair & undefined i can get return;"
}

1.
let element;
console.log(element);
"if value is not set it will be undefined;"

2.
function add(num1, num2){
    const sum = num1 + num2;
    // return sum;
}
const result = add(5);
console.log(result);
"if inside a function there has no return or return but not define that what to return then it will be undefined."
"and if parameter value not passed then it will also return undefined."

3.
const info = {name: "Riaz", phone: "01869"};
console.log(info.roll);
"if i want to access a property in an object that is not belong.. then it will return undefined;"

4.
let fun = undefined;
console.log(fun);
"if i set a variables value undefined. then it will also return undefined. "

5.
let ages = [10, 20, 30];
console.log(ages[3]);

"if i want to get a element in a position which is not belongs to the array then it will return undefined;"