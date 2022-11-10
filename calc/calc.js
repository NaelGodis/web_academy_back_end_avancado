
function sum(){
    const formData = new FormData(document.querySelector('form'))
    const n1  = formData.get("n1")
    const n2  = formData.get("n2")
console.log(n1+' '+n2)
}