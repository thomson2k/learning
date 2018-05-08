/*function a() {
  var bb = 1


  function c() {
    var dd = 2
    console.log(dd)
  }
  c()
}
a()*/

/*
function getCounter() {
  let count = 0

  return {
    read: () => count,
    bump: () => { count++ },
  }
}

function getMany() {
  const c1 = getCounter()
  const c2 = getCounter()
  const c3 = getCounter()

  let index = 0

  return function() {
    const c = [c1, c2, c3][index]

    index++

    if(idex > 2) {
      index = 0
    }
    c.bump()

    return c.read()
  }
}

const run = getMany()

console.log(run())
console.log(run())
console.log(run())
console.log(run())
console.log(run())
console.log(run())
console.log(run())
console.log(run())
*/
(function() {
  const a = 1;

function getA () {
  return a
}
console.log(getA())
})()
//const counter = getCounter()

//console.log(counter.read())
//counter.bump()
//console.log(counter.read())

//console.log(counter)
