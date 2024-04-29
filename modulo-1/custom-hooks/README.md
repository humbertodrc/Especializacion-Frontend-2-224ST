# Custom Hooks React

## ¿Qué son los Custom Hooks?

Los Custom Hooks son una técnica de React que nos permite compartir lógica entre componentes. Nos permiten extraer lógica de componentes en funciones reutilizables que podemos utilizar en cualquier componente.

## ¿Cómo funcionan?

Los Custom Hooks funcionan a través de una función que nos permite encapsular la lógica que queremos compartir. Esta función puede recibir argumentos y devolver valores que podemos utilizar en cualquier componente.

## ¿Cómo los implementamos?

Para implementar los Custom Hooks, necesitamos seguir los siguientes pasos:

1. Crear una función que contenga la lógica que queremos compartir
2. Utilizar los hooks de React dentro de la función
3. Devolver los valores que queremos utilizar en los componentes
4. Utilizar el Custom Hook en cualquier componente

## Ejercicio

Nos piden crear un custom hook `useToggle` que nos permita cambiar el estado de un booleano para abrir o cerrar un Modal o Sidebar. Para ello, necesitamos seguir los siguientes pasos:

1. Crear un custom hook `useToggle` que devuelva un booleano y dos funciones para abrir y cerrar el Modal o Sidebar
2. Utilizar el custom hook en el componente `App` para abrir y cerrar el Modal o Sidebar
