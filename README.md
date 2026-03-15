# Calculadora de IMC con Angular

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web utilizando Angular que permite calcular el Índice de Masa Corporal (IMC) de un usuario.

La aplicación solicita al usuario los siguientes datos:

- Nombre
- Sexo
- Peso
- Altura

A partir de estos datos se calcula el IMC utilizando la fórmula correspondiente y se muestra un mensaje indicando si el usuario se encuentra por debajo de su peso ideal, dentro de su peso ideal o por encima.

Además, la aplicación guarda un historial con todos los cálculos realizados durante la sesión.

---

# Tecnologías utilizadas

El proyecto ha sido desarrollado utilizando:

- Angular
- TypeScript
- HTML
- CSS

---

# Estructura del proyecto

La aplicación está organizada en varios componentes:

## App Component

Es el componente principal de la aplicación.  
Se encarga de almacenar el historial de resultados y de conectar los diferentes componentes.

## ImcForm Component

Contiene el formulario donde el usuario introduce sus datos y calcula el IMC.

Funcionalidades:

- Introducir el nombre del usuario
- Seleccionar el sexo
- Ajustar peso y altura mediante botones
- Calcular el IMC
- Limpiar el formulario

## Historial Component

Este componente muestra el historial de cálculos realizados durante la sesión.

Los resultados se muestran utilizando una lista generada dinámicamente.

---

# Funcionalidades implementadas

La aplicación permite:

- Introducir el nombre del usuario
- Seleccionar el sexo mediante botones radio
- Ajustar el peso mediante botones de incremento y decremento
- Ajustar la altura mediante botones de incremento y decremento
- Calcular el IMC
- Mostrar un mensaje personalizado según el resultado
- Guardar todos los cálculos realizados en un historial
- Limpiar el formulario con el botón "Borrar"

---

# Fórmula utilizada para el cálculo del IMC

El Índice de Masa Corporal se calcula mediante la fórmula:

IMC = peso / (altura en metros²)

Donde:

- El peso se introduce en kilogramos
- La altura se introduce en centímetros y se convierte a metros para realizar el cálculo

---

# Características de Angular utilizadas

## Componentes

La aplicación se divide en varios componentes para mantener una estructura modular:

- App Component
- ImcForm Component
- Historial Component

---

## Directivas de Angular

### *ngIf

Se utiliza para mostrar el resultado del IMC únicamente cuando se ha realizado el cálculo.

Ejemplo:

```html
<div *ngIf="imc > 0">
