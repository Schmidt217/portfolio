import "./styles/App.css";
import "./styles/index.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import MyWorks from "./components/MyWorks";

function App() {
	return (
		<div>
			<Home />
			<Experience />
			<MyWorks />
		</div>
	);
}

export default App;
