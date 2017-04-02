
var UtilHex = require('../utils/numberUtil')

// Create a binary buffer
let buffer = new Buffer('Test data', 'utf8');

//Log binary buffer
console.log(buffer);

//Convert buffer to string
console.log(buffer.toString())

//Convert buffer to JSON - [ data converted to base 10 ]
let jbuf = buffer.toJSON()

  //Loop over buffer array held in JSON and convert back to string
  print(jbuf.data)
  jbuf.data.forEach((buf) => {
    print(`buf bin converted to ${UtilHex.base10to16(buf)}`)
  })




function print(message){
  console.log(message)
}
