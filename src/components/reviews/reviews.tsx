import AppWrapper from "../ui/wrapper"
import person1 from '../../assets/images/person1.jpg'
import person2 from '../../assets/images/person2.jpg'
import person3 from '../../assets/images/person3.jpg'
import classes from './reviews.module.css'
function Reviews(){
    return <section className={classes.ReviewsSection}>
        <div className={classes.ReviewsBackground}>
            <div className={classes.ReviewsBackgroundShadow}></div>
            <AppWrapper>
            <div className={classes.reviewsTitle}>
                <h3>What they say</h3>
            </div>
            <div className={classes.reviews}>
                <div className={classes.review}><img src={person1}/><p>CSSpresso is my go-to coffee shop for coding. The cozy atmosphere and caffeine boost do wonders for my productivity. The staff is always friendly and accommodating, making it a great place to work.</p></div>
                <div className={classes.review}><img src={person2}/><p>I love the vibe at CSSpresso. It's the perfect spot to grab a cup of coffee and get some coding done. The environment is quiet and inspiring, and the staff is always happy to help.</p></div>
                <div className={classes.review}><img src={person3}/><p>CSSpresso is a great networking hub for techies. I've met some amazing people here and always leave feeling inspired. The coffee is top-notch, and the atmosphere is perfect for getting work done.</p></div>
            </div>
            </AppWrapper>
        </div>
    </section>
}
export default Reviews



