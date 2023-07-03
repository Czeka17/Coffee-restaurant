import AppWrapper from '../ui/wrapper';
import classes from './team.module.css'
import chef1 from '../../assets/images/chef1.webp'
import chef2 from '../../assets/images/chef2.webp'
import chef3 from '../../assets/images/chef3.webp'
import { SiFacebook,SiTwitter,SiYoutube } from 'react-icons/si';
function Team(){
    return <div className={classes.teamContainer}>
        <AppWrapper>
            <div className={classes.teamIntroduction}>
            <h3>Meet Our Team</h3>
            <p>For the IT crowd who needs a caffeine boost, CSSpresso is the perfect spot. Our cafe is designed to cater to the unique needs of coders, developers, and other techies who crave a quiet and inspiring work environment. With a focus on productivity, creativity, and innovation, we offer a space where you can code, connect, and caffeinate.</p>
            </div>
            <div className={classes.team}>
                <div className={classes.teamItem}><img src={chef1} /><span>Tony Gordon</span><div className={classes.socials}><SiFacebook/> <SiTwitter/> <SiYoutube/></div></div>
                <div className={classes.teamItem}><img src={chef2} /><span>Mike Tomskin</span><div className={classes.socials}><SiFacebook/> <SiTwitter/> <SiYoutube/></div></div>
                <div className={classes.teamItem}><img src={chef3} /><span>Edward Solo</span><div className={classes.socials}><SiFacebook/> <SiTwitter/> <SiYoutube/></div></div>
            </div>
        </AppWrapper>
    </div>
}
export default Team;