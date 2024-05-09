# Higher Order Components HOC React

## ¿Qué son los Higher Order Components?

Los Higher Order Components (HOC) son una técnica de React que nos permite reutilizar lógica entre componentes. Nos permiten crear componentes que contienen lógica compartida y que pueden ser utilizados en cualquier componente.

## ¿Cómo funcionan?

Los Higher Order Components funcionan a través de una función que recibe un componente y retorna un nuevo componente con la lógica compartida. Esta función puede recibir parámetros que permiten personalizar el comportamiento del componente.

## ¿Cómo los implementamos?

Para implementar los Higher Order Components, necesitamos seguir los siguientes pasos:

1. Crear una función que reciba un componente y retorne un nuevo componente con la lógica compartida

2. Utilizar la función creada para envolver el componente que queremos mejorar

3. Personalizar el comportamiento del componente utilizando los parámetros de la función

4. Utilizar el componente mejorado en cualquier componente

## Ejercicio

Utilizando la técnica de Higher Order Components, nos piden crear un HOC `WithtColorSwap` que reciba un componente y le agregue un contenedor con una clase `color-swap` que cambie de color cada vez que se renderiza el componente.

Para ello, necesitamos seguir los siguientes pasos:

1. Crear una función `WithColorSwap` que reciba un componente y retorne un nuevo componente con la lógica compartida

2. Agregar un contenedor con una clase `color-swap` al componente retornado

3. Crear la interfaz del componente retornado

4. Utilizar el componente mejorado en cualquier componente
