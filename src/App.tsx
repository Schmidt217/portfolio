import "./styles/App.css";
import "./styles/index.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import MockWebsites from "./components/MockWebsites";
import Projects from "./components/Projects";

function App() {
	return (
		<div>
			<Home />
			<Experience />
			<Projects />
			<MockWebsites />
		</div>
	);
}

export default App;
