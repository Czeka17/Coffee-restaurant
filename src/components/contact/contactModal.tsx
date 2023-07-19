import classes from './contactModal.module.css'
interface ContactModalProps{
    response: string;
    responseParagraph: string;
    hideModalHandler: () => void;
}
function ContactModal(props:ContactModalProps){
    return  <div className={classes.ModalBackdrop}>
        <div className={classes.modal}>
            <h3>{props.response}</h3>
            <p>{props.responseParagraph}</p>
            <button onClick={props.hideModalHandler}>OK</button>
        </div>
    </div>
}
export default ContactModal;