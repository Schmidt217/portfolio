import computer from "../assets/computer.webp";
import reactImage from "../assets/react.svg";
import mobile from "../assets/mobileDev.webp";
import "../styles/experience.css";

function Experience() {
	return (
		<>
			<h1>My Experience</h1>
			<div className="box-container">
				<div className="box">
					<div className="box-header">
						<img
							className="experience-image"
							src={computer}
							alt="Software Engineer"
						/>
						<h2>Software Engineer</h2>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
						nostrum earum dolores ut adipisci praesentium iste totam ratione
						suscipit ad.
					</p>
				</div>
				<div className="box">
					<div className="box-header">
						<img
							className="experience-image"
							src={reactImage}
							alt="Web Developer"
						/>
						<h2>
							Frontend Dev <br /> React, NextJS{" "}
						</h2>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
						nostrum earum dolores ut adipisci praesentium iste totam ratione
						suscipit ad.
					</p>
				</div>
				<div className="box">
					<div className="box-header">
						<img
							className="experience-image"
							src={mobile}
							alt="Mobile Developer"
						/>
						<h2>Mobile App Dev</h2>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
						nostrum earum dolores ut adipisci praesentium iste totam ratione
						suscipit ad.
					</p>
				</div>
			</div>
		</>
	);
}

export default Experience;
