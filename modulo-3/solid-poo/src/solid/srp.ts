import { nombre } from '../../../../modulo-2/buenas-practicas/src/ejercicios/nombres';

// Principio de Responsabilidad Única (SRP - Single Responsibility Principle):
// Este principio establece que una clase debe tener una única razón para cambiar. Debe tener una sola responsabilidad.

// Mal ejemplo: Violando el SRP
class Usuario {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public guardarUsuario(usuario: Usuario) {
    // Lógica para guardar el usuario en la base de datos
    console.log('Guardando usuario en la base de datos', usuario);
  }
}

// Correcto ejemplo: Cumpliendo el SRP
class Usuario2{
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre() {
    console.log('El nombre es:', this.nombre);
  }
}

class UsuarioRepository {
  public guardarUsuario(usuario: Usuario2) {
    // Lógica para guardar el usuario en la base de datos
    console.log('Guardando usuario en la base de datos', usuario);
  }
}

const usuario = new Usuario2(nombre);
usuario.getNombre(); // El nombre es: Jhon
const usuarioRepository = new UsuarioRepository();
usuarioRepository.guardarUsuario(usuario); // Guardando usuario en la base de datos Usuario2 { nombre: 'Jhon' }


