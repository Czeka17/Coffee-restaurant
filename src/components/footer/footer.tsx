import AppWrapper from '../ui/wrapper'
import classes from './footer.module.css'
import {SiFacebook,SiTwitter,SiYoutube,SiInstagram} from 'react-icons/si'
import {BiTime} from 'react-icons/bi'
import Button from '../ui/button'
function Footer(){
    return <footer className={classes.footer}>
        <AppWrapper>
        <div className={classes.footerContainer}>
        <div><span>CSSpresso</span><div className={classes.footerIcons}><SiFacebook/><SiTwitter/><SiInstagram/><SiYoutube/></div></div>
        <div><span>Our location</span><p>3 E 19th St, 123 Fifth Avenue,
NY 10160, New York, USA</p><p>1 234 567 890</p></div>
       <div>
       <div><p>Opening Hours</p><div className={classes.openingHours}><BiTime/><div>
        <p>Sunday to Wednesday</p><p>9AM - 10.30PM</p></div></div></div>
        <div><div className={classes.openingHours}><BiTime/><div>
        <p>Sunday to Wednesday</p><p>9AM - 10.30PM</p></div></div></div>
        <Button>RESERVATION</Button>
       </div>
        </div>
        </AppWrapper>
    </footer>
}
export default Footer