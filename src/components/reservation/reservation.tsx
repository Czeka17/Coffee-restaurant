import AppWrapper from "../ui/wrapper";
import classes from './reservation.module.css'
function Reservation(){
    return <div className={classes.reservation}>
       <AppWrapper>
       <h3>
            Reservation
        </h3>
        <p>Grab your laptop and head over to CSSpresso for a productive day of coding and caffeine. Call or visit our website to reserve your table and discover the perfect spot to work and caffeinate.</p>
       <div className={classes.contact}>
       <button>BOOK A TABLE NOW</button>
        <h3>Telephone reservations</h3>
        <span>12 34 56 7890</span>
       </div>
       </AppWrapper>
    </div>
}
export default Reservation;