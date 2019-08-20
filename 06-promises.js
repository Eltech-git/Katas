//020601

// let a = (x) => {
//   return new Promise( (resolve, reject) => {
//     if (x) {
//       setTimeout(() => {
//         resolve(x * x)
//       }, 2000)
//     } else {
//       reject('x not found')
//     }
//   })
// }
//
// a(2).then(response => {
//   console.log(response)
// }).catch(error => {
//   console.log(error)
// })

const brushTeeth = () => {
	return new Promise((resolve, reject)=> {
		 setTimeout(() => {
			resolve('ready')
		}, 1000)
	})
}

const getUp = () => {
	return new Promise((resolve, reject)=> {
		 setTimeout(() => {
			resolve('awake')
		}, 1000)
	})
}
const haveBreakfast = () => {
	return new Promise ((res,rej) => {
		setTimeout(() => {
			res('eaten')
		},2000)
	})
}
const haveShower = () => {
	return new Promise ((res,rej) => {
		setTimeout(()=> {
			res('showered')
		},2000)
	})
}



//-----------------------------------
getUp().then(res => {console.log(res);
	haveShower().then(res => {console.log(res);
		haveBreakfast().then(res => {console.log(res);
			brushTeeth().then(res => {console.log(res);
			})
		})
	})
})
// haveBreakfast().then(response => {console.log(response);})
// getUp().then(response => {console.log(response)})
// brushTeeth().then(response => {console.log(response)})



//020602

const makeCoffee = () => {
	return new Promise ((res,rej)=> {
		setTimeout(() => {
			res('coffee')
		},10000)
	})
}

const makeEggs = () => {
	return new Promise ((res,rej)=> {
		setTimeout(() => {
			res('eggs')
		},5000)
	})
}
const makeToast = () => {
	return new Promise ((res,rej)=> {
		setTimeout(() => {
			res('toast')
		},6000)
	})
}
const makeBacon = () => {
	return new Promise ((res,rej)=> {
		setTimeout(() => {
			res('bacon')
		},8000)
	})
}
makeBacon().then(res => {console.log(res);})
makeToast().then(res => {console.log(res);})
makeEggs().then(res => {console.log(res);})
makeCoffee().then(res => {console.log(res);})
Promise.all([makeEggs(),makeBacon(),makeToast(),makeCoffee()]).then(res=> console.log(res))

//020603

let speedy = new Promise((res, rej) => {
	let num = Math.random()*4
  return setTimeout(() => res('Speedy is the winner'), num)
})
let jackpot = new Promise((res, rej) => {
	let num = Math.random()*4
  return setTimeout(() => res('Jackpot is the winner'), num)
})
let red = new Promise((res, rej) => {
	let num = Math.random()*4
  setTimeout(() => res('Red is the winner'), num)
})
Promise.race([speedy,jackpot,red]).then(response => console.log(response))
