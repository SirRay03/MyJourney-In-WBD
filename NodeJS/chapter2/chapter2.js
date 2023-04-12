const fsPromises = require('fs').promises
const path = require('path')

/*
// err kalau ada error, data kalau berhasil
// kalau gapake path module, harus pake './' di depan (nama file di hard code)
fs.readFile(path.join(__dirname, 'lorem.txt'), 'utf8', (err, data) => {
    if (err) throw err
    //toString() biar bisa dibaca atau pakai 'utf8' di parameter kedua
    console.log(data)
})
*/

// console.log('Ini ditulis di bawah tapi muncul duluan karena async')

/*
CONTROL FLOW TAPI CALLBACK HELL
// nulis file
fs.writeFile(path.join(__dirname, 'reply.txt'), 'Ini isi filenya', (err) => {
    if (err) throw err
    console.log('Ini bukti file reply.txt berhasil dibuat')

    // ditaroh disini biar nulis file baru baru nulis append
    // karena JS async
    fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nIni tambahan dari command appendFile', (err) => {
        if (err) throw err
        console.log('Ini bukti file reply.txt berhasil ditambah')

        fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname,'gantinama.txt'), (err) => {
            if (err) throw err
            console.log('Nama filenya diganti jadi gantinama.txt')
        })
    })
})
*/


/*
Contoh error
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})
*/

// exit on uncaughtException
process.on('uncaughtException', err => {
    console.error('There was an uncaught error:', err)
    process.exit(1)
})

// YANG LEBIH RAPI DAN GABANYAK CALLBACK
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'lorem.txt'), 'utf8')
        console.log(data)
        // unlink buat hapus file
        // await fsPromises.unlink(path.join(__dirname, 'lorem.txt'), 'Ini isi filenya')
        await fsPromises.writeFile(path.join(__dirname, 'promiseReply.txt'), 'Ini isi filenya')
        await fsPromises.appendFile(path.join(__dirname, 'promiseReply.txt'), '\n\nIni tambahan dari command appendFile')
        await fsPromises.rename(path.join(__dirname, 'promiseReply.txt'), path.join(__dirname,'promiseRename.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseRename.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}    

fileOps()