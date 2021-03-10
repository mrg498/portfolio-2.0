import React, {useState} from "react";
import { navigate } from 'gatsby-link'
import * as contactStyles from "../styles/contact.module.scss";

function encode(data) {
	return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

export default function Contact() {
	const [ state, setState ] = useState({});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...state
			})
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	return (
		<div id="contact" className={contactStyles.container}>
			<h2 className={contactStyles.title}>
				<span>Contact</span>
				<h5 className={contactStyles.subTitle}>For employment or projects!</h5>
			</h2>
			<form
				className={contactStyles.form}
				name="contact"
				method="post"
				action="thanks/"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={handleSubmit}
			>
				{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label>
						Don’t fill this out: <input name="bot-field" onChange={handleChange} />
					</label>
				</p>
				<p className={contactStyles.fieldWrapper}>
					<label>
						Email
						<br />
						<input className={contactStyles.formText} type="email" name="email" onChange={handleChange} />
					</label>
				</p>
				<p className={contactStyles.fieldWrapper}>
					<label>
						Subject
						<br />
						<input className={contactStyles.formText} type="text" name="subject" onChange={handleChange} />
					</label>
				</p>
				<p className={contactStyles.fieldWrapper}>
					<label>
						Message
						<br />
						<textarea className={contactStyles.formText} name="message" onChange={handleChange} />
					</label>
				</p>
				<p className={contactStyles.fieldWrapper}>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	);
}
