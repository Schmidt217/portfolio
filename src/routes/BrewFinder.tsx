import React from "react";
import brewDetailsScreen from "../assets/brewFinderPage/BrewDetailScreen.webp";
import mainScreen from "../assets/brewFinderPage/MainScreen.webp";
import searchByName1Letter from "../assets/brewFinderPage/SearchByName-1-letter.webp";
import "../styles/brewFinder.css";

interface TechnicalHighlight {
	title: string;
	description: string;
}

interface CodeExample {
	title: string;
	code: string;
	language: string;
}

const BrewFinderPortfolio: React.FC = () => {
	const technicalHighlights: TechnicalHighlight[] = [
		{
			title: "MVVM Architecture",
			description:
				"Clean separation with @ObservedObject ViewModels for reactive UI updates",
		},
		{
			title: "NavigationStack",
			description: "Modern SwiftUI navigation with programmatic routing",
		},
		{
			title: "Custom Networking Layer",
			description:
				"Dedicated NetworkManager with async/await API calls to OpenBreweryDB",
		},
	];

	const locationFeatures: TechnicalHighlight[] = [
		{
			title: "Custom LocationManager",
			description:
				"CLLocationManager wrapper with delegate pattern implementation",
		},
		{
			title: "Geocoding Integration",
			description:
				"Address-to-coordinate conversion using CLGeocoder for brewery locations",
		},
		{
			title: "Real-time Location Updates",
			description:
				"Dynamic brewery fetching based on user's current GPS coordinates",
		},
	];

	const mappingFeatures: TechnicalHighlight[] = [
		{
			title: "Custom MapKit Integration",
			description: "Native map view with custom SwiftUI-based annotations",
		},
		{
			title: "Address Geocoding",
			description:
				"Automatic coordinate resolution from brewery street addresses",
		},
		{
			title: "Custom Map Markers",
			description: "Branded beer glass icons with brewery information overlays",
		},
	];

	const searchFeatures: TechnicalHighlight[] = [
		{
			title: "Live Search",
			description:
				"Instant brewery filtering with onChange modifier implementation",
		},
		{
			title: "API Optimization",
			description:
				"Space-to-underscore conversion for proper OpenBreweryDB URL encoding",
		},
		{
			title: "Asynchronous Processing",
			description:
				"Task-based API calls preventing UI blocking during network requests",
		},
	];

	const technicalChallenges: TechnicalHighlight[] = [
		{
			title: "Geocoding Pipeline",
			description:
				"Built custom address-to-coordinate conversion system using CLGeocoder",
		},
		{
			title: "Location Permission Flow",
			description:
				"Implemented robust authorization handling with proper delegate patterns",
		},
		{
			title: "Error Handling",
			description:
				"Comprehensive error management for location services and geocoding failures",
		},
		{
			title: "External Integration",
			description: "Seamless handoff to Apple Maps for turn-by-turn navigation",
		},
		{
			title: "Live API Integration",
			description:
				"Real-time brewery search with proper string formatting and encoding",
		},
		{
			title: "Async/Await Pattern",
			description:
				"Modern Swift concurrency for non-blocking OpenBreweryDB API calls",
		},
		{
			title: "Dynamic UI Updates",
			description:
				"Reactive list updates using Combine's @Published properties",
		},
		{
			title: "Custom MapKit Implementation",
			description:
				"Dynamic annotation system with branded icons and 0.01-degree precision",
		},
	];

	const technologies: string[] = [
		"SwiftUI",
		"Core Data",
		"Core Location",
		"MapKit",
		"URLSession",
		"Combine",
		"OpenBreweryDB API",
	];

	const FeatureSection: React.FC<{
		title: string;
		features: TechnicalHighlight[];
	}> = ({ title, features }) => (
		<div
			style={{
				marginBottom: "2rem",
			}}
		>
			<h3
				style={{
					fontSize: "1.75rem",
					fontWeight: "500",
					color: "rgba(255, 255, 255, 0.87)",
					marginBottom: "1rem",
					fontFamily: '"Exo", sans-serif',
				}}
			>
				{title}
			</h3>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: "1rem",
				}}
			>
				{features.map((feature, index) => (
					<div
						key={index}
						style={{
							backgroundColor: "rgba(12, 3, 23, 0.7)",
							padding: "1rem",
							borderRadius: "8px",
							border: "1px solid rgba(184, 126, 17, 0.3)",
							backdropFilter: "blur(10px)",
						}}
					>
						<h4
							style={{
								fontWeight: "500",
								color: "rgba(245, 167, 23, 1)",
								marginBottom: "0.5rem",
								fontFamily: '"Exo", sans-serif',
							}}
						>
							{feature.title}
						</h4>
						<p
							style={{
								fontSize: "0.875rem",
								color: "rgba(255, 255, 255, 0.7)",
							}}
						>
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);

	const CodeBlock: React.FC<{ example: CodeExample }> = ({ example }) => (
		<div style={{ marginBottom: "1.5rem" }}>
			<h5
				style={{
					fontWeight: "500",
					color: "rgba(245, 167, 23, 1)",
					marginBottom: "0.5rem",
					fontFamily: '"Exo", sans-serif',
				}}
			>
				{example.title}
			</h5>
			<pre
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.4)",
					color: "rgba(255, 255, 255, 0.87)",
					padding: "1rem",
					borderRadius: "8px",
					overflowX: "auto",
					fontSize: "0.875rem",
					border: "1px solid rgba(184, 126, 17, 0.3)",
					backdropFilter: "blur(10px)",
				}}
			>
				<code>{example.code}</code>
			</pre>
		</div>
	);

	return (
		<div
			id="brew-finder-page"
			style={{
				backgroundColor: "transparent",
				minHeight: "100vh",
				padding: "2rem 0",
				fontFamily: '"Exo", sans-serif',
			}}
		>
			<div
				className="container"
				style={{ margin: "0 auto", padding: "0 1rem" }}
			>
				{/* Hero Section */}
				<div
					style={{
						textAlign: "center",
						marginBottom: "3rem",
						padding: "2rem",
						background:
							"linear-gradient(135deg, rgba(12, 3, 23, 0.9) 0%, rgba(0, 0, 54, 0.8) 100%)",
						borderRadius: "16px",
						color: "rgba(255, 255, 255, 0.87)",
						border: "1px solid rgba(184, 126, 17, 0.3)",
						boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
					}}
				>
					<h1
						style={{
							fontSize: "2.5rem",
							fontWeight: "500",
							marginBottom: "1rem",
							textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
							fontFamily: '"Exo", sans-serif',
						}}
					>
						🍺 Brew Finder
					</h1>
					<p
						style={{
							fontSize: "1.25rem",
							marginBottom: "1.5rem",
							opacity: "0.9",
						}}
					>
						A native iOS application built with SwiftUI that helps users
						discover local breweries through location-based search and real-time
						filtering.
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap",
						}}
					>
						<span
							style={{
								backgroundColor: "rgba(184, 126, 17, 0.2)",
								padding: "0.5rem 1rem",
								borderRadius: "20px",
								fontSize: "0.875rem",
								border: "1px solid rgba(184, 126, 17, 0.4)",
							}}
						>
							🔗 OpenBreweryDB API
						</span>
						<span
							style={{
								backgroundColor: "rgba(184, 126, 17, 0.2)",
								padding: "0.5rem 1rem",
								borderRadius: "20px",
								fontSize: "0.875rem",
								border: "1px solid rgba(184, 126, 17, 0.4)",
							}}
						>
							📱 Native iOS
						</span>
						<span
							style={{
								backgroundColor: "rgba(184, 126, 17, 0.2)",
								padding: "0.5rem 1rem",
								borderRadius: "20px",
								fontSize: "0.875rem",
								border: "1px solid rgba(184, 126, 17, 0.4)",
							}}
						>
							🗺️ MapKit Integration
						</span>
					</div>
				</div>

				{/* App Screenshots Section */}
				<div
					style={{
						marginBottom: "3rem",
						backgroundColor: "rgba(12, 3, 23, 0.6)",
						padding: "2rem",
						borderRadius: "16px",
						textAlign: "center",
						border: "1px solid rgba(184, 126, 17, 0.3)",
						backdropFilter: "blur(10px)",
					}}
				>
					<h3
						style={{
							fontSize: "2rem",
							fontWeight: "500",
							color: "rgba(255, 255, 255, 0.87)",
							marginBottom: "2rem",
							fontFamily: '"Exo", sans-serif',
						}}
					>
						App Screenshots
					</h3>
					<div
						className="img-des-container"
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap",
							width: "100%",
						}}
					>
						<div
							style={{
								width: "300px",
								height: "500px",
								borderRadius: "10px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 15px",
							}}
						>
							<img src={mainScreen} alt="app main screen" />
						</div>
						<div
							style={{
								width: "300px",
								height: "500px",
								borderRadius: "10px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 15px",
							}}
						>
							<img src={searchByName1Letter} alt="search by name of app" />
						</div>
						<div
							style={{
								width: "300px",
								height: "500px",
								borderRadius: "10px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 15px",
							}}
						>
							<img src={brewDetailsScreen} alt="brewery details screen" />
						</div>
					</div>
				</div>

				{/* Technical Features */}
				<div style={{ marginBottom: "3rem" }}>
					<h3
						style={{
							fontSize: "2rem",
							fontWeight: "500",
							color: "rgba(255, 255, 255, 0.87)",
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: '"Exo", sans-serif',
						}}
					>
						🔧 Key Technical Features
					</h3>

					<FeatureSection
						title="Architecture & Design Patterns"
						features={technicalHighlights}
					/>
					<FeatureSection
						title="Advanced Location Services"
						features={locationFeatures}
					/>
					<FeatureSection
						title="Interactive Mapping Features"
						features={mappingFeatures}
					/>
					<FeatureSection
						title="Real-time Search Implementation"
						features={searchFeatures}
					/>
				</div>

				{/* Technical Challenges */}
				<div style={{ marginBottom: "3rem" }}>
					<h3
						style={{
							fontSize: "1.75rem",
							fontWeight: "500",
							color: "rgba(255, 255, 255, 0.87)",
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: '"Exo", sans-serif',
						}}
					>
						🚀 Technical Challenges Solved
					</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: "1rem",
						}}
					>
						{technicalChallenges.map((challenge, index) => (
							<div
								key={index}
								style={{
									backgroundColor: "rgba(12, 3, 23, 0.7)",
									padding: "1rem",
									borderRadius: "8px",
									borderLeft: "4px solid rgb(184, 126, 17)",
									boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
									backdropFilter: "blur(10px)",
								}}
							>
								<h5
									style={{
										fontWeight: "500",
										color: "rgba(245, 167, 23, 1)",
										marginBottom: "0.5rem",
										fontFamily: '"Exo", sans-serif',
									}}
								>
									{challenge.title}
								</h5>
								<p
									style={{
										fontSize: "0.875rem",
										color: "rgba(255, 255, 255, 0.7)",
									}}
								>
									{challenge.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Technologies Used */}
				<div style={{ marginBottom: "3rem" }}>
					<h3
						style={{
							fontSize: "2rem",
							fontWeight: "500",
							color: "rgba(255, 255, 255, 0.87)",
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: '"Exo", sans-serif',
						}}
					>
						🛠️ Technologies Used
					</h3>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "0.75rem",
							justifyContent: "center",
						}}
					>
						{technologies.map((tech, index) => (
							<span
								key={index}
								style={{
									padding: "0.5rem 1rem",
									backgroundColor: "rgba(184, 126, 17, 0.2)",
									color: "rgba(245, 167, 23, 1)",
									borderRadius: "20px",
									fontSize: "0.875rem",
									fontWeight: "500",
									border: "1px solid rgba(184, 126, 17, 0.4)",
									backdropFilter: "blur(5px)",
								}}
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Development Highlights */}
				<div style={{ marginBottom: "3rem" }}>
					<h3
						style={{
							fontSize: "2rem",
							fontWeight: "500",
							color: "rgba(255, 255, 255, 0.87)",
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: '"Exo", sans-serif',
						}}
					>
						✨ Development Highlights
					</h3>
					<div
						style={{
							background:
								"linear-gradient(135deg, rgba(12, 3, 23, 0.9) 0%, rgba(12, 3, 23, 0.4) 100%)",
							padding: "2rem",
							borderRadius: "16px",
							border: "1px solid rgba(184, 126, 17, 0.3)",
							backdropFilter: "blur(10px)",
						}}
					>
						<div style={{ display: "grid", gap: "1rem" }}>
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									gap: "0.75rem",
								}}
							>
								<span
									style={{
										color: "rgb(184, 126, 17)",
										fontWeight: "bold",
										fontSize: "1.125rem",
									}}
								>
									✓
								</span>
								<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
									Modern Swift concurrency patterns with async/await
									implementation
								</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									gap: "0.75rem",
								}}
							>
								<span
									style={{
										color: "rgb(184, 126, 17)",
										fontWeight: "bold",
										fontSize: "1.125rem",
									}}
								>
									✓
								</span>
								<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
									Custom location services with geocoding and external maps
									integration
								</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									gap: "0.75rem",
								}}
							>
								<span
									style={{
										color: "rgb(184, 126, 17)",
										fontWeight: "bold",
										fontSize: "1.125rem",
									}}
								>
									✓
								</span>
								<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
									Real-time search with OpenBreweryDB API integration and proper
									error handling
								</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									gap: "0.75rem",
								}}
							>
								<span
									style={{
										color: "rgb(184, 126, 17)",
										fontWeight: "bold",
										fontSize: "1.125rem",
									}}
								>
									✓
								</span>
								<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
									Custom MapKit annotations with branded UI components
								</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									gap: "0.75rem",
								}}
							>
								<span
									style={{
										color: "rgb(184, 126, 17)",
										fontWeight: "bold",
										fontSize: "1.125rem",
									}}
								>
									✓
								</span>
								<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
									Reactive programming with Combine framework for live UI
									updates
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div
					style={{
						textAlign: "center",
						paddingTop: "2rem",
						borderTop: "2px solid #e5e7eb",
					}}
				>
					<a
						href="https://github.com/Schmidt217/Brew-Finder"
						className="source-code"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							padding: "1rem 2rem",
							backgroundColor: "#1f2937",
							color: "white",
							borderRadius: "12px",
							textDecoration: "none",
							fontWeight: "500",
							transition: "all 0.3s ease",
							boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
						}}
						target="_blank"
						rel="noopener noreferrer"
						onMouseOver={(e) => {
							e.currentTarget.style.backgroundColor = "#374151";
							e.currentTarget.style.transform = "translateY(-2px)";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.backgroundColor = "#1f2937";
							e.currentTarget.style.transform = "translateY(0)";
						}}
					>
						<span style={{ fontSize: "1.25rem" }}>📱</span>
						View Source Code on GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default BrewFinderPortfolio;
