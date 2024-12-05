//LISTERNER QUE CAPTURA ENVIO DEL FORMULARIO 
const contact_form = document.getElementById("form");

contact_form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Su Mensaje ha sido registrado, el personal de la clinica lo contactara a la brevedad");
});

//EVENTO NUEVO PACIENTE

const ingreso = document.getElementById("ingreso");
ingreso.addEventListener("nuevoPaciente", evento => {
  const notificacion = `
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${evento.detail.numeroPacientes}+
</span>
`
  const container = document.getElementById("ingreso");
  container.innerHTML = notificacion;
});

function notificacionPaciente(numeroPacientes) {
  const evento = new CustomEvent("nuevoPaciente", {
    detail: {
      numeroPacientes: numeroPacientes
    }
  })
  ingreso.dispatchEvent(evento)
}

//CONSUMIR API CON ASYNC/AWAIT
const consumirAPI = async () => {
  try {
    const respuesta = await fetch('../doctor.js')
    const data = respuesta.json()
    console.log(data)

  } catch (error) {
    console.log(error);
  }
}
//consumirAPI() -> EJEMPLO DE COMO SE LLAMARIA A LA FUNCION