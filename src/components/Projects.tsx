import { useState } from "react";
import { FaGithub, FaPlay, FaTimes, FaMobile, FaRocket } from "react-icons/fa";
import workout from "../assets/WorkoutBuildr.webp";
import brewFinder from "../assets/brewFinder.png";
import reactivities from "../assets/reactivities.webp";
import { Link } from "react-router-dom";
import "../styles/projects.css";

function Projects() {
	const [activeModal, setActiveModal] = useState<string | null>(null);

	const openModal = (videoId: string) => setActiveModal(videoId);
	const closeModal = () => setActiveModal(null);

	const projects = [
		{
			id: "reactivities",
			title: "Reactivities",
			image: reactivities,
			description:
				"A full-stack social media/activities application built with React and .NET. I used React Query for efficient API state management, SignalR for real-time commenting, and SQL Server for data persistence. Features include activity creation, user profiles, and live chat functionality. Deployed on Microsoft Azure with CI/CD pipeline for scalable cloud hosting.",
			githubUrl: "https://github.com/Schmidt217/reactivities",
			youtubeId: "qwIkHl1ma-8",
		},
		{
			id: "workout-builder",
			title: "Workout Buildr",
			image: workout,
			description:
				"A full-stack fitness application built with Next.js and Firebase. Features real-time workout tracking, custom exercise creation, and progress analytics. Implemented server-side rendering for SEO optimization and Firebase Authentication for secure user management.",
			githubUrl: "https://github.com/Schmidt217/workout-builder",
			liveUrl: "https://workoutbuildr.netlify.app/",
		},
		{
			id: "brew-finder",
			title: "Brew Finder",
			image: brewFinder,
			description:
				"Native iOS application developed in SwiftUI that helps users discover local breweries. Integrates with mapping APIs for location services and implements custom UI components for brewery filtering and favorites management.",
			githubUrl: "https://github.com/Schmidt217/brew-finder",
			detailsUrl: "/brew-finder-app",
		},
	];

	return (
		<section id="projects">
			<h1>My Projects</h1>
			<div className="projectContainer">
				{projects.map((project) => (
					<div key={project.id} className="project">
						<div className="img-container">
							<img
								className="project-image"
								src={project.image}
								alt={`${project.title} website`}
							/>
							{project.youtubeId && (
								<div
									className="play-overlay"
									onClick={() => openModal(project.youtubeId)}
								>
									<FaPlay className="play-icon" />
								</div>
							)}
						</div>
						<div className="projectDescription">
							<h3>{project.title}</h3>
							<p>{project.description}</p>

							<div className="project-links">
								{project.githubUrl && (
									<Link
										to={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="github-link"
									>
										<FaGithub /> View Code
									</Link>
								)}

								{/* Demo Video Button - only show if video exists */}
								{project.youtubeId && (
									<button
										onClick={() => openModal(project.youtubeId)}
										className="demo-button"
									>
										<FaPlay /> Watch Demo
									</button>
								)}

								{/* Live Site Link */}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="live-link"
									>
										<FaRocket /> Live Site
									</a>
								)}

								{/* Details Link */}
								{project.detailsUrl && (
									<Link
										to={project.detailsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="details-link"
									>
										<FaMobile /> See Details
									</Link>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			{activeModal && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="close-button" onClick={closeModal}>
							<FaTimes />
						</button>
						<div className="video-container">
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${activeModal}?autoplay=1&rel=0&modestbranding=1&vq=hd1080`}
								title="Reactivities Demo"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default Projects;
