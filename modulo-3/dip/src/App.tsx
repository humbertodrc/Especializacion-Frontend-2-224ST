import "./App.css";
import ConnetedLoginForm from "./components/ConnetedLoginForm";
import {LoginForm} from "./components/LoginForm";

function App() {
	return (
		<div className="App">
			{/* <LoginForm /> */}
			<ConnetedLoginForm />
		</div>
	);
}

export default App;
