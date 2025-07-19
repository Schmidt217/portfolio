import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/navBar.css";

interface NavItem {
	id: string;
	label: string;
	ariaLabel?: string;
}

const NAV_ITEMS: NavItem[] = [
	{ id: "home", label: "Home", ariaLabel: "Home" },
	{ id: "experience", label: "Experience", ariaLabel: "Experience" },
	{ id: "projects", label: "Projects", ariaLabel: "Projects" },
	{ id: "work-history", label: "Work History", ariaLabel: "Work History" },
	{ id: "contact", label: "Contact", ariaLabel: "Contact" },
];

function NavBar() {
	const [activeTab, setActiveTab] = useState<string>("home");
	const [isFixed, setIsFixed] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const navRef = useRef<HTMLUListElement>(null);
	const hamburgerRef = useRef<HTMLButtonElement>(null);

	// Smooth scroll with better offset calculation
	const scrollToSection = useCallback((tabName: string) => {
		const element = document.getElementById(tabName);
		if (element) {
			const navHeight = 70;
			const elementTop =
				element.getBoundingClientRect().top + window.pageYOffset;
			const offsetTop = elementTop - navHeight;

			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
	}, []);

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
		scrollToSection(tabName);
		setIsMenuOpen(false);
	};

	const toggleNav = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isMenuOpen &&
				navRef.current &&
				hamburgerRef.current &&
				!navRef.current.contains(event.target as Node) &&
				!hamburgerRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isMenuOpen]);

	// Handle scroll with throttling and intersection observer for active section
	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;
					const homeSectionHeight =
						document.getElementById("home")?.offsetHeight;

					if (homeSectionHeight && currentScrollY > homeSectionHeight / 2) {
						setIsFixed(true);
					} else {
						setIsFixed(false);
					}

					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveTab(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-50% 0px -50% 0px",
				threshold: 0,
			}
		);

		NAV_ITEMS.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, []);

	const handleKeyDown = (event: React.KeyboardEvent, tabName: string) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleTabClick(tabName);
		}
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape" && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMenuOpen]);

	return (
		<nav
			className={isFixed && window.innerWidth > 768 ? "fixed" : ""}
			role="navigation"
			aria-label="Main navigation"
		>
			<ul
				ref={navRef}
				className={isMenuOpen ? "active" : ""}
				role="menubar"
				aria-orientation="horizontal"
			>
				{NAV_ITEMS.map(({ id, label, ariaLabel }) => (
					<li
						key={id}
						className={activeTab === id ? "active" : ""}
						onClick={() => handleTabClick(id)}
						onKeyDown={(e) => handleKeyDown(e, id)}
						role="menuitem"
						tabIndex={0}
						aria-label={ariaLabel || label}
						aria-current={activeTab === id ? "page" : undefined}
					>
						<span className="code-symbol" aria-hidden="true">
							{"</>"}
						</span>
						{label}
					</li>
				))}
			</ul>

			<button
				ref={hamburgerRef}
				className="hamburger"
				onClick={toggleNav}
				aria-label={
					isMenuOpen ? "Close navigation menu" : "Open navigation menu"
				}
				aria-expanded={isMenuOpen}
				aria-controls="navigation-menu"
				type="button"
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
		</nav>
	);
}

export default NavBar;
