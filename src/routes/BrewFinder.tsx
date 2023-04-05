import addFavorites from "../assets/brewFinderPage/AddFavorites.webp";
import brewDetailsScreen from "../assets/brewFinderPage/BrewDetailScreen.webp";
import favoritesScreen from "../assets/brewFinderPage/FavoritesScreen.webp";
import mainScreen from "../assets/brewFinderPage/MainScreen.webp";
import removeFromFavorites from "../assets/brewFinderPage/RemoveFromFavorites.webp";
import searchByLocation from "../assets/brewFinderPage/SearchByLocation.webp";
import searchByName1Letter from "../assets/brewFinderPage/SearchByName-1-letter.webp";
import searchByName from "../assets/brewFinderPage/SearchByName.webp";
import "../styles/brewFinder.css";

const styles = {
	descriptionContainer: (side?: string) => ({
		display: "flex",
		flexDirection:
			side === "left" ? ("row" as "row") : ("row-reverse" as "row-reverse"),
		alignSelf: side === "left" ? "flex-start" : "flex-end",
		alignItems: "center",
		width: "600px",
	}),
};
function BrewFinder() {
	return (
		<div id="brew-finder-page">
			<h1>Brew Finder</h1>
			<h3>Brew Finder is an iOS app developed in SwiftUI</h3>
			<p className="source-code">
				<a href="https://github.com/Schmidt217/Brew-Finder">
					<i className="fab fa-github-square"></i>
				</a>{" "}
				To view the source code, please visit my{" "}
				<a href="https://github.com/Schmidt217/Brew-Finder">Github page</a>
			</p>
			<div className="container">
				<div
					className="img-des-container"
					style={styles.descriptionContainer("left")}
				>
					<img src={mainScreen} alt="main screen of app" />
					<p>
						The app opens up to the main screen where the user is given two
						options. They can search for a brewery by name, or they can choose
						to search by their current location. If this is the first time using
						the app, it will ask permission to use the user's location before
						continuing.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("right")}
				>
					<img src={searchByLocation} alt="search by location of app" />
					<p>
						When a user chooses to search by location, it will bring up a list
						of breweries based on thier current location.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("left")}
				>
					<img src={searchByName1Letter} alt="search by name of app" />
					<p>
						A user is also able to search by typing in a brewery's name. It will
						run a search with each key press, so the app will narrow down your
						search based on the number of characters searched. It will start
						searching with just a single letter.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("right")}
				>
					<img src={searchByName} alt="search by name of app" />
					<p>
						If the full name of the brewery is known, a user can find the exact
						brewery they are looking for. Then a user just needs to press on the
						brewery they want to bring up the details.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("left")}
				>
					<img src={brewDetailsScreen} alt="detail screen of app" />
					<p>
						The details screen will then have all relevant information for the
						user, including the type of brewery it is, a link to their website,
						the phone number, the address, and an interactive map view.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("right")}
				>
					<img src={addFavorites} alt="add favorites" />
					<p>
						From the details screen, the user also has the ability to add it to
						their favorites so they can find it quicker the next time they use
						the app. All they have to do is press the star in the upper right
						corner of the screen and a toast notification will tell them if the
						action was successful or not.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("left")}
				>
					<img src={favoritesScreen} alt="favorites screen" />
					<p>
						In the bottom navigation bar, a user may go to the favorites screen
						to view all the breweries they have added to their favorites.
						Pressing any of those options will take the user to the same details
						screen for each brewery.
					</p>
				</div>

				<div
					className="img-des-container"
					style={styles.descriptionContainer("right")}
				>
					<img src={removeFromFavorites} alt="remove from favorites" />
					<p>
						A user will also have the option to remove a brewery from their
						favorites list. All a user has to do is press the star in the upper
						right of the screen and they will receive another toast notification
						to tell them if the action was successful.
					</p>
				</div>
			</div>
		</div>
	);
}

export default BrewFinder;
