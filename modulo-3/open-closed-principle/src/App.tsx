import {Title} from "./components/Title";
import WithButton from "./components/WithButton/WithButton";
import { WithLink } from "./components/WithLink";

function App() {

  const onCLick = () => {
    console.log("withButton")
  }

	return (
		<div className="App">
			<Title title='Hola Camada 1 🙂❤'>
				<WithButton onClick={onCLick} text="Click me" />
			</Title>

			<Title title='Hola Camada 2 🙂❤'>
				<WithLink href="https://www.digitalhouse.com" text="Digital House" />
			</Title>
		</div>
	);
}

export default App;
