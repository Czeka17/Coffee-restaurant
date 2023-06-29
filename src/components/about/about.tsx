import classes from './about.module.css'
import about1 from '../../assets/images/about.webp'
import about2 from '../../assets/images/mike-kenneally-tNALoIZhqVM-unsplash-_1_.webp'
import about3 from '../../assets/images/tyler-nix-yGb2igKldYg-unsplash-_1_.webp'
import AppWrapper from '../ui/wrapper'
function About(){
    return (
        <section className={classes.about}>
            <AppWrapper>
                <div className={classes.about}>
            <div className={classes.aboutLeftside}>
                <h3>Unlock the full potential of your workday at CSSpresso.</h3>
                <div className={classes.imgContainer}><img src={about1} alt='Happy barista making coffee'/></div>
                <h3>Inspiring Environment</h3>
                <p>CSSpresso is designed to inspire. The modern, minimalist decor and cozy seating create a motivating environment that encourages creativity and productivity. The calming color scheme and natural lighting provide a serene backdrop for coding sessions, while the bustling atmosphere keeps energy levels high. Whether you’re seeking inspiration or simply need a change of scenery, CSSpresso offers the perfect space to get your creative juices flowing.</p>
            </div>
            <div className={classes.aboutRightside}>
            <div className={classes.aboutRightsideFirst}>
           <div className={classes.imgContainer}> <img src={about2} /></div>
            <h3>Productivity Boost</h3>
            <p>CSSpresso understands that time is of the essence for IT professionals. That’s why the coffee shop offers a range of energizing beverages to keep you fueled and focused. From classic espresso shots to specialty drinks like the signature CSSpresso, there’s something for everyone. These caffeine boosts help you power through your workday with increased productivity and efficiency, allowing you to accomplish more in less time.</p>
            </div>
            <div className={classes.aboutRightsideSecond}>
                <div className={classes.imgContainer}><img src={about3}/></div>
                <h3>Networking Hub</h3>
                <p>CSSpresso is more than just a coffee shop – it’s a community hub. The welcoming atmosphere and shared passion for technology make it the perfect place to connect with like-minded individuals and expand your professional network. Whether you’re looking for new job opportunities or simply want to bounce ideas off of someone, CSSpresso provides the ideal platform to do so. The regular events and workshops hosted by the coffee shop also offer a chance to learn new skills and grow your career.</p>
            </div>
            </div></div>
            </AppWrapper>
        </section>
    )
}
export default About;