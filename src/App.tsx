import "./styles/App.css";
import "./styles/index.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import WorkHistory from "./components/WorkHistory";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="main-container">
			<NavBar />
			<Home />
			<Experience />
			<Projects />
			<WorkHistory />
			<ContactForm />
		</div>
	);
}

export default App;
