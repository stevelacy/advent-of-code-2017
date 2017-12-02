const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').replace(/\t/g, ' ')

const splited = input.split(/\n/)
let total = 0
splited.forEach((row) => {
  row = row.split(' ')
  const min = Math.min.apply(Math, row.map(Number))
  const max = Math.max.apply(Math, row.map(Number))
  const diff = max - min
  total += diff
})
console.log(total)
