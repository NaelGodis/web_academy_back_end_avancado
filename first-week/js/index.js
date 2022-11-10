//Overview de JavaScript

// coonsole
console.log('texto')
console.error('Algo errado não está certo!')
console.warn('Fica Esperto.')

//variavies
const nome = "victor"
console.log(nome)
let x =10
if(true)
{
    let x = 10
}

console.log(x)

//tipos de dados

//string
const name = "victor"
console.log(nome)
console.log(typeof nome)
n = 15,99
console.log(n)
console.log(typeof n)

//bol
const isOpen = 0
console.log(isOpen)
console.log(typeof isOpen)

//null
const a = null
console.log(a)
console.log(typeof a)

//undefined
let nada 
console.log(nada)
console.log(typeof nada)

//array
const linguagens = ["c++",50,"java","python","JS"]
console.log(linguagens[1])
console.log(typeof linguagens[1])


//object literals
const user = {
    username: "Nael", 
    password: "123",
    age: 31,
    name: "Nael Godis"
}
console.log(user)
console.log(typeof user)

//métodos de string
 const text = 'Qualquer um'
 console.log(text.length)
 //quebrar texto em conjunto de caracteres
const textToArray = text.split("quer")
console.log(textToArray[1])

// tornar as letras maiusculas
console.log(text.toLocaleUpperCase())

//procurar algo dentreo da string
console.log(text.indexOf("m"))
console.log(text.charAt(text.length -1))
console.log(text.slice(4,11))

//mais sobre arrays
const chars =['AAA','B','C','D',88]
console.log(chars.length -1)
console.log(chars[chars.length -1])
chars[5] = "F"
console.log(chars)
chars.pop()
chars.unshift("B")
console.log(chars)

//object literal
const product ={

    productName: "Camisa",
    price:29.99,
    inStock: true,
    size: ['p','m','g'],
    'main color': 'red'

}

console.log(product.price)
console.log(product['price'])
console.log(product.size[product.size.length -1])
console.log(product['main color'])

//destructuring- desestruturação

const {productName, price} = product
console.log(price)

const vector = [3, 7, 2, 99, 89] 
let [...vetor] = vector
console.log(...vetor)

//JSON - Java Script Object Notation


//criando uma entidade cachorro

const dog = {

    name: 'Scooby',
    age: 10
}
console.log(dog)
const dogJson = JSON.stringify(dog)
console.log(dogJson)

const dogObject=JSON.parse(dogJson)
console.log(dogObject)

//Desafio 1

const vectorDesafio = [25, 45, 3, 9, 5]

 let vetor1 = {
    n1:vectorDesafio[0],
    n2:vectorDesafio[1],
    n3:vectorDesafio[2],
    n4:vectorDesafio[3],
    n5:vectorDesafio[4]
 }

console.log(vetor1.n1)

const {n1,n2,n3,n4,n5} = vetor1
//let[ v1,v2,v3,v4,v5]= vectorDesafio
//console.log(...vector)
 
const vectorDesafioJson = JSON.stringify({n1,n2,n3,n4,n5})
console.log(vectorDesafioJson)

//const vectorDesafioObject=JSON.parse(vectorDesafioJson)
//console.log(vectorDesafioObject)

const num1 = 10
const num2 =20
const calculadora = {
    soma:num1 + num2,
    sub:num1 - num2,
    mult:num1 * num2,
    div:num1 / num2
}
 console.log(calculadora.soma)

 const {soma,sub,mult,div} = calculadora
 const calculadoraJson = JSON.stringify(calculadora)
 console.log(calculadoraJson)





 const a1 = 5
 const b1 = 10
 //const out = ('Quinze é' + (a+b)+ '\e não'+(2*a+b)+".")
 //console.log(out)

 const out =`Quinze é ${(a1+b1)} \ne não ${(2*a1+b1)}.`
 console.log(out)

 //metodos de arrays

  const names = ['Victor','Paulo','Elias','Fabiana']
  names.forEach(function(name){
    console.log(name) //mostra o que esta dentro do vetor
  })

   const modifiedNames = names.map(function(nome){
    if (nome == "Paulo") 
        return ("Paulo Sampaio")
    else
        return  nome
        
     })  //saida: Paulo Sampaio
//forEach percorre um vetor
modifiedNames.forEach(function(nome){
    console.log(nome)
})

const numArray = [36,35,25,01,45,25,5,3,7,0].filter(function(num){
    return num < 10 //saida: todos os números menores que 10
      

})

numArray.forEach(function(num){
    console.log(num) 
})

console.log(numArray)

//reduce permite aplicar operações matematicas para reduzir o códigos

 const SumArray =numArray.reduce(function(num1,num2){
    return num1+num2 //saida soma dos numeros menores que 10 do vetor

})
console.log(SumArray)

//Funçôes
function myFunction(){
    return 'Testando a minha função'

}

console.log(myFunction())

function myFunctionome(nome,sobrenome){
    return `O nome completo é ${nome} ${sobrenome}`

}

console.log(myFunctionome("Paulo", "Sampaio"))



//arrow function === função anônima
//function (data){return 0;}

const myArrowFunction = (a,b) => a+b
console.log(myArrowFunction(5,2))


const myArrowFunction1 =(x,b) => (x=7)+(b=5)
console.log(myArrowFunction1())

//const myArrowFunction2 =() => ((x=7),(x+5)) ()
//console.log(myArrowFunction())

 const namesLength = names.map(({length}) => length)

console.log(namesLength)

//orientação a objetos

class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}.`
    }
    static test(){
        console.log('testandoo método estático...')
    }
}

//herança

class Tenis extends Product{
    constructor(name,price,size){
        super(name, price) //pega do pai(product)
        this.size = size
    }
    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}`
    }
    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price} e o tamanho é ${this.size}.`
    }
}

//instaciando um objeto product
const shirt = new Product('camisa Branca',19.99)
console.log(shirt.productDetails())
const sock = new Product(' Meia Cinza', 15.99)
console.log(sock.productDetails())
Product.test()

const tenis = new Tenis('Adidas AIR Jordan',10000,'45')
console.log(tenis.showNumber())
console.log(tenis.productDetails())


//DOM - Document Objeto Model

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('text'))
console.log(document.querySelectorAll('text'))
const texts = document.querySelectorAll('.text')
console.log(texts)

texts.forEach((data)=> console.log(data))

texts[0].textContent = 'Estou alterando o primeiro paragráfo'

texts[0].innerHTML = '<span> Colocando um subtítulo <\span>'
texts[1].style.backgroundColor = 'red'

texts[2].remove()

const button = document.querySelector('#btn')
button.addEventListener('click',()=>(texts[3].style.backgroundColor = 'orange'))




