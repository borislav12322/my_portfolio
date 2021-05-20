import React from "react";
import s from './About.module.scss';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

function About(props) {
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
            <div className={s.about}>
                <div className={s.container}>
                    <h2 className={s.title_main}>
                        About me
                    </h2>
                    <div className={s.content}>
                        <img src="../../assets/imgs/sidebar/profile_icon.png" style={{width: "400px"}} alt="" className={s.img} />
                        <div className={s.inner}>
                            <h3 className={s.name_title}>I am Borislav Izmestiev</h3>
                            <p className={s.text_about_me}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus? Tenetur provident adipisci nemo non, sequi voluptatibus saepe quae nam, dolorem nisi pariatur! Eaque ipsam voluptates repellendus mollitia quam enim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default About;
