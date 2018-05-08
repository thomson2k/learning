
//function dog() {
// console.log('woof');
//
// setTimeout(cat, 2000)
//
// console.log('woof end')
//}
//function cat() {
// console.log('miauuuu');
//}
//console.log('start')
//
//setTimeout(dog, 2000)
//
//console.log('stop')
/*
console.log('start')

let count = 3;

while(count--) {
  console.log('count', count)
}
console.log('stop')
*/


//function countDown(count) {
//  console.log('count', count)
//
//  if(count) {
//  //setTimeout(() => {
//	countDown(count -1)
//	//} , 2000)
//  }
//}
//console.log('start')
//
//countDown(3)
//
//console.log('stop')


//function compute(a, b, callback) {
//	const result = a + b
//
//	setTimeout(function() {
//		callback(result)
//	}, 3000)
//}
//console.log('start')
//
//compute(2, 2, function (result) {
//	console.log(result)
//})
//console.log('stop')





//const request = require('request')
//
//console.log('start')
//
//request('http://onet.pl', function(error, response, html) {
//	console.log(html.substr(0,500))
//})
//
//console.log('stop')

///function zrobObiad(callback) {
///	const obiad = 'frytki'
///
///	console.log('mama zaczyna robic obiad')
///
///	setTimeout( function() {
///		callback(obiad)
///	}, 3000)
///}
///
// function nakarmDzieckoPierwsze() {
// 	zrobObiad(function(obiad){
// 		console.log('dziecko pierwsze zjadlo', obiad)
// 	})
// }
// 
// function nakarmDzieckoDrugie() {
// 	zrobObiad(function(obiad){
// 		console.log('dziecko drugie zjadlo', obiad)
// 	})
// }
// 
// function nakarmDzieckoTrzecie() {
// 	zrobObiad(function(obiad){
// 		console.log('dziecko trzecie zjadlo', obiad)
// 	})
// }
// 
//function nakarmDzieci() {
//	zrobObiad(function(obiad){
//		console.log('dziecko trzecie zjadlo', obiad)
//		console.log('dziecko trzecie zjadlo', obiad)
//		console.log('dziecko trzecie zjadlo', obiad)
//	})
//}
//				
//console.log('dziecko glodne')
//nakarmDzieckoPierwsze();
//nakarmDzieckoDrugie();
//nakarmDzieckoTrzecie();
//nakarmDzieci();
//console.log('obiad sie gotuje')

//promise 


function zrobObiad() {
	console.log('mama zaczyna robic obiad')
	
	const obiad = 'pizza'

	return new Promise(function(resolve){
		setTimeout( () => {
			resolve(obiad)
		})
	})
}

//function nakarmPierwszeDziecko() {
//	zrobObiad().then( (obiad) => {
//		console.log('dziecko pierwsze je', obiad)
//	})
//}
//
//function nakarmDrugieDziecko() {
//	zrobObiad().then((obiad) => {
//		console.log('dziecko drugie je', obiad)
//	})
//}
//
//function nakarmTrzecieDziecko() {
//	zrobObiad().then((obiad) => {
//		console.log('dziecko trzecie je', obiad)
//	})
//}

//console.log('start')
//
//const obiadPromise = zrobObiad()
//
//
//	obiadPromise.then( (obiad) => {
//		console.log('dziecko pierwsze je', obiad)
//	})
//
//	obiadPromise.then((obiad) => {
//		console.log('dziecko drugie je', obiad)
//	})
//
//	obiadPromise.then((obiad) => {
//		console.log('dziecko trzecie je', obiad)
//	})
//
//console.log('stop')
//
//	obiadPromise.then((obiad) => {
//		console.log('dziecko czwarte  je', obiad)
//	})
//
//	obiadPromise.then((obiad) => {
//		console.log('dziecko piate je', obiad)
//	})
//
//

const fetch = require('node-fetch')

console.log('start')

const pagePromise = fetch('http://onet.pl')

console.log('stop')

pagePromise.then(response => {
	const htmlPromise = response.text()

	console.log('wyciaganie htmla')

	htmlPromise.then(html =>{
		console.log(html.substr(0, 500))
	})
})