import s from './MainPage.module.scss';
import Particles from 'react-particles-js';
import { Spring, animated } from 'react-spring';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import HTML from '../../assets/imgs/mainPage/html_icon.png';
import CSS from '../../assets/imgs/mainPage/css_icon.png';
import React from '../../assets/imgs/mainPage/react_icon.png';
import JS from '../../assets/imgs/mainPage/js_icon.png';

const startState = { autoAlpha: 0, y: -50 };

function MainPage(props) {

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

            <div className={s.main_page}>
                <div className={s.container}>
                    <Particles className={s.background}
                        params={{
                            particles: {
                                number: {
                                    value: 20,
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                },
                                color: {
                                    value: "#CCC",
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                size: {
                                    value: 20
                                },
                                random: true,
                                anim: {
                                    enable: true,
                                    size_min: 10,
                                    speed: 8,
                                    sync: false,
                                },

                                line_linked: {
                                    enable: true,
                                },
                                move: {
                                    random: true,
                                    speed: 2,
                                    direction: "none",
                                    out_mode: "out",
                                },
                                shape: {
                                    type: 'images',
                                    images: [
                                        { src: HTML, height: 300, width: 300 },
                                        { src: CSS, height: 300, width: 300 },
                                        { src: React, height: 300, width: 300 },
                                        { src: JS, height: 300, width: 300 },
                                    ]
                                }
                            },
                        }} />
                    <h1 className={s.title}>Hi, i am
                        <Spring
                            from={{ color: '#FFFFFF' }}
                            to={{ opacity: 1, color: '#007bff' }}
                            config={{ duration: 2000 }}>
                            {styles => (
                                <animated.span style={styles}>
                                    &nbsp;Borislav Izmestiev
                                </animated.span>)}
                        </Spring>
                    </h1>
                    <p className={s.text}>
                        I am a web-developer with experience in creating web-sites (HTML, CSS, JS). I can provide clean and W3C standart code. Also i have interest to learn new technologies. I am ready for full-time or part-time work.
                    </p>
                    <ul className={s.list__links}>
                        <li className={s.item}>
                            <a href="https://t.me/borislav12322" className={s.link}>
                                <i className="lni lni-telegram"></i>
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="https://github.com/borislav12322" className={s.link}>
                                <i className="lni lni-github"></i>
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="https://www.linkedin.com/in/borislav-izmestiev-8b3a60210/" className={s.link}>
                                <i className="lni lni-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Transition>
    );
}

export default MainPage;
