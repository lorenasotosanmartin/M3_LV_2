//PILA INICIALIZADA
let stack = [
    {
        "paciente": "Javiera Guzman",
        "doctor": "Ana Fuentes",
        "fecha": "25/11/2024",
        "hora": "10:30"
    },

    {
        "paciente": "Claudia Gutierrez",
        "doctor": "Ana Fuentes",
        "fecha": "26/11/2024",
        "hora": "15:30"
    },

    {
        "paciente": "Claudia Gutierrez",
        "doctor": "Felipe Zapata",
        "fecha": "06/12/2024",
        "hora": "15:30"
    },

]

//SE AGREGA ELEMENTO A LA PILA
stack.push( {
    "paciente": "Josefa Andrade",
    "doctor": "Felipe Zapata",
    "fecha": "24/11/2024",
    "hora": "11:15"
});


//SE ELIMINA ELEMENTO DE LA PILA
console.log("Primer elemento en salir:");
console.log(stack.pop());
