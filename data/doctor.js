//IMPLEMENTACION DE CLASE DOCTOR
class Doctor {
  constructor(nombre, especialidad, experiencia, n_pacientes) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this._años_experiencia = experiencia;
    this.n_pacientes = n_pacientes;
  }

   //ENCAPSULAMIENTO DE AÑOS DE EXPERIENCIA MEDIANTE SETTER Y GETTER 
   get años_experiencia() {
    return this.experiencia;
  }

  set años_experiencia(value) {
    this.experiencia = value;
  }

  //METODO QUE MUESTRA LA INFORMACIÓN DE CADA DOCTOR
  informacionDoctor() {
    return console.log("Nombre dr.: " + this.nombre + ", Especialidad: " + this.especialidad + ", Años de experiencia: " + this.años_experiencia + " Pacientes atendidos: " + this.n_pacientes)
  }

  //METODO QUE MUESTRA EL TOTAL DE PACIENTES ATENDIDO POR EL DOCTOR
  pacientesAtendidos() {
    if (this.n_pacientes > 0) {
      return console.log(" El dr.: " + this.nombre + "ha atendido a: " + this.n_pacientes)
    } else {
      return console.log(" El dr.: " + this.nombre + "no cuenta con pacientes registrados")
    }
  }

}


//SUBCLASE 
class Cirujano extends Doctor {
  constructor(nombre, especialidad, experiencia, n_operaciones) {
    super(nombre, especialidad, experiencia);
    this.n_operaciones = n_operaciones;
  }


  //POLIMORFISMO PARA CALCULAR NUMERO DE OPERACIONES 
  pacientesAtendidos() {
    if (this.n_operaciones > 0) {
      return console.log(" El Cirugano: " + this.nombre + "ha realizado: " + this.n_operaciones + " cirugias")
    } else {
      return console.log(" El Cirugano.: " + this.nombre + "no cuenta con cirugias registradas")
    }
  }
}
const doctor1 = new Doctor("Juan Ramirez", "Medicina general", 10, 45)
doctor1.informacionDoctor()