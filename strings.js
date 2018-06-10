//const str = '     '
//console.log(str.length)
//
//if (str.trim()) {
//	console.log('string NOT empty')
//} else{
//	console.log('empty')
//}

//const sentence = 'Ala ma kota'
//
//console.log(
//	sentence.includes('kot')
//)
//if (sentence.indexOf('kot') !== -1) {
//	
//}

//const imie = 'wlodek'
//const przywitanie = `czesc ${imie}`
//console.log(przywitanie)

//const zdanie = 'terminator ma motor , a glonojad ma przyssawke'
//
//const slowa = zdanie.split(' ')
//
//const szukane = slowa.filter(slowo => slowo === 'ma')

console.log(
	zdanie
		.split(' ')
		.filter(s => s === 'ma')
		.length
	)

//const szukane = slowa.filter(function slowo() {
//	return slowo === 'ma'
//})
	
console.log(szukane.length)
	
//var count = 0
//
//for(var i = 0; i < slowa.length; i++) {
//	if (slowa[i] === 'ma') {
//		count++
//	}
//}
//
//console.log(count)