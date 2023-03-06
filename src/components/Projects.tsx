import workout from "../assets/WorkoutBuildr.webp";
import "../styles/projects.css";

function Projects() {
	return (
		<section>
			<h1>My Projects</h1>
			<div className="projectContainer">
				<div className="project">
					<a href="https://workoutbuildr.netlify.app/" target="_blank">
						<img src={workout} alt="Workout Builder website" />
						<div className="projectDescription">
							<h3>Workout Buildr</h3>
							<p>Website</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Projects;
