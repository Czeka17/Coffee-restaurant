import classes from './navigation.module.css'
import { NavLink } from 'react-router-dom';
function Navigation(){
    return(
        <nav className={classes.navigation}>
            <ul className={classes.navigationList}>
                <li>
                    CSSpresso
                </li>
                <li>
                    <NavLink to='/about'>About us</NavLink>
                </li>
                <li>
                    <NavLink to='/menu'>Menu</NavLink>
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Reservation
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;