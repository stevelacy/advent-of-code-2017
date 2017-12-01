const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').trim()

const splited = input.split('')
const halfLength = input.length / 2

let total = 0
let halfWay = halfLength
splited.forEach((v) => {
  const num = parseInt(v)
  if (halfWay === input.length) {
    halfWay = 0
  }
  if (num === parseInt(splited[halfWay])) {
    total += num
  }
  halfWay++
})

console.log(total)
