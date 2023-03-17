import { useState } from "react";
import nomiso from "../assets/nomiso.jpeg";
import bandit from "../assets/bandit.png";
import www from "../assets/website.png";
import "../styles/workHistory.css";

interface Job {
	company: String;
	date: String;
	jobDescription: String;
	companyLogo: string;
	companyWebsite: string;
}

function JobTile({
	company,
	date,
	jobDescription,
	companyLogo,
	companyWebsite,
}: Job) {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={`job-container ${expanded ? "expanded" : ""}`}>
			<div className="job-header" onClick={toggleExpanded}>
				<h3>{company}</h3>
				<span>
					<span className="date">{date}</span>
					{expanded ? "-" : "+"}
				</span>
			</div>

			<div className="job-content">
				<div className="company-website">
					<a href={companyWebsite} target="_blank">
						<img src={www} alt="website" className="web-img" />
						{companyWebsite.replace("https://", "")}
					</a>
				</div>
				<div className="job-description">
					<p>{jobDescription}</p>
				</div>
				<div className="company-logo-container">
					<img className="company-logo" src={companyLogo} alt="Company logo" />
				</div>
			</div>
		</div>
	);
}

const WorkHistory = () => {
	const jobs = [
		{
			company: "Software Engineer - Dish Network",
			date: "2022 - Present",
			jobDescription:
				"Developing the mobile application Dish Anywhere in React Native, Swift, Java, and Kotlin. The application is available on Android and iOS devices, as well as Android TV and Amazon's Fire TV.",
			companyLogo:
				"https://upload.wikimedia.org/wikipedia/en/a/a8/Original_Dish_Network_logo.svg",
			companyWebsite: "https://dish.com",
		},
		{
			company: "Software Engineer - Nomiso",
			date: "2022",
			jobDescription:
				"Contract position with Dish Network, working on the Dish Anywhere mobile application.",
			companyLogo: nomiso,
			companyWebsite: "https://nomiso.io",
		},
		{
			company: "Web Developer - Bandit SVC",
			date: "2021 - Present",
			jobDescription: `Collaborated the development of this website for a startup company using the React framework.`,
			companyLogo: bandit,
			companyWebsite: "https://banditsvc.com",
		},
	];
	return (
		<section id="work-history">
			<h1>Professional Experience</h1>
			<div className="job-list">
				{jobs.map((job, index) => (
					<JobTile
						key={index}
						company={job.company}
						date={job.date}
						jobDescription={job.jobDescription}
						companyLogo={job.companyLogo}
						companyWebsite={job.companyWebsite}
					/>
				))}
			</div>
		</section>
	);
};

export default WorkHistory;
