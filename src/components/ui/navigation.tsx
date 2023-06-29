import classes from './navigation.module.css'

function Navigation(){
    return(
        <nav className={classes.navigation}>
            <ul className={classes.navigationList}>
                <li>
                    CSSpresso
                </li>
                <li>
                    About us
                </li>
                <li>
                    Menu
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