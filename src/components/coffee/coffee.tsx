import coffee1 from '../../assets/images/coffee1.webp'
import coffee2 from '../../assets/images/coffee2.webp'
import coffee3 from '../../assets/images/coffee3.webp'
import AppWrapper from '../ui/wrapper'
import classes from './coffee.module.css'

function Coffee(){
    return<section className={classes.coffeeSection}>
        <AppWrapper>
        <div className={classes.coffeeContainer}>
            <div className={classes.coffeeImage}><img src={coffee2} /></div>
            <div className={classes.coffeeImage}><img src={coffee1}/></div>
            <div className={classes.coffeeImage}><img src={coffee3} /></div>
        </div>
        </AppWrapper>
    </section>
}

export default Coffee