import Button from '../ui/button';
import AppWrapper from '../ui/wrapper';
import classes from './menu.module.css'
import { MainMenu } from '../../menuLists/menuLists';
import { Link } from 'react-router-dom';
function Menu(){
    
    return(
        <div className={classes.menu}>
            <AppWrapper>
            <div className={classes.menuContainer}>
                <h2>OUR MENU</h2>
                <h3>Get Relax. Eat.</h3>
                <div>
                    <ul className={classes.menuList}>
                        {MainMenu.map((item) => <li><p>{item.title}</p><p>{item.description}</p><hr/></li>)}
                    </ul>
                </div>
                <div><Link to='/menu'><Button>VIEW ALL MENU</Button></Link></div>
            </div>
            </AppWrapper>
            <div className={classes.menuImage}><div className={classes.menuImageShadow}></div><div className={classes.menuImageItems}>
            <div className={classes.menuImageText}><h3>CSSpresso: Where Coding Meets Caffeine</h3><p>At CSSpresso, we offer more than just a cup of coffee – we offer an inspiring environment that fuels your productivity and creativity. Our menu features a variety of specialty coffee drinks, snacks, and light bites to help you power through your coding projects. With a quiet and cozy atmosphere, it’s easy to stay focused and get into the zone.</p></div><div><Link to='/reservation'><Button>RESERVATION</Button></Link></div></div></div>
        </div>
    )
}
export default Menu;