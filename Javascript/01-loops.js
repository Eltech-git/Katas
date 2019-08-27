//Exercise
let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

//20101
let logEach = (array) => {
	array.forEach((e) => console.log(e))
}

logEach(numbers)

//20102
let logNames = (array) => {
	array.forEach(e => console.log(e.name))
}
logNames(students)
//20103
let fun1 = numbers.map(n=> (n+1))
console.log (fun1)
//20104
let fun2 = students.map(n=> (n.name))
console.log(fun2)
//20105
let fun3 = numbers.filter(n=> n>=22)
console.log(fun3)
//20106
let fun4 = numbers.filter(n=> n>70)
console.log(fun4);
//20107
let fun5 = students.filter(n=> n.name.length>6)
console.log(fun5)
//20108
let fun6 = mix.filter(n => (typeof(n)=='string'))
console.log(fun6)
//20109
let fun7 = numbers.find(n=> n>100)
console.log(fun7);
//20110
let fun8 = students.find(n=> n.name=="Bob")
console.log(fun8);
//20111
let fun9 = numbers.reduce((t, i) => t + i)
console.log(fun9);
//20112
let fun9bis = (a, b) => a + b
numbers.forEach(n => fun9bis(n, n))
console.log(fun9bis)
//20113
let fun10 = numbers.reduce((t, i) => t - i)
console.log(fun10);
//20114
let fun11 = numbers.reduce((t, i) => t * i)
console.log(fun11);
//20115
let fun12 = numbers.sort((a,b)=> a-b)
fun12.reverse ()
console.log(fun12);
//20116
let fun13 = students.sort ((a,b)=>a.name.length>b.name.length)
console.log(fun13);
//20117

students.forEch ( (s,i)=> {s=})
