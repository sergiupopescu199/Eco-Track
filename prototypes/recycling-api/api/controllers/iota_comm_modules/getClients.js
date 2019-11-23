const iotaGlobal = require('./IotaGlobal')
const getClients = async (_address)=>{
  return Promise.resolve(
    iotaGlobal.iota.findTransactionObjects({ addresses: [_address] })
    .then(response => {
        const trytes = response[response.length - 1].signatureMessageFragment.slice(0, -1)
        const data = iotaGlobal.converter.trytesToAscii(trytes) 
        return data
    })
    .catch(err => {
        console.error(err)
    }));
}
  
 /*  //Test get client functions
getClients(iotaGlobal.address).then(function(d){
    console.log(d)
})     */
module.exports ={
    execute:getClients
}