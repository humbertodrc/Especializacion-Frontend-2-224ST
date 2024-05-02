import "./App.css";
import { Modal, Sidebar } from "./components";
import { useToggle } from "./hook/useToggle";

export default function App() {
	const {
		isOpen: isOpenSidebar,
		open: openSidebar,
		close: closeSidebar,
	} = useToggle();
	const {isOpen: isOpenModal, open: openModal, close: closeModal} = useToggle();

	return (
		<div className="h-screen w-full">
			<div className="container">
				<Sidebar visible={isOpenSidebar} close={closeSidebar} />
				<h1>Custom Hook</h1>
				<div className="button-container">
					<button onClick={openSidebar}>Open sidebar</button>
					<button onClick={openModal}>Open modal</button>
				</div>
				<Modal visible={isOpenModal} close={closeModal} />
			</div>
		</div>
	);
}
