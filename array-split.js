const number = [4, 5, 6, 7, 8, 9, 10];
const part = number.slice(2, 5);
// console.log(part);
// console.log(number);

const element = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = element.splice(2, 5, 55, 65, 75);
// console.log(removed);
// console.log(element);
const together = element.join(",");
console.log(together);