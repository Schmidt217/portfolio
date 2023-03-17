import computer from "../assets/computer.webp";
import reactImage from "../assets/react.svg";
import mobile from "../assets/mobileDev.webp";
import ReactNative from "../assets/react-native-1.svg";
import Swift from "../assets/swift.svg";
import Firebase from "../assets/firebase.svg";
import HTML from "../assets/html5.svg";
import CSS from "../assets/css3.svg";
import JS from "../assets/javascript.svg";
import Node from "../assets/node.svg";
import iOS from "../assets/iOS.svg";
import android from "../assets/android.svg";
import "../styles/experience.css";

function Experience() {
	return (
		<section id="experience">
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
						Experienced in functional programing and Object Oriented
						Programming. JavaScript, TypeScripty, Swift.
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
						Development experience in HTML, CSS, JavaScript, as well as
						frameworks like React and NextJS
					</p>
				</div>
				<div className="box">
					<div className="box-header">
						<img
							className="experience-image"
							src={mobile}
							alt="Mobile Developer"
						/>
						<h2>
							Mobile Dev <br /> Android, iOS
						</h2>
					</div>
					<p>
						Experienced in creating cross-platform mobile app using React
						Native, as well as native code such as Swift, and some experience in
						Java and Kotlin
					</p>
				</div>
			</div>
			<div className="icons">
				<img src={ReactNative} alt="React Native" />
				<img src={Swift} alt="Swift" />
				<img src={android} alt="android" />
				<img src={iOS} alt="iOS" />
				<img src={reactImage} alt="ReactJS" />
				<img src={JS} alt="JavaScript" />
				<img src={Firebase} alt="Firebase" />
				<img src={HTML} alt="HTML 5" />
				<img src={CSS} alt="CSS 3" />
				<img src={Node} alt="Node.JS" />
			</div>
		</section>
	);
}

export default Experience;
