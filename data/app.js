//funciones tarea 2 
let serviciosMedicos = [
    {
        icono: 'bi-clipboard-pulse',
        servicio: 'Consultas',
        descripcion: 'Contamos con una amplia gama de profesionales en diversas especialidades dispuestos a atender todas sus consultas',
        activo: true,
    },
    {
        icono: 'bi bi-hospital',
        servicio: 'Urgencias',
        descripcion: 'Contamos con servicio de urgencia las 24 horas del día y de lunes a domingo dispuestos a ayudarte ante cualquier necesidad',
        activo: true,
    },
    {
        icono: 'bi bi-lungs',
        servicio: 'Especialidades',
        descripcion: 'Contamos con múltiples especialidades y profesionales de excelencia, que lo atenderan de acuerdo a la área que usted necesita',
        activo: true,
    },
    {
        icono: 'bi bi-prescription',
        servicio: 'Radiologia',
        descripcion: 'Contamos con una seccion de radiologia, con los equipos mas avanzados de mercado y profesionales de alta calidad que los guiaran en el proceso',
        activo: false,
    },
]

function Reservar() {
    const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regexTelefono = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

    do {
        var name = prompt("Ingresa tu nombre", "Nombre");
        console.log(name);
        if (name === '' || name === 'Nombre' || name ===null) {
            alert("Debes ingresar tu nombre");
        } else {
            alert("Bienvenid@: " + name);
        }
    } while (name === '' || name === 'Nombre' || name === null)

    do {
        var telefono = prompt("Ingresa tu teléfono de contacto", "Teléfono");
        console.log(telefono);
        if (telefono === '' || telefono === 'Teléfono') {
            alert("Debes ingresar tu telefono de contacto");
        } else {
            try {
                if (regexTelefono.test(telefono)) throw "El telefono ingresado:" + telefono + " es valido";
                if (!regexTelefono.test(telefono)) throw "El telefono ingresado: " + telefono + " es invalido";
            } catch (error) {
                alert(error);
            }
        }
    } while (telefono === '' || telefono === 'Nombre' || !regexTelefono.test(telefono))

    do {
        var correo = prompt("Ingresa tu correo", "Correo");
        console.log(correo);
        if (correo === '' || correo === 'Correo') {
            alert("Debes ingresar tu correo");
        } else if (!regexCorreo.test(correo)) {
            alert("El correo ingresado es invalido");
        } else {
            alert("Tu correo ingresado es: " + correo);
        }
    } while (correo === '' || correo === 'Correo' || !regexCorreo.test(correo))
  
    alert("gracias por ingresar todos los datos solicitados, te contactaremos para agendar una cita a la brevedad")
}

function listarServiciosMedicos() {
    const containerTitulo = document.getElementById("title_service").innerHTML = "Nuestros Servicios"
    for (let i = 0; i < serviciosMedicos.length; i++) {
        if (serviciosMedicos[i].activo === true) {
            const card = `
                <div class="col">
                    <div class="card p-4 border-0">
                        <i class="card__icon ${serviciosMedicos[i].icono} title="icono consultas"></i>
                        <h3 class="card__title" id="tituloServicio">${serviciosMedicos[i].servicio}</h3>
                        <p class="card__text text-body-secondary" id="descripcionServicio">${serviciosMedicos[i].descripcion}</p>
                        <button class="card__button btn btn-primary" type="button">Conoce más
                            <i class="button__icon bi bi-chevron-right"></i></button>
                    </div>
                </div>
            `
        const container = document.getElementById("cards_Service");
        container.innerHTML += card;
        }
    }
}


