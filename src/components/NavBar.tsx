import { useState, useEffect, useRef } from "react";
import "../styles/navBar.css";

function NavBar() {
	const [activeTab, setActiveTab] = useState<string>("home");
	const [isFixed, setIsFixed] = useState<boolean>(false);
	const navRef = useRef<HTMLUListElement>(null);

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
		const element = document.getElementById(tabName);
		if (element) {
			const y = element.getBoundingClientRect().top - 70;
			window.scrollBy({ top: y, behavior: "smooth" });
		}
		toggleNav();
	};

	const toggleNav = () => {
		if (navRef.current) {
			navRef.current.classList.toggle("active");
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const homeSectionHeight = document.getElementById("home")?.offsetHeight;
			if (homeSectionHeight && currentScrollY > homeSectionHeight / 2) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={isFixed && window.innerWidth > 768 ? "fixed" : ""}>
			<ul ref={navRef}>
				<li
					className={activeTab === "home" ? "active" : ""}
					onClick={() => handleTabClick("home")}
				>
					<span className="code-symbol">{"</>"}</span>
					Home
				</li>
				<li
					className={activeTab === "experience" ? "active" : ""}
					onClick={() => handleTabClick("experience")}
				>
					<span className="code-symbol">{"</>"}</span>
					Experience
				</li>
				<li
					className={activeTab === "projects" ? "active" : ""}
					onClick={() => handleTabClick("projects")}
				>
					<span className="code-symbol">{"</>"}</span>
					Projects
				</li>
				<li
					className={activeTab === "work-history" ? "active" : ""}
					onClick={() => handleTabClick("work-history")}
				>
					<span className="code-symbol">{"</>"}</span>
					Work History
				</li>
				<li
					className={activeTab === "contact" ? "active" : ""}
					onClick={() => handleTabClick("contact")}
				>
					<span className="code-symbol">{"</>"}</span>
					Contact
				</li>
			</ul>
			<div className="hamburger" onClick={toggleNav}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	);
}

export default NavBar;
