import { useState } from "react";
import nomiso from "../assets/nomiso.jpeg";
import bandit from "../assets/bandit.png";
import dish from "../assets/Dish_Network.png";
import www from "../assets/website.png";
import "../styles/workHistory.css";

interface Job {
	company: string;
	date: string;
	jobDescription: string;
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
			<div
				className="job-header"
				onClick={toggleExpanded}
				role="button"
				tabIndex={0}
			>
				<h3>{company}</h3>
				<span>
					<span className="date">{date}</span>
					<span aria-label={expanded ? "Collapse" : "Expand"}>
						{expanded ? " −" : " +"}
					</span>
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
				"Developed and maintained features for the Dish Anywhere mobile application using React Native, including in-app notifications and a March Madness bracket feature. Collaborated on Sling TV's Sling Rewards feature across TV devices and mobile platforms, enhancing user engagement and retention.",
			companyLogo: dish,
			companyWebsite: "https://dish.com",
		},
		{
			company: "Software Engineer - Nomiso",
			date: "2022",
			jobDescription:
				"Contracted through Nomiso to work on Dish Network's mobile applications, contributing to cross-platform development and feature implementation using React Native.",
			companyLogo: nomiso,
			companyWebsite: "https://nomiso.io",
		},
		{
			company: "Web Developer - Bandit SVC",
			date: "2021 - 2022",
			jobDescription:
				"Led frontend development for a startup's web platform using React, implementing responsive design and modern JavaScript practices to create an engaging user experience.",
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
