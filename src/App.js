import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./component/Analytics";
import Memes from "./component/Memes";
import News from "./component/News";
import Example from "./component/sandbox.tsx";
import Search from "./component/Search";
// import Pie from "./component/pie";

function App() {
	const [queryGiven, setQueryGiven] = useState(null);

	return (
		<div id="app">
			<Search setQueryGiven={setQueryGiven} />
			{queryGiven !== null && (
				<>
					<Analytics />
					<News query={queryGiven} />
					<Memes query={queryGiven} />
				</>
			)}
			{/* <Pie /> */}
			{/* <Example /> */}
			<ToastContainer />
		</div>
	);
}

export default App;
