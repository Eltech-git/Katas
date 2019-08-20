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

// fight(mimmo)

// console.log('020503', );



// 020504

let names1 = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]

class Product {
	constructor (name,price) {
		this.name=name
		this.price=price
	}
	applyDiscount (discount) {
		this.price = this.price - (this.price*discount/100)

	}
}

let pere = new Product ('Pere',10)
pere.applyDiscount(10)
console.log(pere)

//

class Reciept {
	constructor (products) {
		this.products = products
		this.total = 0
	}
	calcTotal () {
		this.total = this.products.map(p => p.price).reduce((t,i)=> {
			return t + i
		})
	}
}
let getReciept = (names,prices,discounts) => {
	let products = names.map((n, i) => {
		return new Product (n,prices[i])
	})
	console.log(products);
	products.map ((p ,i) => p.applyDiscount(discounts[i]))
	console.log('============');
	console.log(products);
	let newreciept = new Reciept (products)
	console.log(newreciept);
	newreciept.calcTotal()
	console.log(newreciept);
}


getReciept(names1,prices,discounts)
