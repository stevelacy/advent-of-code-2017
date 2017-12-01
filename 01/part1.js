const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8')

const splited = input.split('')

let total = 0
let prev = 2 // first char
splited.forEach((v) => {
  const num = parseInt(v)
  if (num === prev) {
    total += num
    return
  }
  prev = num
})

console.log(total)
