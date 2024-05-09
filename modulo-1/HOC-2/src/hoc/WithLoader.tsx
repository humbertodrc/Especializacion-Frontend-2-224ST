/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, useEffect, useState } from "react"
import Spinner from "../components/spinner/Spinner"

export const WithLoader = <T extends object>(Component: ComponentType<T>, fetchApi: (url: string) => Promise<any>, url: string) => {

  const LoaderComponet = (props: T) => {
    const [data, setData] = useState(null)

    useEffect(() => {
      fetchApi(url).then((data) => setData(data))
    }, [])

    if (!data) return <Spinner />
    // if (!data) return <p>Cargando ......</p>

    return <Component {...props} data={data} />
  }
  
  return LoaderComponet;

}