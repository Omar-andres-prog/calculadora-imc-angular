import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoIMC } from '../../models/resultado-imc';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {

  // Recibe el historial de resultados desde el componente principal
  @Input() resultados: ResultadoIMC[] = [];

}
