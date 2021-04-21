const student = [
    {id: 1, name: "salman"},
    {id: 2, name: "manna"},
    {id: 3, name: "arefin shuvoo"},
]
var nameProp = [];
for(let i = 0; i< student.length; i++){
    const students = student[i];
    nameProp.push(students.name);
}
console.log(nameProp);

const names = student.map(x => x.name);
const ids = student.map(y => y.id);
console.log(names);
console.log(ids);

const fid = student.filter(z => z.id > 1);
console.log(fid);
const bigger = student.find(f => f.id > 1);
console.log(bigger);