// Interfaz que define la estructura de un resultado de IMC
export interface ResultadoIMC {

  // Nombre del usuario
  nombre: string;

  // Sexo del usuario
  sexo: string;

  // Peso utilizado para el cálculo
  peso: number;

  // Altura utilizada para el cálculo
  altura: number;

  // Resultado del IMC
  imc: number;

  // Mensaje asociado al resultado
  mensaje: string;

}
