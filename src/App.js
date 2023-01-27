import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopCenter from "./component/TopCenter";
import TopLeft from "./component/TopLeft";

function App() {
	return (
		<>
			{/* <TopLeft /> */}
			<TopCenter />
			<ToastContainer theme="dark"/>
		</>
	);
}

export default App;
