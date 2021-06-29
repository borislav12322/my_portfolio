import React from "react";
import s from './About.module.scss';
import ListRow from './listRow/ListRow';
import { Transition } from "react-transition-group";
import { Spring, animated } from 'react-spring';
import { TweenMax } from "gsap/all";


import Avatar from '../../assets/imgs/about/free-icon-avatar-855993.png';

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
                        <img src={Avatar} alt="" className={s.img} />
                        <div className={s.inner}>

                            <h3 className={s.name_title}>I am
                                <Spring
                                    from={{ color: '#FFFFFF' }}
                                    to={{ opacity: 1, color: '#007bff' }}
                                    config={{ duration: 2000 }}>
                                    {styles => (
                                        <animated.span style={styles}>
                                            &nbsp;Borislav Izmestiev
                                        </animated.span>)}
                                </Spring>
                            </h3>
                            <p className={s.text_about_me}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus? Tenetur provident adipisci nemo non, sequi voluptatibus saepe quae nam, dolorem nisi pariatur! Eaque ipsam voluptates repellendus mollitia quam enim.
                            </p>
                            <ul className={s.list}>
                                <ListRow
                                    keyText='Full Name'
                                    valueText='Borislav Izmestiev'
                                    className = {s.rowStyle}
                                />
                                <ListRow
                                    keyText='Age'
                                    valueText='25'
                                    className = {s.rowStyle}
                                />
                                <ListRow
                                    keyText='Languages'
                                    valueText='Russian, English'
                                    className = {s.rowStyle}
                                />
                                <ListRow
                                    keyText='Freelance'
                                    valueText='Available'
                                    className = {s.rowStyle}
                                />
                            </ul>

                            <a href="#" className={s.link_cv}>
                                DOWNLOAD CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default About;
