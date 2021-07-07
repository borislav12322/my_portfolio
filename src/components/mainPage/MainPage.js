import s from './MainPage.module.scss';
import Particles from 'react-particles-js';
import { Spring, animated } from 'react-spring';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

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
                                        { src: 'https://image.flaticon.com/icons/png/512/377/377180.png', height: 300, width: 300 },
                                        { src: 'https://image.flaticon.com/icons/png/512/377/377176.png', height: 300, width: 300 },
                                        { src: 'https://image.flaticon.com/icons/png/512/1260/1260667.png', height: 300, width: 300 },
                                        { src: 'https://image.flaticon.com/icons/png/512/377/377182.png', height: 300, width: 300 },
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, libero esse similique quibusdam dolore molestiae aut sed veritatis at expedita provident aperiam nesciunt sunt ratione? Modi quas animi ipsam quia?
                    </p>
                    <ul className={s.list__links}>
                        <li className={s.item}>
                            <a href="https://t.me/borislav12322" className={s.link}>
                                <i class="lni lni-telegram"></i>
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="https://github.com/borislav12322" className={s.link}>
                                <i class="lni lni-github"></i>
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="https://www.linkedin.com/in/borislav-izmestiev-8b3a60210/" className={s.link}>
                                <i class="lni lni-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Transition>
    );
}

export default MainPage;
