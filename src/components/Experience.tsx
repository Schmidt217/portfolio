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
import cSharp from "../assets/cSharp.svg";
import typescript from "../assets/TypeScript.svg";
import graphQL from "../assets/GraphQL.svg";
import jest from "../assets/Jest.svg";
import "../styles/experience.css";

function Experience() {
	return (
		<section id="experience">
			<h1>My Experience</h1>
			<div className="skills-container">
				<div className="skill-card software-engineer">
					<div className="skill-icon">💻</div>
					<div className="skill-title">
						Software <br /> Engineer
					</div>
					<div className="skill-description">
						Experienced in functional programming and Object Oriented
						Programming. JavaScript, TypeScript, Swift, C#
					</div>
				</div>

				<div className="skill-card frontend">
					<div className="skill-icon">⚛️</div>
					<div className="skill-title">Frontend</div>
					<div className="skill-subtitle">React, NextJS</div>
					<div className="skill-description">
						Development experience in HTML, CSS, JavaScript, as well as
						frameworks like React and NextJS
					</div>
				</div>

				<div className="skill-card mobile">
					<div className="skill-icon">📱</div>
					<div className="skill-title">Mobile</div>
					<div className="skill-subtitle">React Native, Android, iOS</div>
					<div className="skill-description">
						Experienced in creating cross-platform mobile app using React
						Native, as well as native code such as Swift, and some experience in
						Java and Kotlin
					</div>
				</div>

				<div className="skill-card backend">
					<div className="skill-icon">🔧</div>
					<div className="skill-title">Backend</div>
					<div className="skill-subtitle">C#, .NET</div>
					<div className="skill-description">
						Experienced in building robust server-side applications using C# and
						.NET framework, including API development and database integration
					</div>
				</div>
			</div>
			<div className="icons">
				<img src={ReactNative} alt="React Native" />
				<img src={cSharp} alt="C#" />
				<img src={typescript} alt="typescript" />
				<img src={Swift} alt="Swift" />
				<img src={android} alt="android" />
				<img src={iOS} alt="iOS" />
				<img src={reactImage} alt="ReactJS" />
				<img src={jest} alt="Jest" />
				<img src={JS} alt="JavaScript" />
				<img src={graphQL} alt="GraphQL" />
				<img src={Firebase} alt="Firebase" />
				<img src={HTML} alt="HTML 5" />
				<img src={CSS} alt="CSS 3" />
				<img src={Node} alt="Node.JS" />
			</div>
		</section>
	);
}

export default Experience;
