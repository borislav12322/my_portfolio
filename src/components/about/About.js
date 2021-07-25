import React from "react";
import s from './About.module.scss';
import ListRow from './listRow/ListRow';
import { Transition } from "react-transition-group";
import { Spring, animated } from 'react-spring';
import { TweenMax } from "gsap/all";


import Avatar from '../../assets/imgs/about/my_photo.jpeg';

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
                        <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1, color: '#FFFFFF' }}
                            config={{ duration: 2000 }}
                        >
                            {styles => (
                                <animated.span style={styles}>
                                    About me
                                </animated.span>)}
                        </Spring>
                    </h2>
                    <div className={s.content}>
                        <div className={s.img__box}>
                            <img src={Avatar} alt="" className={s.img} />
                        </div>
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
                            I am a web-developer with experience in creating web-sites (HTML, CSS, JS). I can provide clean and W3C standart code. Also i have interest to learn new technologies. I am ready for full-time or part-time work.
                            </p>
                            <ul className={s.list}>
                                <ListRow
                                    keyText='Full Name'
                                    valueText='Borislav Izmestiev'
                                    className={s.rowStyle}
                                />
                                <ListRow
                                    keyText='Age'
                                    valueText='25'
                                    className={s.rowStyle}
                                />
                                <ListRow
                                    keyText='Languages'
                                    valueText='Russian, English'
                                    className={s.rowStyle}
                                />
                                <ListRow
                                    keyText='Freelance'
                                    valueText='Available'
                                    className={s.rowStyle}
                                />
                            </ul>

                            <a href="https://drive.google.com/file/d/1xJcRsOUwQTuatlXvMZVerG2FBe9mznNM/view?usp=sharing" className={s.link_cv} target="_blank">
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
