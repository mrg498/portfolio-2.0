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
							<span>Chandrika Tandon Personal Site</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Ullamcorper
							dignissim cras tincidunt lobortis feugiat. Quis auctor elit sed vulputate mi sit. Tincidunt
							ornare massa eget egestas purus. In cursus turpis massa tincidunt dui. Tincidunt tortor
							aliquam nulla facilisi cras fermentum. Volutpat blandit aliquam etiam erat velit scelerisque
							in. Non nisi est sit amet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Et
							magnis dis parturient montes. Felis eget nunc lobortis mattis aliquam faucibus purus in.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a className={projectStyles.btn}>Code</a>
								<a className={projectStyles.btn}>Live</a>
								<a className={projectStyles.btn}>Demo</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>html5/css3</span>
								<span className={projectStyles.skill}>javascript</span>
								<span className={projectStyles.skill}>react</span>
								<span className={projectStyles.skill}>jQuery</span>
								<span className={projectStyles.skill}>sass</span>
								<span className={projectStyles.skill}>CRA/gatsby</span>
							</div>
						</div>
					</div>
					<div className={projectStyles.post}>
						<h3>
							<span>Haven</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Ullamcorper
							dignissim cras tincidunt lobortis feugiat. Quis auctor elit sed vulputate mi sit. Tincidunt
							ornare massa eget egestas purus. In cursus turpis massa tincidunt dui. Tincidunt tortor
							aliquam nulla facilisi cras fermentum. Volutpat blandit aliquam etiam erat velit scelerisque
							in. Non nisi est sit amet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Et
							magnis dis parturient montes. Felis eget nunc lobortis mattis aliquam faucibus purus in.
						</p>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<a className={projectStyles.btn}>Code</a>
								<a className={projectStyles.btn}>Live</a>
								<a className={projectStyles.btn}>Demo</a>
							</div>
						</div>
						<div className={projectStyles.sectionWrapper}>
							<div className={projectStyles.sectionGroup}>
								<span className={projectStyles.skill}>html5/css3</span>
								<span className={projectStyles.skill}>javascript</span>
								<span className={projectStyles.skill}>react</span>
								<span className={projectStyles.skill}>jQuery</span>
								<span className={projectStyles.skill}>sass</span>
								<span className={projectStyles.skill}>CRA/gatsby</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
