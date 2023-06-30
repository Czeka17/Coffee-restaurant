import chef1 from '../../assets/images/chef1.webp'
import chef2 from '../../assets/images/chef2.webp'
import chef3 from '../../assets/images/chef3.webp'
import AppWrapper from '../ui/wrapper'
import classes from './crew.module.css'
function Crew(){
    return <section className={classes.crewSection}>
      <AppWrapper>
      <div className={classes.crewContainer}>
            <div className={classes.crewLeftSide}><div className={classes.crewText}><h3>Meet our team</h3>
            <p>For the IT crowd who needs a caffeine boost, CSSpresso is the perfect spot. Our cafe is designed to cater to the unique needs of coders, developers, and other techies who crave a quiet and inspiring work environment. With a focus on productivity, creativity, and innovation, we offer a space where you can code, connect, and caffeinate.</p></div>
            <div className={classes.imageContainer1}><img src={chef2} /></div></div>
            <div className={classes.crewRightSide}><div className={classes.imageContainer}><img src={chef1} /></div>
            <div className={classes.imageContainer3}><img src={chef3} /></div></div>
        </div>
      </AppWrapper>
    </section>
}
export default Crew;