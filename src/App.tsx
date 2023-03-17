import "./styles/App.css";
import "./styles/index.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import WorkHistory from "./components/WorkHistory";

function App() {
	return (
		<div>
			<Home />
			<Experience />
			<Projects />
			<WorkHistory />
		</div>
	);
}

export default App;
