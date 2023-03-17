import React, { useState, FormEvent } from "react";
import "../styles/contactForm.css";

function ContactForm() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [nameError, setNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [subjectError, setSubjectError] = useState<string>("");
	const [messageError, setMessageError] = useState<string>("");

	const validate = () => {
		let nameError = "";
		let emailError = "";
		let subjectError = "";
		let messageError = "";

		if (!name) {
			nameError = "Name is required";
		}

		if (!email) {
			emailError = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			emailError = "Email address is invalid";
		}

		if (!subject) {
			subjectError = "Subject is required";
		}

		if (!message) {
			messageError = "Message is required";
		}

		if (nameError || emailError || subjectError || messageError) {
			setNameError(nameError);
			setEmailError(emailError);
			setSubjectError(subjectError);
			setMessageError(messageError);
			return false;
		}

		return true;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			// handle form submission here, e.g. sending data to a server
			console.log(name, email, subject, message);
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
			setNameError("");
			setEmailError("");
			setSubjectError("");
			setMessageError("");
		}
	};

	return (
		<section id="contact">
			<h1>Contact Me</h1>
			<form className="contact-form" onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						id="name"
						type="text"
						value={name}
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					/>
					<div className="error">{nameError}</div>
				</div>
				<div className="form-group">
					<input
						id="email"
						type="email"
						value={email}
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="error">{emailError}</div>
				</div>
				<div className="form-group">
					<input
						id="subject"
						type="text"
						value={subject}
						placeholder="Subject"
						onChange={(e) => setSubject(e.target.value)}
					/>
					<div className="error">{subjectError}</div>
				</div>
				<div className="form-group">
					<textarea
						id="message"
						value={message}
						placeholder="Message"
						onChange={(e) => setMessage(e.target.value)}
					/>
					<div className="error">{messageError}</div>
				</div>
				<button className="submit-button" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
}

export default ContactForm;
