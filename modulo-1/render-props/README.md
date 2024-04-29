# Render Props React

## ¿Qué son los Render Props?

Los Render Props son una técnica de React que nos permite compartir lógica de renderizado entre componentes. En lugar de utilizar un componente como hijo, utilizamos una función que nos permite renderizar el componente.

## ¿Cómo funcionan?

Los Render Props funcionan a través de una prop que recibe un componente. Esta prop es una función que se encarga de renderizar el componente que queremos compartir.

## ¿Cómo los implementamos?

Para implementar los Render Props, necesitamos seguir los siguientes pasos:

1. Crear un componente que reciba una prop que sea una función
2. Dentro de la función, renderizar el componente que queremos compartir
3. En el componente padre, pasar la función como prop al componente hijo

## Ejercicio

Para el ejercicio de la clase, se nos pide crear un componente `Input` que reciba una prop `render` que sea una función. La idea es compartir la lógica de renderizado del input entre diferentes componentes. Para calcular una temperatura en grados Fahrenheit y Kelvin a partir del valor en el input, necesitamos seguir los siguientes pasos:

1. Crear un componente `Input` que reciba una prop `render` que sea una función
2. En el componente `Input`, crear un input que reciba un valor y un onChange
3. En el componente padre, pasar la función como prop al componente `Input`
4. Crear los componentes `Fahrenheit` y `Kelvin` que utilicen el componente `Input` para calcular la temperatura en grados Fahrenheit y Kelvin
5. Mostrar el resultado de la conversión en cada componente
