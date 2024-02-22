import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<nav>
			<div className={classes.hamburger}>
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
				/>
			</div>
			<div
				className={`${classes.navigation} ${
					isOpen ? classes.open : classes.hide
				}`}
			>
				<ul className={classes.navigationList}>
					<li>
						<NavLink
							className={classes.navLink}
							to='/'
						>
							CSSpresso
						</NavLink>
					</li>
					<div className={classes.navigationListItems}>
						<li>
							<NavLink
								className={classes.navLink}
								to='/about'
							>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink
								className={classes.navLink}
								to='/menu'
							>
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink
								className={classes.navLink}
								to='/contact'
							>
								Contact
							</NavLink>
						</li>
					</div>
					<li>
						<NavLink
							className={classes.navLink}
							to='/reservation'
						>
							Reservation
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navigation;
