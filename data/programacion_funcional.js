//COSTO TOTAL DE SERVICIOS DE PACIENTES MEDIANTE CURRYING 
let totalPaciente = n_consulta => valor_consulta => n_consulta * valor_consulta;
console.log("total de paciente que fue a dos consultas medicas con un valor de 15000")
console.log(totalPaciente(2)(15000));

//TIEMPO PROMEDIO DE ESPERA DE PACIENTES MEDIANTE FUNCION FLECHA 
let promedio_espera_min = (tiempos_espera_min) => {
    let total_tiempos = 0;
    tiempos_espera_min.map((x) => total_tiempos += x);
    let promedio = (total_tiempos / tiempos_espera_min.length);
    return promedio;
}
console.log("Promedio de tiempo de espera (minutos) para el array [10,15,20,5]");
console.log(promedio_espera_min([10, 15, 20, 5]));

//HORAS DE CONSULTA DE UN DOCTOR EN LA SEMANA MEDIANTE RECURSION
let calcularHorasDoc = (arrayHoras) =>{
    console.log(arrayHoras)
    if (arrayHoras.length == 1) {
        return arrayHoras[0];
    }
    if (arrayHoras.length > 1) {
      return arrayHoras[0] + (borrarPrimero(arrayHoras));
    }
    return 0; 
}

let borrarPrimero = (array) => {
    array.shift();
}

console.log(calcularHorasDoc([1,2,3]))

//DESCUENTO A COSTO TOTAl DE CONSULTAs MEDIANTE COMPOSICION DE FUNCIONES
let descuento_aplicado = descuento => (descuento * 0, 1);
let costo_consultas = n_consultas => precio => n_consultas * precio;
let costo_descuento = x => costo_consultas*descuento_aplicado;