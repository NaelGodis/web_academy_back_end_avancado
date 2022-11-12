const os = require('os')

const {freemem,totalmem} = os
console.log(os)
console.log(`Memoria Usada = ${parseInt(freemem()/1024/1024)} MB \n Memoria Livre = ${parseInt(totalmem()/1024/1204)} MB`)

const total = parseInt(totalmem()/1024/1024)
const freeMem = parseInt(freemem()/1024/1024)
const usage  = total - freeMem
const percents = (usage/total) *100

const stats ={
    total:`${total} MB`,
    freeMem:` ${freeMem} MB`,
    percents:`${percents} % em uso`
}
console.log('++++++++++++++++++MEMORY STATS+++++++++++++++++')
console.table(stats)


function callback_teste(){
    const data = new Date
    h=data.getHours
    m =data.getMinutes
    s =data.getSeconds
    ml= data.getMilliseconds

}

//setInterval((stats),5000)
//console.log()



