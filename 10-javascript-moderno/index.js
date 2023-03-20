// 1- var,let e const

var x = 10
var y = 5

if(y < 10) {
  var x = 5
  console.log(x) // 5
}

console.log(x) // 5
x = 7
console.log(x) // 7

let a = 10
let b = 5

if(b < 10) {
  let a = 5
  console.log(a) // 5
}

console.log(a) // 10
a = 7
console.log(a) // 7

const c = 10
const d = 5

if(d < 10) {
  const c = 5
  console.log(c) // 5
}

console.log(c) // 10
// c = 7 // ERROR, constantes não são mutáveis

// 2- Arrow function
