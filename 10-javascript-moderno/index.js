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
const sum = function(a, b) {
  return a + b
}

// const arrowSum = (a, b) => {
//   return a + b
// }
const arrowSum = (a, b) => a + b // com parametros sem corpo

console.log(sum(5,9))
console.log(arrowSum(3,9))

const greeting = (name) => { // com parametros e com corpo
  if(name) {
    return 'Olá ' + name + '!'
  } else {
    return 'Olá'
  }
}

console.log(greeting('Matheus'))
console.log(greeting())

const test = () => console.log('testou') // sem parametros e sem corpo

test()

const user = {
  name: 'Matheus',
  sayUserName() {
    var self = this
    setTimeout(function() {
      console.log(self)
      console.log(`UserName: ${self.name}`)
    }, 500)
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this)
      console.log(`UserName ${this.name}`)
    }, 500)
  }
}
user.sayUserName()
user.sayUserNameArrow()