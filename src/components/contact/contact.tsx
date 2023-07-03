import Header from '../header/header';
import Reservation from '../reservation/reservation';
import classes from './contact.module.css'

function Contact(){
    return  <div>
       <Header bgi={process.env.PUBLIC_URL + '/contactHeader.webp'} headerText='Contact Us' headerParagraph='We’d love to hear from you! Please don’t hesitate to reach out to us with any questions, comments, or concerns – we’re here to help.'/>
       <div>
        <Reservation/>
       </div>
       <div>
        
       </div>
    </div>
}
export default Contact;