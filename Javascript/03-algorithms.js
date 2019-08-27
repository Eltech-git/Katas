let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

//20301
let splitString = string => {
	return (string).split("")
}
splitString(phrase)
let mkarray = splitString(phrase).splice(0,10).reverse()
let stringjav = `${mkarray}`
let mkarray1 = splitString(phrase).splice(10,4).reverse()
let stringjav1 = `${mkarray1}`
let mkarray2 = splitString(phrase).splice(14,4).reverse()
let stringjav2 = `${mkarray2}`
let mkarray3 = splitString(phrase).splice(17,5).reverse()
let stringjav3 = `${mkarray3}`

console.log(stringjav.concat(stringjav1).concat(stringjav2).concat(stringjav3));

//20302

let dividedarray = (array) => {
	return array.forEach (n => (n.split('')))
}
	console.log(dividedarray(prices))
