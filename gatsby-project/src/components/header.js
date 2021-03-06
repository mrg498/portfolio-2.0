import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as headerStyles from "../styles/header.module.scss";

const Header = () => {
	const [ toggled, setToggled ] = useState(false);

	const toggleOverlay = () => {
		setToggled((toggled) => {
			return !toggled;
		});
	};

	return (
		<header className={`${headerStyles.container} fadeIn`} style={{ animationDelay: `2.5s` }}>
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
					<li className={headerStyles.largeLink}>Projects</li>
					<li className={headerStyles.largeLink}>Contact</li>
				</ul>
			</div>
			<div
				className={toggled ? `${headerStyles.hamburger} ${headerStyles.isActive}` : `${headerStyles.hamburger}`}
				onClick={() => {
					toggleOverlay();
				}}
			>
				<div className={headerStyles.hamburgerLine} />
				<div className={headerStyles.hamburgerLine} />
				<div className={headerStyles.hamburgerLine} />
			</div>
		</header>
	);
};

export default Header;
