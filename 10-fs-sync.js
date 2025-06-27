const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.Txt','utf8')
const second = readFileSync('./content/second.Txt','utf8')

 writeFileSync('./content/result-sync.txt',`Here is the Result : ${first},${second}`,{ flag: 'a'})

console.log('done with this task')
console.log('starting the next one')