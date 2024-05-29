import "./App.css";

import logo from "./assets/logo.svg";
import { Button } from "./components/Button";
import {Character} from "./components/Character";
import {Modal} from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
	const {isShowing: isAliveShowed, toggle: toggleAlive} = useModal();
	const {isShowing: isDeadShowed, toggle: toggleDead} = useModal();

	const isActive = true;

	return (
		<div className="App">
			<img src={logo} />
			<div>
				{/* Cambia estilos a JSS */}
				{/* <button onClick={toggleAlive}>
					<p className="ButtonAliveRicks">Rick's vivos</p>
				</button> */}
				<Button
					backGroundColor="#00beab"
					spacing="10px 20px"
					fontSize="16px"
					fontStyle="italic"
					labelColor="#fff"
					fontWeight="bold"
					onClick={toggleAlive}
				>
					<p className="ButtonAliveRicks">Rick's vivos</p>
				</Button>

				{/* Cambia estilos a JSS */}
				{/* <button onClick={toggleDead}>
					<p className="ButtonDeadsRicks">Rick's vivos</p>
				</button> */}
				<Button
					backGroundColor="#ff0000"
					spacing="10px 20px"
					fontSize="16px"
					fontStyle="italic"
					labelColor="#fff"
					fontWeight="bold"
					onClick={toggleDead}
				>
					<p className="ButtonDeadsRicks">Rick's muertos</p>
				</Button>
			</div>

			<Modal isShowing={isAliveShowed} hide={toggleAlive} title="Rick's vivos">
				{/* Cambia estilos a JSS */}
				<Character
					status="alive"
					// borderRadius="30px"
					width="400px"
					height="auto"
					padding="16px"
					textAlign="center"
				/>
			</Modal>

			<Modal isShowing={isDeadShowed} hide={toggleDead} title="Rick's muertos">
				{/* Cambia estilos a JSS */}
				<Character
					status="dead"
					// borderRadius="16px"
					width="400px"
					height="auto"
					padding="16px"
					textAlign="center"
				/>
			</Modal>
		</div>
	);
}

export default App;
