import classes from './contactForm.module.css'
import { useState, ChangeEvent} from 'react';
import ContactModal from './contactModal';

function ContactForm(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showModal,setShowModal] = useState(false)
  const [response,setResponse] = useState('')
  const [responseParagraph, setResponseParagraph] = useState('')


  function hideModalHandler(){
    setShowModal(false)
  }
  const handleNameChange = (event:ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!name || name.trim() === ''){
      setResponse('Error!')
      setResponseParagraph('Please enter your name.')
      setShowModal(true)
      return
    }
    if(!email || email.trim() === '' || !email.includes('@')){
      setResponse('Error!')
      setResponseParagraph('Please enter valid E-mail.')
      setShowModal(true)
      return
    }
    if(!message || message.trim() === ''){
      setResponse('Error!')
      setResponseParagraph('Please enter message.')
      setShowModal(true)
      return
    }else{
      setResponse('Success!')
      setResponseParagraph('Message has been sent!')
      setShowModal(true)
      setName('')
      setEmail('')
      setMessage('')
    }
  };
    return <div className={classes.card}>
    <span className={classes.title}>Contact us here</span>
    <form className={classes.form} onSubmit={sendEmail}>
      <div className={classes.group}>
      <input placeholder='‎' type="text" value={name} required={true} onChange={handleNameChange}/>
      <label htmlFor="name" >Name</label>
      </div>
  <div className={classes.group}>
      <input placeholder='‎' value={email} type="email" id="email" name="email" required={true} onChange={handleEmailChange}/>
      <label htmlFor="email">Email</label>
      </div>
  <div className={classes.group}>
      <textarea placeholder='‎' value={message} id="comment" name="comment" rows={5} required={true} onChange={handleMessageChange}></textarea>
      <label htmlFor="comment">Comment</label>
  </div>
      <button type="submit">Submit</button>
    </form>
    {showModal && <ContactModal response={response} responseParagraph={responseParagraph} hideModalHandler={hideModalHandler} />}
  </div>
  
}
export default ContactForm;