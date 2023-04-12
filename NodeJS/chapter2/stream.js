const fs = require('fs')

const rs = fs.createReadStream('./loremIpsum.txt', 'utf8')
const ws = fs.createWriteStream('./loremIpsum-copy.txt')

/*
rs.on('data', (chunk) => {
    ws.write(chunk)
})
*/

// ALTERNATIF
rs.pipe(ws)