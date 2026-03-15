import { Component, signal } from '@angular/core';
import { ImcForm } from './components/imc-form/imc-form';
import { Historial } from './components/historial/historial';
import { ResultadoIMC } from './models/resultado-imc';



@Component({
  selector: 'app-root',
  imports: [ImcForm, Historial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('calculadora-imc');

  // Lista donde se guardarán todos los cálculos realizados
historial: ResultadoIMC[] = [];

// Método que recibe un nuevo resultado desde el formulario
agregarResultado(resultado: ResultadoIMC): void {
  this.historial.push(resultado);
}

}
