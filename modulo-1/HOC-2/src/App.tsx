import './App.css'
import { Navbar } from './components/Navbar'
// import { ProductList } from './components/ProductList'
import {useContext} from 'react'
import { ThemeContext } from './context/ThemeContext'
import ProductListHOC from "./components/ProductList"

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <Navbar />
      <main className={`p-12 h-screen ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`}>
        <ProductListHOC data={[]} />
      </main>
    </>
  )
}

export default App
