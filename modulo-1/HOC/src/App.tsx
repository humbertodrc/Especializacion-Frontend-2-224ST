import './App.css'
import { Section } from './components/Section'
import { WithColorSwap } from "./hoc/WithColorSwap"

const SectionWithHOC = WithColorSwap(Section)

function App() {

  return (
    <div className="App">
      <SectionWithHOC title='Higher Order Component' description='Conociendo los HOC' />
      <Section title='Higher Order Component' description='Conociendo los HOC' />
    </div>
  )
}

export default App
