import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./component/Analytics";
import Memes from "./component/Memes";
import News from "./component/News";
import Search from "./component/Search";

function App() {
	return (
		<div id="app">
			<Search />
			<Analytics />
			<News />
			<Memes />
			<ToastContainer theme="dark"/>
		</div>
	);
}

export default App;
