import classes from './navigation.module.css'
import { NavLink } from 'react-router-dom';
function Navigation(){
    return(
        <nav className={classes.navigation}>
            <ul className={classes.navigationList}>
                <li>
                    <NavLink className={classes.navLink} to='/'>CSSpresso</NavLink>
                </li>
                <div className={classes.navigationListItems}>
                <li>
                    <NavLink className={classes.navLink} to='/about'>About us</NavLink>
                </li>
                <li>
                    <NavLink className={classes.navLink} to='/menu'>Menu</NavLink>
                </li>
                <li>
                    <NavLink className={classes.navLink} to='/contact'>Contact</NavLink>
                </li>
                </div>
                <li>
                    Reservation
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;