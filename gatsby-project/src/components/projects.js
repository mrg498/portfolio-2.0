import React from "react";
import { Link } from "gatsby";

import * as projectStyles from "../styles/projects.module.scss";

export default function projects() {
	return (
		<div id="projects" className={projectStyles.container}>
			<h2 className={projectStyles.title}>
				<span>Featured Projects</span>
				<h5 className={projectStyles.subTitle}>
					For more, see my pinned <a href="https://github.com/mrg498">github</a> repos
				</h5>
			</h2>
			<div className={projectStyles.postContainer}>
				<div className={projectStyles.row}>
					<div className={projectStyles.post}>
						<h3>
							<span>Analog Collective Web App</span>
						</h3>
						<p>
							A web app that interfaces with the Spotify API. Allows independent music curators to
							advertise their playlists and musicians to submit to playlists for track placement. I served
							as the main front end developer, but I was also involved in writing parts of the backend,
							and now I handle front end and back end updates to the site as needed. Over 6,000 users
							signed up and ~$2000 monthly revenue generated.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a href="https://analogcollective.com/" className={projectStyles.btn}>
									Live
								</a>
								<a href="https://www.youtube.com/watch?v=3F7orkRbcC0" className={projectStyles.btn}>
									Demo
								</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>html5/css3</span>
								<span className={projectStyles.skill}>js/jQuery</span>
								<span className={projectStyles.skill}>python/flask</span>
								<span className={projectStyles.skill}>MySQL</span>
								<span className={projectStyles.skill}>Linux/Ubuntu/nginx</span>
							</div>
						</div>
					</div>
					<div className={projectStyles.post}>
						<h3>
							<span>Handoff Retailer Portal</span>
						</h3>
						<p>
							An internal tool for partnered Handoff retailers to manage inventory, track transactions,
							and handle customer orders. I was solely responsible for implementing the customer order
							handling and order history components.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a href="https://www.youtube.com/watch?v=b4ZVpL89uEg" className={projectStyles.btn}>
									Demo
								</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>java</span>
								<span className={projectStyles.skill}>Spring MVC Framework</span>
								<span className={projectStyles.skill}>MySQL</span>
								<span className={projectStyles.skill}>Thymeleaf template engine</span>
							</div>
						</div>
					</div>
				</div>
				<div className={projectStyles.row}>
					<div className={projectStyles.post}>
						<h3>
							<span>Alex Carr Personal Site</span>
						</h3>
						<p>
							Personal professional website for Alex Carr. Design guided by client aesthetics. Integrated
							with Netlify CMS for client content updates.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a href="https://alexcarr.art/" className={projectStyles.btn}>
									Live
								</a>
								<a
									href="https://github.com/alexcarrengler/portfolio-alex-carr"
									className={projectStyles.btn}
								>
									Code
								</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>react</span>
								<span className={projectStyles.skill}>gatsby</span>
								<span className={projectStyles.skill}>sass</span>
								<span className={projectStyles.skill}>react hooks</span>
							</div>
						</div>
					</div>
					<div className={projectStyles.post}>
						<h3>
							<span>Haven</span>
						</h3>
						<p>
							A personal project I am developing that allows creators to upload written and spoken word
							fiction for purchase.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a href="https://github.com/mrg498/haven" className={projectStyles.btn}>
									Code
								</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>node</span>
								<span className={projectStyles.skill}>javascript</span>
								<span className={projectStyles.skill}>express</span>
								<span className={projectStyles.skill}>MongoDB</span>
								<span className={projectStyles.skill}>jest</span>
								<span className={projectStyles.skill}>html/css</span>
							</div>
						</div>
					</div>
					<div className={projectStyles.post}>
						<h3>
							<span>Chloe Ting Workout Builder</span>
						</h3>
						<p>
							A personal project I built to pull Chloe Ting exercise videos from youtube and build unique
							workouts. Interfaces with the youtube API.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a href="https://mrg498.github.io/chloe-ting-react-app/" className={projectStyles.btn}>
									Live
								</a>
								<a href="https://github.com/mrg498/chloe-ting-react-app" className={projectStyles.btn}>
									Code
								</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>react</span>
								<span className={projectStyles.skill}>Youtube Data API</span>
							</div>
						</div>
					</div>
					<div className={projectStyles.post}>
						<h3>
							<span>Splash Kid</span>
						</h3>
						<p>
							Splash Kid is a children’s video game for iOS. Developed for my iOS programming course at
							NYU.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a href="https://github.com/Splash-Kid-iOS/splash-kid" className={projectStyles.btn}>
									Code
								</a>
								<a href="https://www.youtube.com/watch?v=9wwwd5udPZE&t" className={projectStyles.btn}>
									Demo
								</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>Swift</span>
								<span className={projectStyles.skill}>Xcode</span>
								<span className={projectStyles.skill}>iOS</span>
								<span className={projectStyles.skill}>SpriteKit</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
