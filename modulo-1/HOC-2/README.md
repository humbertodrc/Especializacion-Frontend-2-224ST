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

Utilizando la técnica de Higher Order Components, nos piden crear un HOC `WithLoader` que reciba un componente, una función `fetchDataFromApi`  y una url, si no hay datos muestre un componente `Spinner` y si hay datos muestre el componente que recibe por parámetro.

Para ello, necesitamos seguir los siguientes pasos:

1. Crear una función `WhitLoader` que reciba un componente, una función `fetchDataFromApi` y una url y retorne un nuevo componente con la lógica compartida

2. Crear una función `fetchDataFromApi` que reciba una url y retorne los datos de la api

3. Utilizar la función `fetchDataFromApi` para obtener los datos de la api

4. Crear un componente `Spinner` que muestre un spinner mientras se cargan los datos

5. Utilizar el componente mejorado en cualquier componente
