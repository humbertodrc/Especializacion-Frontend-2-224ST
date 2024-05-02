import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import clsx from "clsx";

export const Navbar = () => {
	const {toggleTtheme, theme} = useContext(ThemeContext);
	return (
		<div
			className={clsx(
				"w-full px-5 py-4 flex justify-between items-center shadow-sm",
				{
					"bg-white": theme === "light",
					"bg-slate-900 border-b border-gray-700": theme === "dark",
				}
			)}
		>
			<h1 className="text-2xl font-bold text-pink-500">Houses</h1>
			<div>
				<button className="bg-pink-500 text-white rounded-md px-4 py-2 ml-4">
					Login
				</button>
				{/* Cambiar de tema */}
				<button
					className="bg-pink-500 text-white rounded-md px-4 py-2 ml-4"
					onClick={toggleTtheme}
				>
					Change Theme
				</button>
			</div>
		</div>
	);
};
