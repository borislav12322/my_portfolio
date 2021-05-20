import s from './MainPage.module.scss';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particles from 'react-particles-js';
import { Spring, animated } from 'react-spring';



function MainPage() {
    return (
        <div className={s.main_page}>
            <div className={s.container}>
                <Particles className={s.background}
                    params={{
                        particles: {
                            number: {
                                value: 30,
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                            },
                            // color: {
                            //     value: "#CCC",
                            // },
                            // opacity: {
                            //     value: 0.5,
                            // },
                            size: {
                                value: 20},
                            //     random: true,
                            //     anim: {
                            //         enable: true,
                            //         size_min: 10,
                            //         speed: 8,
                            //         sync: false,
                            //     },
                            // },
                            // line_linked: {
                            //     enable: false,
                            // },
                            // move: {
                            //     random: true,
                            //     speed: 2,
                            //     direction: "top",
                            //     out_mode: "out",
                            // },
                            shape: {
                                type: 'images',
                                images: [
                                    {src: 'https://image.flaticon.com/icons/png/512/2305/2305876.png', height: 300, width: 300},
                                    {src: 'https://image.flaticon.com/icons/png/512/732/732190.png', height: 300, width: 300},
                                    {src: 'https://image.flaticon.com/icons/png/512/1260/1260667.png', height: 300, width: 300},
                                ]
                            }
                        },

                        interactivity:{
                            events:{
                                onHover:{
                                    enable: true,
                                    mode: "repulse",
                                },
                                onClick:{
                                    enable: true,
                                    mode: 'repulse',
                                }
                            },
                        },
                    }} />
                <h1 className={s.title}>Hi, i am 
                <Spring
                from={{opacity: 0}}
                to={{opacity: 1, color: 'grey'}}
                config={{duration: 5000}}>
                    {styles =>(
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
                        <a href="" className={s.link}>
                            <TelegramIcon />
                        </a>
                    </li>
                    <li className={s.item}>
                        <a href="" className={s.link}>
                            <GitHubIcon />
                        </a>
                    </li>
                    <li className={s.item}>
                        <a href="" className={s.link}>
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainPage;
