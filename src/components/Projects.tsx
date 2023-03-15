import MockWebsites from "./MockWebsites";
import workout from "../assets/WorkoutBuildr.webp";
import brewFinder from "../assets/brewFinder.png";
import { Link } from "react-router-dom";
import "../styles/projects.css";

function Projects() {
	return (
		<section>
			<h1>My Projects</h1>
			<div className="projectContainer">
				<div className="project">
					<a href="https://workoutbuildr.netlify.app/" target="_blank">
						<div className="img-container">
							<img
								className="project-image workoutBuilderImage"
								src={workout}
								alt="Workout Builder website"
							/>
						</div>
						<div className="projectDescription">
							<h3>Workout Buildr</h3>
							<p>This website was made using Next.JS and Firebase.</p>
							<small>Click to go to website</small>
						</div>
					</a>
				</div>
				<div className="project">
					<Link to="/brew-finder-app">
						<div className="img-container">
							<img
								className="project-image brewFinderImage"
								src={brewFinder}
								alt="Workout Builder website"
							/>
						</div>
						<div className="projectDescription">
							<h3>Brew Finder</h3>
							<p>iOS App made with SwiftUI</p>
							<small> Click to see details of the app</small>
						</div>
					</Link>
				</div>
			</div>
			<hr />
			<MockWebsites />
		</section>
	);
}

export default Projects;
