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

// 3- Filter, metodo de um array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const oddNumbers =numbers.filter((number) => number % 2 !== 0) // filtra o array retornando o que corresponde a exceção
console.log(oddNumbers)

// 4- Map, metodo de um array
const users = [
  {name: 'Matheus', age: 25},
  {name: 'Andre', age: 35},
  {name: 'Vanessa', age: 15},
]

users.map((user) => user.age = Math.random()) // Percorre todos os elementos de um array como um loop podendo modificar os valores
console.log(users)

// 5- Template literals, forma mais simples de concatenar uma variavel à uma string
const lastName = 'Orozimbo'
console.log('Matheus ' + lastName) // forma antiga
console.log(`Matheus ${lastName}`) // forma mais atual

// 6- Destructuring

const fruits = ['Maçã', 'Abacaxi', 'Limão']
const [f1, f2, f3] = fruits
console.log(f1)
console.log(f2)
console.log(f3)

// 7- Spread operators '...'
const objects = ['Faca', 'Tabua', 'Colher']
const newObjects = ['Garfo', 'Concha', ...objects]
console.log(newObjects)

// 8- Classes, recurso fundamental para trabalhar com programção orientada a objeto
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product('Camisa Branca', 19.90)
console.log(shirt)
console.log(shirt.productWithDiscount(10))