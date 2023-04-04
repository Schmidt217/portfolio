import "../styles/home.css";

function Home() {
	return (
		<section id="home">
			<div className="home-container">
				<h1>Mike Schmidt</h1>
				<p>
					Software engineer specializing in building front-end mobile and web
					applications.
				</p>
				<div className="social-media">
					<a
						href="https://www.linkedin.com/in/michael-schmidt217/"
						target="_blank"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="https://twitter.com/MobileDev217" target="_blank">
						<i className="fab fa-twitter-square"></i>
					</a>
					<a href="https://github.com/Schmidt217" target="_blank">
						<i className="fab fa-github-square"></i>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Home;
