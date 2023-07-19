import coffee1 from '../../assets/images/coffee1.webp'
import coffee2 from '../../assets/images/coffee2.webp'
import coffee3 from '../../assets/images/coffee3.webp'
import AppWrapper from '../ui/wrapper'
import classes from './coffee.module.css'

function Coffee() {
    return (
      <section className={classes.coffeeSection}>
        <AppWrapper>
          <div className={classes.coffeeContainer}>
            <div className={classes.coffeeImage}>
              <img src={coffee2} alt="Coffee 2" />
              <div className={classes.imageOverlay}><p>Savor the rich aroma and embrace the day with newfound energy.</p></div>
            </div>
            <div className={classes.coffeeImage}>
              <img src={coffee1} alt="Coffee 1" />
              <div className={classes.imageOverlay}><p>A delightful cup of coffee can ignite your passion and fuel your dreams.</p></div>
            </div>
            <div className={classes.coffeeImage}>
              <img src={coffee3} alt="Coffee 3" />
              <div className={classes.imageOverlay}><p>Experience the warmth of a perfect brew and let inspiration awaken within.</p></div>
            </div>
          </div>
        </AppWrapper>
      </section>
    );
  }
  
  export default Coffee;
  