import {useContext} from "react";
import "./App.css";
import {Navbar} from "./components/Navbar";
import {ProductList} from "./components/ProductList";
import {ThemeContext} from "./context/ThemeContext";
import clsx from "clsx";

function App() {
	const {theme} = useContext(ThemeContext);

	return (
		<>
			<Navbar />
			<main
				className={clsx("p-12 h-screen", {
					"bg-white": theme === "light",
					"bg-slate-900": theme === "dark",
				})}
      >
				<ProductList />
			</main>
		</>
	);
}

export default App;
