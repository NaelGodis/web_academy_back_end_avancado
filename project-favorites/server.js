const { write } = require('fs')
const http = require('http')
const path = require('path')
const fs = require('fs')
//definindo rotas para aplicação
http.createServer((req,res)=>{
    const file = req.url===('/' ? 'index.html': req.url)
    const filePath =path.join(__dirname,'public',file)
    const extname =path.extname(filePath)
    const allowedFileTypes = ['.html','.js','.css']
    cons allowed = allowedFileTypes.find(
        
    )

        fs.readFile(
            path.join(__dirname,'public','index.html'),
            (err,content)=>{
                if(err) throw err
                res.end(content)
            }
        )


   //if(req.url ==='/contato')
    //res.write('<h1>Pagina inicial</h1>')
   // res.end
    
}).listen(5000,()=> (console.log('servidor rodando...')))