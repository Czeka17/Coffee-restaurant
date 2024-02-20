import AppWrapper from "../ui/wrapper";
import classes from "./fullMenu.module.css";
import MenuImage from "./menuImage";
import {
	AppetizerMenu,
	MainCoursesMenu,
	DessertMenu,
} from "../../menuLists/menuLists";
import Button from "../ui/button";
import Header from "../header/header";
function FullMenu() {
	return (
		<section>
			<Header
				bgi={process.env.PUBLIC_URL + "/menuHeader.webp"}
				headerText='Our Menu'
				headerParagraph='Explore our wide variety of coffee options and delicious snacks made with love.'
			/>
			<MenuImage>Appetizer</MenuImage>
			<div className={classes.menuItems}>
				<AppWrapper>
					<ul>
						{AppetizerMenu.map((menuItem) => (
							<li>
								<div className={classes.menuItemsCon}>
									<div className={classes.menuItemsInfo}>
										<p>{menuItem.name}</p>
										<p>{menuItem.description}</p>
									</div>
									<p className={classes.bold}>Price: {menuItem.price}</p>
								</div>
								<hr />
							</li>
						))}
					</ul>
				</AppWrapper>
			</div>
			<MenuImage>Main Courses</MenuImage>
			<div className={classes.menuItems}>
				<AppWrapper>
					<ul>
						{MainCoursesMenu.map((menuItem) => (
							<li>
								<div className={classes.menuItemsCon}>
									<div className={classes.menuItemsInfo}>
										<p>{menuItem.name}</p>
										<p>{menuItem.description}</p>
									</div>
									<p className={classes.bold}>Price: {menuItem.price}</p>
								</div>
								<hr />
							</li>
						))}
					</ul>
				</AppWrapper>
			</div>
			<MenuImage>Dessert</MenuImage>
			<div className={classes.menuItems}>
				<AppWrapper>
					<ul>
						{DessertMenu.map((menuItem) => (
							<li>
								<div className={classes.menuItemsCon}>
									<div className={classes.menuItemsInfo}>
										<p>{menuItem.name}</p>
										<p>{menuItem.description}</p>
									</div>
									<p className={classes.bold}>Price: {menuItem.price}</p>
								</div>
								<hr />
							</li>
						))}
					</ul>
				</AppWrapper>
			</div>
			<div className={classes.menuReservation}>
				<div className={classes.menuReservationShadow}></div>
				<div className={classes.menuReservationText}>
					<h3>Reservation</h3>
					<p>
						Experience the best at CSSpresso. Reserve your table today for an
						exceptional coffee journey. Call or visit our website to secure your
						spot and savor the finest coffee creations.
					</p>
					<Button>BOOK A TABLE NOW</Button>
					<h3>Telephone reservations</h3>
					<p>123 456 789</p>
				</div>
			</div>
		</section>
	);
}
export default FullMenu;
