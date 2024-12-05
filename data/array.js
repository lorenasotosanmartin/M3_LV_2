//ARRAY INICIALIZADO
let array = [];

//AGREA ELEMENTOS AL ARRAY
array.push("Ana Fuentes", "Felipe Zapata", "Juan Carlos Ortiz");


//BUSCA UN ELEMENTO EN EL ARRAY}
function buscar(nombre) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === nombre) return 'medico encontrado'
    }
    return 'medico no encontrado'
}

console.log("Resultado al buscar a Ana fuentes:")
console.log(buscar("Ana Fuentes"))
console.log("Resultado al buscar a Ana Zapata:")
console.log(buscar("Ana Zapata"))


//ELIMINAR PRIMER ELEMENTO DE ARRAY
console.log("Primer elemento eliminado de array")
console.log(array.shift());

//ELIMIAN ULTIMO ELEMENTO DE ARRAY
console.log("Ultimo elemento eliminado de array")
console.log(array.pop());
