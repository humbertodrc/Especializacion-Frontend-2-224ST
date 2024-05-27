import "./App.css";
import {VideoList} from "./components/VideoList";
import {liveStream, videoThumbnail} from "./data/data";

function App() {
	return (
		<div className="App">
			<h1>Principio de segregación de interfaz (ISP)</h1>
			<VideoList items={videoThumbnail} />
			<VideoList items={liveStream} />
		</div>
	);
}

export default App;
