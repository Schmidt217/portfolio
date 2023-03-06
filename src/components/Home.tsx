import "../styles/home.css";

function Home() {
	return (
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
				<a href="https://twitter.com/Schmidty217" target="_blank">
					<i className="fab fa-twitter-square"></i>
				</a>
				<a href="https://github.com/Schmidt217" target="_blank">
					<i className="fab fa-github-square"></i>
				</a>
			</div>
		</div>
	);
}

export default Home;
