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

////////////////////////////////////////////////////

const { clear } = require('console')
const os = require('os') //CARREGANDO OS ARQUIVOS PARA DENTRO DO OBJETO
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem} = os //DESESTRUTURAÇÃO 

    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)
    const usage = total - freeMem 
    const percents = parseInt((usage/total) * 100)

    const stats = {
        total: `${total}`,
        freeMem: `${freeMem} MB`,
        percents: `${percents} % em uso`
    }
console.clear()
console.log('++++++MEMORY STATS++++++')
console.table(stats)

/*o log esta sendo executado após acima ter sido requerido como variável.*/
log('Rodando...', JSON.stringify(stats)) 

    }, 1000) 





