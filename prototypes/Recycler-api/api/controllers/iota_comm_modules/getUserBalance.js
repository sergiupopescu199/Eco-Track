const iotaGlobal = require("./IotaGlobal")

const getUserBalance = async (address) =>{
     const getBalance = await iotaGlobal.iota.getBalances
     const balance = await getBalance([address],100)
     return balance['balances'][0]
}
 
getUserBalance('XGIVJKNUIDKDVAXGRK9SFXYFVOLEHSJOIZVROT9DUAMYUUXPPBZWYQWJNEYPVKOMKR9SNRYSZXUHDFKNB').then((r)=>{console.log(r)})
module.exports ={
    execute:getUserBalance
}
 
