//COLA INICIALIZADA
let queue = [
    {
        "nombre": "Carlos Cifuentes",
        "email": "carloscifuentes@gmail.com",
        "motivo": "cirugia ",
        "asunto": "cotización Cirugia",
        "mensaje": "Estimados, les escribo para solicitarles una cotizacion por cirugia bariatrica, gracias.",
        "Fecha":"25/11/2024",
        "Hora":"13:30"
    },
]

//SE AGREGA ELEMENTO A LA COLA
queue.push(
    {
        "nombre": "Javiera Cortez",
        "email": "javicortez@gmail.com",
        "motivo": "cotización",
        "asunto": "cotización examen",
        "mensaje": "Estimados, solicito información respecto al valor de una ecotomografia abdominal, gracias.",
        "Fecha":"25/11/2024",
        "Hora":"23:00"
    }
);

//SE ELIMINA ELEMENTO DE LA COLA
console.log ("Primer elemento en salir:")
console.log(queue.shift());
