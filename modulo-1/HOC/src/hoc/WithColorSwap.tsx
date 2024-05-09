import { ComponentType } from "react"

export const WithColorSwap = <T extends object>(Component: ComponentType<T>) => {

  return (props: T) => {

    // Podemos tener algo de lógica aquí

    return (
      <div className="color-swap">
        <Component {...props} />
      </div>
    )
  }
}