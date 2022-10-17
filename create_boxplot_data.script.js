const fs = require('fs')
const os = require("os")



const files = [
  '2','8', '16', '24'
]

const getAllColumn = (lines, index) => lines.map(line => line.split(',')[index])

const getMin = (data) => Math.min(...data)
const getMax = (data) => Math.max(...data)

const fileData = files.forEach((n) => {
  const fileName = `./topo_single${n}.csv`
  const fileData = fs.readFileSync(fileName, {encoding: 'utf-8'});
  const [first, ...lines] = fileData.trim().split('\n')
    
  const memoryColumn = getAllColumn(lines, 1)
  const cpuColumn = getAllColumn(lines, 4)
  

  console.log("AAA: ", memoryColumn)
})




// [
//   timeStamp,
//   memory,
//   memoryLimit,
//   percMemory,
//   percCpu,
//   coreCpu
// ] 