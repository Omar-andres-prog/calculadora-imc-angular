import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Permite enviar eventos al componente padre
import { Output, EventEmitter } from '@angular/core';

// Importamos la interfaz del resultado
import { ResultadoIMC } from '../../models/resultado-imc';




@Component({
  selector: 'app-imc-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './imc-form.html',
  styleUrl: './imc-form.css'
})
export class ImcForm {

  // Nombre del usuario introducido en el formulario
  nombre: string = '';

  // Sexo seleccionado (por defecto hombre)
  sexo: string = 'hombre';

  // Peso inicial del usuario en kilogramos
  peso: number = 70;

  // Altura inicial del usuario en centímetros
  altura: number = 170;

  // Evento que enviará el resultado al componente principal
@Output() nuevoResultado = new EventEmitter<ResultadoIMC>();



  // Método para aumentar el peso
  aumentarPeso(): void {
    this.peso++;
  }

  // Método para disminuir el peso
  disminuirPeso(): void {
    // Evitamos valores negativos
    if (this.peso > 1) {
      this.peso--;
    }
  }

  // Método para aumentar la altura
  aumentarAltura(): void {
    this.altura++;
  }

  // Método para disminuir la altura
  disminuirAltura(): void {
    if (this.altura > 1) {
      this.altura--;
    }
  }

    // Resultado del cálculo del IMC
  imc: number = 0;

  // Mensaje que se mostrará al usuario
  mensaje: string = '';

    // Método que calcula el IMC del usuario
  calcularIMC(): void {

    // Convertimos la altura de centímetros a metros
    const alturaMetros: number = this.altura / 100;

    // Fórmula del IMC
    this.imc = this.peso / (alturaMetros * alturaMetros);

    // Determinamos el mensaje según el resultado
    if (this.imc < 18.5) {
      this.mensaje = 'Estás por debajo de tu peso ideal';
    } 
    else if (this.imc >= 18.5 && this.imc < 25) {
      this.mensaje = 'Estás en tu peso ideal';
    } 
    else {
      this.mensaje = 'Estás por encima de tu peso ideal';
    }

    // Creamos el objeto con los datos del cálculo
const resultado: ResultadoIMC = {
  nombre: this.nombre,
  sexo: this.sexo,
  peso: this.peso,
  altura: this.altura,
  imc: this.imc,
  mensaje: this.mensaje
};

// Enviamos el resultado al componente padre
this.nuevoResultado.emit(resultado);





  }

  // Método que limpia todos los campos del formulario
borrarFormulario(): void {

  // Reiniciamos los valores del formulario
  this.nombre = '';
  this.sexo = 'hombre';
  this.peso = 70;
  this.altura = 170;

  // Reiniciamos el resultado del IMC
  this.imc = 0;
  this.mensaje = '';

}




}
