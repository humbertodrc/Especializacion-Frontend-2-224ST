# Compound Components React

## ¿Qué son los Compound Components?

Los Compound Components son una técnica de React que nos permite crear componentes que contienen otros componentes. Nos permiten crear componentes que comparten estado y lógica entre ellos.

## ¿Cómo funcionan?

Los Compound Components funcionan a través de un componente padre que contiene varios componentes hijos. Este componente padre se encarga de compartir el estado y la lógica entre los componentes hijos, permitiéndonos crear componentes más complejos y reutilizables.

## ¿Cómo los implementamos?

Para implementar los Compound Components, necesitamos seguir los siguientes pasos:

1. Crear un componente padre que contenga varios componentes hijos

2. Utilizar el estado y la lógica en el componente padre para compartir entre los componentes hijos

3. Utilizar los componentes hijos dentro del componente padre

4. Utilizar los Compound Components en cualquier componente

## Ejercicio

Utilizando la técnica de Compound Components, nos piden crear un componente `Card` que contenga los componentes `Body`, `Title`, `Description`, `Image` y `Status` . Cada uno de estos componentes debe poder recibir props.

Para ello, necesitamos seguir los siguientes pasos:

1. Crear un componente `Card` que contenga los componentes `Body`, `Title`, `Description`, `Image` y `Status`

2. Agregar estos componentes como hijos del componente `Card`

3. Crear la interfaz del componente `Card` y de los componentes hijos

4. Asignar las props necesarias a cada uno de los componentes

5. Mediante la conotaccion de punto agregar los componentes hijos al componente padre
