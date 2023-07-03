import AppWrapper from "../ui/wrapper";
import classes from "./about-info.module.css";
import aboutImg from "../../assets/images/coffee-reservation.webp";
import { BsBox } from "react-icons/bs";
import AboutSpecialties from "./about-specialties";
import Team from "./team";
import Header from "../header/header";
function AboutInfo() {
	return (
		<div>
			<Header bgi={process.env.PUBLIC_URL + '/about-section.webp'} headerText="About Us" headerParagraph="At CSSpresso, we're all about coffee. With a passion for quality
							and a dedication to excellence, we aim to provide an exceptional
							coffee experience. Join us to savor the finest brews and discover
							the true art of coffee craftsmanship."/>
			<AppWrapper>
				<div className={classes.about}>
					<div className={classes.aboutHeading}>
						<h3>Our story</h3>
						<p>
							At CSSpresso, our team is made up of tech enthusiasts who are
							passionate about coffee and coding. We created this cafe to
							provide a space for people like us – those who need a productive
							environment to get work done while enjoying a delicious cup of
							coffee.
						</p>
					</div>
					<div className={classes.aboutHeading}>
						<div className={classes.aboutBenefits}>
							<div className={classes.aboutBenefitsBox}>
								<div className={classes.aboutBenefitsBoxIcon}>
									<BsBox />
								</div>
								<div>
									<span>Inspiring Environment</span>
									<p>
										Surround yourself with a motivating atmosphere that fuels
										creativity.
									</p>
								</div>
							</div>
							<hr />
							<div className={classes.aboutBenefitsBox}>
								<div className={classes.aboutBenefitsBoxIcon}>
									<BsBox />
								</div>
								<div>
									<span>Productivity Boost</span>
									<p>Get more done with caffeine-fueled productivity.</p>
								</div>
							</div>
							<hr />
							<div className={classes.aboutBenefitsBox}>
								<div className={classes.aboutBenefitsBoxIcon}>
									<BsBox />
								</div>
								<div>
									<span>Networking Hub</span>
									<p>
										Connect with like-minded individuals and expand your
										professional network.
									</p>
								</div>
							</div>
							<hr />
						</div>
						<div className={classes.aboutImg}>
							<img src={aboutImg} />
						</div>
					</div>
				</div>
			</AppWrapper>
			<AboutSpecialties/>
			<Team/>
		</div>
	);
}
export default AboutInfo;
