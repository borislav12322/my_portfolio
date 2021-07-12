import s from './Contacts.module.scss';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import ContactBox from './contactBox/ContactBox';
import Phone from '../../assets/imgs/contacts/phone.svg';
import Envelope from '../../assets/imgs/contacts/envelope.svg';
import Location from '../../assets/imgs/contacts/map-marker.svg';

const startState = { autoAlpha: 0, y: -50 };

function Contacts(props) {
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
              <form action="" className={s.email__form}>
                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription}>
                    Enter your name*
                  </label>
                  <input type="text" className={s.input} />
                </div>
                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription}>
                    Enter your email*
                  </label>
                  <input type="text" className={s.input} />
                </div>
                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription}>
                    Enter your subject*
                  </label>
                  <input type="text" className={s.input} />
                </div>
                <div className={s.field}>
                  <label htmlFor="" className={s.field__inscription}>
                    Enter your Message*
                  </label>
                  <textarea className={s.textarea} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className={s.form__btn}>
                  SEND MAIL
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
