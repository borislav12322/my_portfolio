import s from './Contacts.module.scss';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import ContactBox from './contactBox/ContactBox';
import Phone from '../../assets/imgs/contacts/phone.svg';
import Envelope from '../../assets/imgs/contacts/envelope.svg';
import Location from '../../assets/imgs/contacts/map-marker.svg';
import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import SocialBox from './socialBox/SocialBox';

const startState = { autoAlpha: 0, y: -50 };

function Contacts(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectDirty, setSubjectDirty] = useState(false);
  const [subjectError, setSubjectError] = useState('Subject cant be empty');
  const [textDirty, setTextDirty] = useState(false);
  const [textError, setTextError] = useState('Message cant be empty');
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cant be empty');
  const [nameError, setNameError] = useState('Name cant be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() =>{
    if(emailError){
      setFormValid(false)
    } else{
      setFormValid(true)
    }
  }, [emailError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Incorrect email')
    } else {
      setEmailError('')
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value);
    if(!e.target.value){
      setNameError('Please enter your name')
    } else{
      setNameError('')
    }
  }

  const subjectHandler = (e) =>{
    setSubject(e.target.value);
    if(!e.target.value){
      setSubjectError('Please enter subject')
    } else{
      setSubjectError('')
    }
  }

  const textHandler = (e) =>{
    setSubject(e.target.value);
    if(!e.target.value){
      setTextError('Please enter your message')
    } else{
      setTextError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name){
        case 'email':
        setEmailDirty(true)
        break
        case 'from_name':
        setNameDirty(true)
        break
        case 'subject':
        setSubjectDirty(true)
        break
        case 'message':
        setTextDirty(true)
    }
  }

  function sendMail(e) {
    e.preventDefault();
    emailjs.sendForm('service_om2lvr1', 'template_xw1ircw', e.target, 'user_Ycvxq8LSee4wVXydBk8kF')
      .then((result) => {
        console.log(result.text);
        // const succesful = document.createElement();
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }


  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done
        });
      }}
    >

      <div className={s.contacts}>
        <div className={s.container}>
          <h2 className={s.title}>
            CONTACT ME
          </h2>
          <div className={s.form}>
            <h3 className={s.subtite}>
              Get in touch
            </h3>
            <div className={s.content}>
              <form action="" className={s.email__form} onSubmit={sendMail} >

                <div className={s.field}>
                  
                  {(nameDirty && nameError) && <div className = {s.errorMessage}>{nameError}</div>}
                  <input onChange = {e => nameHandler(e)} onBlur = {e => blurHandler(e)} type="text" className={s.input} name = "from_name" placeholder="Enter your name" />

                  <label htmlFor="" className={s.field__inscription}>
                    Enter your name*
                  </label>
                </div>

                <div className={s.field}>
                  
                  {(emailDirty && emailError) && <div className = {s.errorMessage}>{emailError}</div>}
                  <input onChange = {e => emailHandler(e)} onBlur = {e => blurHandler(e)} type="email" className={s.input} name = "email" placeholder="Enter your email" />
                  <label htmlFor="" className={s.field__inscription} >
                    Enter your email*
                  </label>
                </div>

                <div className={s.field}>
                  
                  {(subjectDirty && subjectError) && <div className = {s.errorMessage}>{subjectError}</div>}
                  <input onChange = {e => subjectHandler(e)} onBlur = {e => blurHandler(e)} type="text" className={s.input} name = "subject" placeholder="Enter your subject" />
                  <label htmlFor="" className={s.field__inscription} >
                    Enter your subject*
                  </label>
                </div>

                <div className={s.field}>
                  
                  {(textDirty && textError) && <div style={{top:'10px'}} className = {s.errorMessage}>{textError}</div>}
                  <textarea placeholder="Enter your Message*" onChange = {e => textHandler(e)} onBlur = {e => blurHandler(e)} className={s.textarea} cols="30" rows="10" name = "message" />
                  <label htmlFor="" className={s.textarea_label}>
                    Enter your Message*
                  </label>
                </div>

                <button disabled = {!formValid} onClick={sendMail} type = "submit" className={s.form__btn} value = "Send Message">
                Send Message
                </button>
              </form>
              <div className={s.contact__box}>
                <ContactBox imgLink={Phone} titleName='Phone' text__rowOne='+79268718086' />
                <ContactBox imgLink={Envelope} titleName='Email' text__rowOne='borislavizmestiev@gmail.com' />
                <ContactBox imgLink={Location} titleName='Adress' text__rowOne='Russian Federation, Moscow' />
              </div>
            </div>
          </div>
          <div className={s.social}>
              <SocialBox boxLink='https://github.com/borislav12322' socialTextLink='Github' socialName = 'github' />
              <SocialBox boxLink='https://www.linkedin.com/in/borislav-izmestiev-8b3a60210/' socialTextLink='LinkedIn' socialName = 'linkedin' />
              <SocialBox boxLink='https://t.me/borislav12322' socialTextLink='Telegram' socialName = 'telegram' />
              <SocialBox boxLink='https://vk.com/borislav12322' socialTextLink='VK' socialName = 'vk' />
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Contacts;
