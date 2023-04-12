const fs = require('fs')

// // CREATE DIRECTORY
// CHECK IF DIRECTORY EXISTS
if (fs.existsSync('./new')) {
    console.log('Directory exists')
}
else {
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log('Folder created')
    })
}

// // DELETE DIRECTORY
if(!fs.existsSync('./new')) {
    console.log('Directory does not exist')
}
else {
    fs.rmdir('./new', (err) => {
        if (err) throw err
        console.log('Folder deleted')
    })
}