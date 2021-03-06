import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as headerStyles from "../styles/header.module.scss";

const Header = () => {
	const [ toggled, setToggled ] = useState(false);
	const [ accordianClass, setAccordianClass ] = useState("");
	const [ setHeight, setHeightState ] = useState("0px");
	const content = useRef(null);

	const toggleOverlay = () => {
		setToggled((toggled) => {
			return !toggled;
		});
	};

	function toggleAccordion() {
		if (accordianClass === "") {
			setAccordianClass("open");
			setHeightState(`${content.current.scrollHeight}px`);
		}
		else {
			setAccordianClass("");
			setHeightState(`0px`);
		}
		setToggled((toggled) => {
			return !toggled;
		});
	}

	return (
		<header className={`${headerStyles.container} fadeIn`} style={{ animationDelay: `2.5s` }}>
			<nav>
				<div className={headerStyles.iconWrapper}>
					<StaticImage
						src="../images/gatsby-icon.png"
						alt="A dinosaur"
						placeholder="blurred"
						layout="fixed"
						width={44}
						height={44}
					/>
				</div>
				<div className={headerStyles.desktop}>
					<ul className={`${headerStyles.largeLinks}`}>
						<li className={headerStyles.largeLink}>Home</li>
						<li className={headerStyles.largeLink}>About</li>
						<li className={headerStyles.largeLink}>Experience</li>
						<li className={headerStyles.largeLink}>Projects</li>
						<li className={headerStyles.largeLink}>Contact</li>
					</ul>
				</div>
				<div
					className={
						toggled ? `${headerStyles.hamburger} ${headerStyles.isActive}` : `${headerStyles.hamburger}`
					}
					onClick={() => {
						toggleAccordion();
					}}
				>
					<div className={headerStyles.hamburgerLine} />
					<div className={headerStyles.hamburgerLine} />
					<div className={headerStyles.hamburgerLine} />
				</div>
			</nav>
			<div ref={content} style={{ maxHeight: `${setHeight}` }} className={headerStyles.accordian}>
				<ul className={`${headerStyles.largeLinks}`}>
					<li className={headerStyles.largeLink}>Home</li>
					<li className={headerStyles.largeLink}>About</li>
					<li className={headerStyles.largeLink}>Experience</li>
					<li className={headerStyles.largeLink}>Projects</li>
					<li className={headerStyles.largeLink}>Contact</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
