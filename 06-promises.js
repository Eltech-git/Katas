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
