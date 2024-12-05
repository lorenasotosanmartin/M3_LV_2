
//OBJETO JSON DE DOCTORES
let doctores = [
    {
        "imagen": "assets/img/dr_zapata.jpg",
        "nombre": "Felipe Zapata",
        "especialidad": "Medicina general",
        "descripcion": "Con años de experiencia, nuestro doctor Fernando Garrido se especializa en la medicina general y en el tratamiento de enfermedades comunes",
        "experiencia": 10,
        "disponibilidad": ["lunes", "martes"],
        "contacto": {
            "email": "fzapata@clinicachillan.cl",
            "telefono": "+56965782645"
        }
    },
    {
        "imagen": "assets/img/dr_zambrano.jpg",
        "nombre": "Carlos Zambrano",
        "especialidad": "Cardiología",
        "descripcion": "Nuestro especialista en cardiología, Carlos Zambrano es un profesional reconocido que ha realizado múltiples investigaciones en su area",
        "experiencia": 5,
        "disponibilidad": ["lunes", "martes", "miercoles"],
        "contacto": {
            "email": "czambrano@clinicachillan.cl",
            "telefono": "+56965782937"
        }
    },
    {
        "imagen": "assets/img/dr_guzman.jpg",
        "nombre": "Natalia Guzman",
        "especialidad": "Ginecología",
        "descripcion": "Nuestra Medico especialista en ginecologia Natalia Guzman, cuenta con una amplia trayectoria y se ha especilizado en medicina reproductiva",
        "experiencia": 10,
        "disponibilidad": ["lunes", "martes", "miercoles", "viernes"],
        "contacto": {
            "email": "nguzman@clinicachillan.cl",
            "telefono": "+56995352937"
        }
    },
    {
        "imagen": "assets/img/dr_fuentes.jpg",
        "nombre": "Ana Fuentes",
        "especialidad": "Medicina general",
        "descripcion": "Nuestra doctora Soledad fuentes, es parte del área de medicina general y cuenta con años de experiencia en atención publica primaria",
        "experiencia": 15,
        "disponibilidad": ["lunes", "martes", "miercoles", "jueves", "viernes"],
        "contacto": {
            "email": "afuentes@clinicachillan.cl",
            "telefono": "+56993652937"
        }
    },

]

//OBJETO JSON DE SERVICIOS MEDICOS
let servicios = [
    {
        "icono": "bi-clipboard-pulse",
        "servicio": "Consultas",
        "descripcion": "Contamos con una amplia gama de profesionales en diversas especialidades dispuestos a atender todas sus consultas",
        "activo": true
    },
    {
        "icono": "bi bi-hospital",
        "servicio": "Urgencias",
        "descripcion": "Contamos con servicio de urgencia las 24 horas del día y de lunes a domingo dispuestos a ayudarte ante cualquier necesidad",
        "activo": true
    },
    {
        "icono": "bi bi-lungs",
        "servicio": "Especialidades",
        "descripcion": "Contamos con múltiples especialidades y profesionales de excelencia, que lo atenderan de acuerdo a la área que usted necesita",
        "activo": true
    },
    {
        "icono": "bi bi-prescription",
        "servicio": "Radiologia",
        "descripcion": "Contamos con una seccion de radiologia, con los equipos mas avanzados de mercado y profesionales de alta calidad que los guiaran en el proceso",
        "activo": false
    }
]


//OBJETOS ORIGINALES
console.log(doctores)
console.log(servicios)

//LISTAR DOCTORES
function listarDoctores() {
    for (let i = 0; i < doctores.length; i++) {
        const card_doctor = `
                <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="card__img" src="${doctores[i].imagen}" width="100%" height="200">
                            <div class="card-body">
                                <h3 class="card__title">${doctores[i].nombre}</h3>
                                <h4 class="card__subtitle">${doctores[i].especialidad}</h4>
                                <p class="card__texto text-body-secondary"> ${doctores[i].descripcion} </p>
                                <div class="btn-group">
                                    <button class="card__button btn btn-primary btn-sm active" type="button">Reservar
                                        cita<i class="button__icon bi bi-clipboard"></i></button>
                                    <button class="card__button btn btn-primary btn-sm" type="button">Conoce más<i
                                            class="button__icon bi bi-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                        </div>
                         </div>
            `
        const container = document.getElementById("cards_doctores");
        container.innerHTML += card_doctor;
    }
}


//DESTRUCTURING
let doctor = {
    "imagen": "assets/img/dr_zapata.jpg",
    "nombre": " Dr. Felipe Zapata",
    "especialidad": "Medicina general",
    "descripcion": "Con años de experiencia, nuestro doctor Fernando Garrido se especializa en la medicina general y en el tratamiento de enfermedades comunes",
    "experiencia": 10,
    "disponibilidad": ["lunes", "martes"],
    "contacto": {
        "email": "fzapata@clinicachillan.cl",
        "telefono": "+56965782645"
    }
}

let { imagen, nombre, especialidad, descripcion, experiencia, disponibilidad, contacto } = doctor;

console.log("información doctor Zapata:");
console.log(imagen);
console.log(nombre);
console.log(especialidad);
console.log(descripcion);
console.log("años de experiencia: " + experiencia);
console.log(disponibilidad);
console.log(contacto);

//CLONACION
let clonacion = JSON.parse(JSON.stringify(doctores));
console.log("Objeto clonado:");
console.log(clonacion);

//MERGE
let fusion = [...doctores, ...servicios];
console.log("Objeto fusionado:");
console.log(fusion);

//STRINGIFY
cadenaDoctores = JSON.stringify(doctores);
console.log("Cadena:")
console.log(cadenaDoctores)



//algoritmos

//ALGORITMO DE BUSQUEDA
function buscarDoctor(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nombre === x) return 'medico encontrado'
    }
    return 'medico no encontrado'
}

console.log("Al buscar a Ana Fuentes: " + buscarDoctor(doctores, "Ana Fuentes"))
console.log("Al buscar a Ana Zapata: " + buscarDoctor(doctores, "Ana Zapata"))

//ALGORITMO DE ORDENAMIENTO
function ordenarPorExperiencia(arr) {
    if (arr.length < 2) return arr;
    let minimo;
    let index;

    for (let i = 0; i < arr.length; i++) {
        minimo = arr[i].experiencia
        for (let j = i + 1; j < arr.length; j++) {
            if (minimo > arr[j].experiencia) {
                minimo = arr[j].experiencia;
                index = j;
            }
        }
        if (index) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
            index = undefined;
        }
    }
    return arr;
}
console.log("Arreglo ordenado por años de experiencia:")
console.log(ordenarPorExperiencia(doctores));

//LLAMANDO A LA FUNCION QUE LISTA LOS DOCTORES DE FORMA DINAMICA
listarDoctores();