import classes from './contactModal.module.css'
import { motion, AnimatePresence } from "framer-motion";
interface ContactModalProps{
    response: string;
    responseParagraph: string;
    hideModalHandler: () => void;
}

function ContactModal(props:ContactModalProps){
    
    return  <div className={classes.ModalBackdrop}>
            
        <motion.div animate={{top:"50%", opacity:"1"}}
          transition={{ ease: "easeOut", duration: 0.3 }} className={classes.modal}>
            <h3>{props.response}</h3>
            <p>{props.responseParagraph}</p>
            <button onClick={props.hideModalHandler}>OK</button>
        </motion.div>
    </div>
}
export default ContactModal;