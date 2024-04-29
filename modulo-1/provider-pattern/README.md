# Provider Pattern React

## ¿Qué es el Provider Pattern?

El Provider Pattern es un patrón de diseño que nos permite pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente a través de cada componente.

## ¿Cómo funciona?

El Provider Pattern funciona a través de dos componentes principales: el `Provider` y el `Consumer`. El `Provider` es un componente que envuelve a todos los componentes que necesitan acceder a los datos que se están pasando. El `Consumer` es un componente que se encarga de consumir los datos que el `Provider` le está pasando.

## ¿Cómo lo implementamos?

Para implementar el Provider Pattern, necesitamos seguir los siguientes pasos:

1. Crear un contexto
2. Crear un Provider
3. Crear un Consumer
4. Envolver los componentes que necesitan acceder a los datos con el Provider
5. Consumir los datos en los componentes que necesitan acceder a ellos

## Ejercicio

Para el ejercicio de la clase, se nos pide crear un cambio de Theme en la aplicación utilizando el Provider Pattern la aplicacion usa Tailwind CSS para los estilos. Para ello, necesitamos seguir los siguientes pasos:

1. Crear un contexto para el Theme
2. Crear un Provider para el Theme
3. Agregar el provider en el componente principal de la aplicación
4. Condicionar los estilos de la aplicación según el Theme seleccionado
5. En el Navbar, agregar un botón para cambiar el Theme
6. Deben cambiar los estilos de App, Navbar y ProductItem
7. Opcional se puede utilizar clsx para cambiar los estilos de los componentes
