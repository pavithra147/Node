//create new folder
const fs = require('fs')

const folderName = './new.txt'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
 
//rename the folder


try {
  fs.renameSync('./file.txt', './change.txt')
} catch (err) {
  console.error(err)
}