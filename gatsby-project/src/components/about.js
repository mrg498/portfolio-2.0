import React from "react";

import SocialLinks from "./socialLinks";

import * as aboutStyles from "../styles/about.module.scss";

export default function about() {
	return (
		<div id="about" className={aboutStyles.container}>
			<h2 className={aboutStyles.title}>
				<span>Hello!</span>
			</h2>
			<div className={aboutStyles.wrapper}>
				<div className={aboutStyles.section}>
					<h3>
						<span>Professional Bio</span>
					</h3>
					<p>
						I graduated from New York University in May of 2020 with degrees in Computer Science and Music
						Technology. I’ve worked professionally as a developer for companies in both front end and back
						end technologies, as well as designed and implemented websites and web apps for personal
						clients. I love working on interesting projects and continuing to grow as a developer.
					</p>
					<SocialLinks />
				</div>
				<div className={aboutStyles.section}>
					<h3>
						<span>Skills</span>
					</h3>
					<div className={aboutStyles.skillsWrapper}>
						<div className={aboutStyles.skillGroup}>
							<span className={aboutStyles.skill}>html5/css3</span>
							<span className={aboutStyles.skill}>javascript</span>
							<span className={aboutStyles.skill}>react</span>
							<span className={aboutStyles.skill}>jQuery</span>
							<span className={aboutStyles.skill}>scss</span>
							<span className={aboutStyles.skill}>CRA/gatsby</span>
						</div>
						<div className={aboutStyles.skillGroup}>
							<span className={aboutStyles.skill}>node/express</span>
							<span className={aboutStyles.skill}>MySQL</span>
							<span className={aboutStyles.skill}>MongoDB</span>
							<span className={aboutStyles.skill}>REST API</span>
							<span className={aboutStyles.skill}>graphql</span>
							<span className={aboutStyles.skill}>MVC design pattern</span>
							<span className={aboutStyles.skill}>python/flask</span>
						</div>
						<div className={aboutStyles.skillGroup}>
							<span className={aboutStyles.skill}>git/github</span>
							<span className={aboutStyles.skill}>java/c++/swift</span>
							<span className={aboutStyles.skill}>VS Code</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
