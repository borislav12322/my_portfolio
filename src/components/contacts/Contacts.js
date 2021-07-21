import s from './Contacts.module.scss';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import ContactBox from './contactBox/ContactBox';
import Phone from '../../assets/imgs/contacts/phone.svg';
import Envelope from '../../assets/imgs/contacts/envelope.svg';
import Location from '../../assets/imgs/contacts/map-marker.svg';
import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

const startState = { autoAlpha: 0, y: -50 };

function Contacts(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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

  const blurHandler = (e) => {
    switch (e.target.name){
      case 'email':
        setEmailDirty(true)
        break
        case 'from_name':
        setNameDirty(true)
        break
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
                  <label htmlFor="" className={s.field__inscription}>
                    Enter your name*
                  </label>
                  {(nameDirty && nameError) && <div className = {s.errorMessage}>{nameError}</div>}
                  <input onChange = {e => nameHandler(e)} onBlur = {e => blurHandler(e)} type="text" className={s.input} name = "from_name" />
                </div>

                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription} >
                    Enter your email*
                  </label>
                  {(emailDirty && emailError) && <div className = {s.errorMessage}>{emailError}</div>}
                  <input onChange = {e => emailHandler(e)} onBlur = {e => blurHandler(e)} type="email" className={s.input} name = "email"/>
                </div>

                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription} >
                    Enter your subject*
                  </label>
                  <input type="text" className={s.input} name = "subject"/>
                </div>

                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription}>
                    Enter your Message*
                  </label>
                  <textarea className={s.textarea} name="" id="" cols="30" rows="10" name = "message" ></textarea>
                </div>

                <button disabled = {!formValid} type = "submit" className={s.form__btn} value = "Send Message">
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
        </div>
      </div>
    </Transition>
  );
}

export default Contacts;
