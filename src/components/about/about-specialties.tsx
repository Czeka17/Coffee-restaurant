import Button from "../ui/button";
import classes from "./about-specialties.module.css";
import coffee1 from "../../assets/images/about-coffee.webp";
import coffee2 from "../../assets/images/about-coffee2.webp";
import AppWrapper from "../ui/wrapper";
function AboutSpecialties() {
	return (
		<div className={classes.specialtiesContainer}>
			<AppWrapper>
				<div className={classes.specialties}>
					<div className={classes.special}>
						<h3>Our Specialties</h3>
						<p>
							At CSSpresso, we specialize in crafting the perfect cup of coffee
							for coders and techies. From classic espresso drinks to trendy
							coffee creations, our menu has something for everyone. We also
							offer a variety of snacks and light bites to keep you fueled and
							focused throughout the day.
						</p>
						<div className={classes.button}>
							<Button>VIEW MENU</Button>
						</div>
					</div>
					<div className={classes.special}>
						<img
							src={coffee1}
							alt='Image of CSSpresso Classic'
						/>
						<span>CSSpresso Classic</span>
						<p>
							Our signature espresso shot, expertly brewed to perfection. Served
							with a velvety crema and a rich, smooth flavor. Price: $2.99
						</p>
					</div>
					<div className={classes.special}>
						<img
							src={coffee2}
							alt='Image representing Java Chip Frappuccino'
						/>
						<span>Java Chip Frappuccino</span>
						<p>
							Our famous blended beverage featuring a creamy blend of java
							chips, coffee, and milk, topped with whipped cream. Price: $4.99
						</p>
					</div>
				</div>
			</AppWrapper>
		</div>
	);
}
export default AboutSpecialties;
