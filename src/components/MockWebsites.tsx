import alpine from "../assets/alpine-4x4.webp";
import bankist from "../assets/bankist.webp";
import game from "../assets/game.webp";
import "../styles/mockWebsites.css";

function MockWebsites() {
	return (
		<section>
			<h1>Mock Websites</h1>
			<div className="worksContainer">
				<div className="pages">
					<h4>Alpine 4x4</h4>
					<a href="https://alpine4x4.netlify.app/" target="_blank">
						<img
							src={alpine}
							style={{ height: 200, width: 300 }}
							alt="Alpine 4x4"
						/>
						<div className="overview">
							<p>
								Alpine 4x4 is a mock website I created using Bootstrap. It is a
								made up off road shop that shows responsive functionality.
							</p>

							<small>Click to view Alpine 4x4!</small>
						</div>
					</a>
				</div>
				<div className="pages">
					<h4>Bankist</h4>
					<a href="https://ms-bankist.netlify.app/" target="_blank">
						<img
							src={bankist}
							style={{ height: 200, width: 300 }}
							alt="Bankist App"
						/>
						<div className="overview">
							<p>
								Bankist is a mock website for a fictional minimalist bank. It
								was created through a Udemy course called "The Complete
								JavaScript Course" by Jonas Schmedtmann. Jonas mentioned we
								could use the projects we work on together in our Portfolios,
								but this website was not responsive when it was finished through
								the course. I took it upon myself to make it responsive and
								cleaned up the way it looks.
							</p>
							<small>Click to go to the Bankist App!</small>
						</div>
					</a>
				</div>
				<div className="pages">
					<h4>Rock, Paper, Scissors, Lizard, Spock</h4>
					<a href="https://ms-bbt-game.netlify.app/" target="_blank">
						<img
							src={game}
							style={{ height: 200, width: 300 }}
							alt="Rock, Paper, Scissors, Lizard, Spock"
						/>
						<div className="overview">
							<p>
								This is a game I created through the idea from Frontend Mentor.
								That website gave you a general idea of how something should
								loook but did not guide you on what to do, forcing you to make
								the game how you want. This was a fun and challenging game to
								complete.
							</p>
							<small>Click to go to the game!</small>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default MockWebsites;
