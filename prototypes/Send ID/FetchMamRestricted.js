///////////////////////////////
// MAM: Publish messages to Private Stream
///////////////////////////////
const mostFrequent = require('./mostFrequent')


// Init State
const mamType = 'restricted'
const mamSecret = 'DONTSHARETHISPASSWORD'

// Initialise MAM State
let mamState = mostFrequent.Mam.init('https://nodes.devnet.iota.org:443')

// Callback used to pass data out of the fetch
const logData = data => console.log(mostFrequent.converter.trytesToAscii(data))

const FetchMam = async (_root) => {
  // Callback used to pass data + returns next_root
  console.log("inside FetchMamRestricted function root is",_root) // outptu 'somthing'
  const resp = await mostFrequent.Mam.fetch(_root, mamType, mamSecret, logData)
  console.log(resp)
}
module.exports ={
  execute:FetchMam
}
