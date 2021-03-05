import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as headerStyles from "../styles/header.module.scss";

const Header = () => (
	<header className={`${headerStyles.container} fadeIn`} style={{animationDelay: `2.5s`}}>
		<div className={headerStyles.iconWrapper}>
			<StaticImage
				src="../images/gatsby-icon.png"
				alt="A dinosaur"
				placeholder="blurred"
				layout="fixed"
				width={56}
        height={56}
			/>
		</div>
		<div>
			<ul className={`${headerStyles.largeLinks}`}>
				<li className={headerStyles.largeLink}>Home</li>
				<li className={headerStyles.largeLink}>About</li>
				<li className={headerStyles.largeLink}>Projects</li>
				<li className={headerStyles.largeLink}>Contact</li>
			</ul>
		</div>
	</header>
);

export default Header;
