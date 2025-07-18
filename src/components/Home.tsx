import "../styles/home.css";

function Home() {
	return (
		<section id="home">
			<div className="home-container">
				<h1>Mike Schmidt</h1>
				<p>
					Full-stack software engineer specializing in mobile and web
					applications, with expertise spanning React Native, iOS, Android,
					C#/.NET, and modern web technologies.
				</p>
				<div className="social-media">
					<a
						href="https://www.linkedin.com/in/michael-schmidt217/"
						target="_blank"
					>
						<i className="fab fa-linkedin"></i>
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
