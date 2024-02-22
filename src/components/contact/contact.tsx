import Header from "../header/header";
import Reservation from "../reservation/reservation";
import MapComponent from "../ui/map";
import AppWrapper from "../ui/wrapper";
import classes from "./contact.module.css";
import ContactForm from "./contactForm";

function Contact() {
	return (
		<div>
			<Header
				bgi={process.env.PUBLIC_URL + "/contactHeader.webp"}
				headerText='Contact Us'
				headerParagraph='We’d love to hear from you! Please don’t hesitate to reach out to us with any questions, comments, or concerns – we’re here to help.'
			/>
			<AppWrapper>
				<div>
					<Reservation />
				</div>
				<div className={classes.contactPosition}>
					<div className={classes.formContainer}>
						<ContactForm />
					</div>
				</div>
			</AppWrapper>
		</div>
	);
}
export default Contact;
