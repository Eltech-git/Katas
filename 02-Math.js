//02-Math
let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]
//20201
let showFull = (num) => {
	 return num.toFixed ()
}
console.log(showFull(3.14));
console.log(showFull(1.5678));
//20202

let roundPrice = (array) =>{
	return array.map(n => {
		return {
			name:n.name ,
			price:n.price.toFixed()
		}
	})
}
roundPrice(products)
console.log(roundPrice(products));
//20203
let roundSecNumDec = (a,b) => {
	return a.toFixed(b)
}
roundSecNumDec(3.12345,2)
console.log (roundSecNumDec(3.12345,2))
//20204
let secNumPw = (a,b) => {
	return Math.pow (a,b)
}
secNumPw (3,3)
console.log(secNumPw(3,3))
//20204
let randNum10 = () => {
	let a = Math.random() * 10
	return (a)
}
randNum10 ()
console.log(randNum10());
//20205
let randNumPar = (x) => {
	let a = Math.random() * x
	return (a)
}
randNumPar (3)
console.log(randNumPar(3));
