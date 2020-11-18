const students =[
    {id: 52, name: "James William"},
    {id: 58, name: "William Shakespeare"},
    {id: 65, name: "Percy Bysshe Shelley"},
    {id: 68, name: "Robert Frost"},
];
// const onlyName = [];
// for(let i = 0; i < students.length; i++){
//     const sName = students[i];
//     const result = sName.name;
//     onlyName.push(result);
// }
// console.log(onlyName);

//shortcut way > map
// const names = students.map(students => students.name);
// const ids = students.map(students => students.id);
// const names = students.map(students => students.class);//undefined
// console.log(ids);

//filter
//give me those students, whose id number is above 58;
const idAbove58 = students.filter(students => students.id > 58);
console.log(idAbove58);

//find
//specific id, first condition match
const singleId = students.find(students => students.id < 58);
console.log(singleId);