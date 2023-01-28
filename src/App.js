import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./component/Analytics";
import Memes from "./component/Memes";
import News from "./component/News";
import Search from "./component/Search";

function App() {
	const [queryGiven, setQueryGiven] = useState(false);

	useEffect(() => {
		console.log(queryGiven);
	}, [queryGiven]);

	return (
		<div id="app">
			<Search setQueryGiven={setQueryGiven} />
			{queryGiven ?? (
				<>
					<Analytics />
					<News />
					<Memes />
				</>
			)}
			<ToastContainer theme="dark" />
		</div>
	);
}

export default App;
