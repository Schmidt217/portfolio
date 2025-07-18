import workout from "../assets/WorkoutBuildr.webp";
import brewFinder from "../assets/brewFinder.png";
import { Link } from "react-router-dom";
import "../styles/projects.css";

function Projects() {
	return (
		<section id="projects">
			<h1>My Projects</h1>
			<div className="projectContainer">
				<div className="project">
					<Link to="https://workoutbuildr.netlify.app/" target="_blank">
						<div className="img-container">
							<img
								className="project-image workoutBuilderImage"
								src={workout}
								alt="Workout Builder website"
							/>
						</div>
						<div className="projectDescription">
							<h3>Workout Buildr</h3>
							<p>
								A full-stack fitness application built with Next.js and
								Firebase. Features real-time workout tracking, custom exercise
								creation, and progress analytics. Implemented server-side
								rendering for SEO optimization and Firebase Authentication for
								secure user management.
							</p>
							<small>Click to go to website</small>
						</div>
					</Link>
				</div>
				<div className="project">
					<Link to="/brew-finder-app" target="_blank">
						<div className="img-container">
							<img
								className="project-image brewFinderImage"
								src={brewFinder}
								alt="brew finder details"
							/>
						</div>
						<div className="projectDescription">
							<h3>Brew Finder</h3>
							<p>
								Native iOS application developed in SwiftUI that helps users
								discover local breweries. Integrates with mapping APIs for
								location services and implements custom UI components for
								brewery filtering and favorites management.
							</p>
							<small> Click to see details of the app</small>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Projects;
