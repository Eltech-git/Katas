// 020501

class Car {
	constructor( make,model,color) {
		this.make=make
		this.brand=model
		this.color=color
	}
}

let buildcar = (make,model,color) => {
	let newcar1 = new Car (make,model,color)
	return newcar1

}
console.log('020501', buildcar('nike','canyonero','red'));

//020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

class Employee {
	constructor(array1,array2,pos){
		this.name=array1[pos]
		this.job=array2[pos]
	}
}
let makeEmployee= (array1,array2,pos)=> {
	return new Employee (array1,array2,pos)
}
let emp1 = makeEmployee(names,jobs,0)
let emp2 = makeEmployee(names,jobs,1)
let emp3 = makeEmployee(names,jobs,2)
let emp4 = makeEmployee(names,jobs,3)

console.log('020502', [emp1,emp2,emp3,emp4])

//020503

let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

class Karateka {
	constructor(name){
		this.name = name
		this.belt = belts[0]
	}
	increaseRank() {
		this.belt = belts[belts.indexOf(this.belt) + 1]
	}
}

let mimmo = new Karateka ('Emiliano')

let fight = (x) => {
	let intervalID = setInterval(() => {
		let score = Math.floor(Math.random()*10 +1)
		if (score > 8) {
			x.increaseRank()
		}
		console.log(score);
		console.log(x)
	}, 1000)
	setTimeout(() => {
		clearInterval(intervalID)
	}, 20000)
}

fight(mimmo)

// console.log('020503', );
