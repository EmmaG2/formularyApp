import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {

  @ViewChild('miFormulario', { static: true }) miFormulario!: NgForm

  initForm = {
    producto: 'RTX',
    precio: 10,
    existencias: 10
  }

  nombreVaido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    )
  }

  precioValido() {
    return (
      this.miFormulario?.controls['precio']?.value < 100 &&
      this.miFormulario?.controls['precio']?.touched
    )
  }

  guardar() {
    this.miFormulario.resetForm({
      producto: 'No hay nada...',
      precio: 0,
      existencias: 0, // Este es un comentario
    })
  }
}
