import s from './MainPage.module.scss';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particles from 'react-particles-js';




function MainPage() {
    return (
        <div className={s.main_page}>
            <div className={s.container}>
                <Particles className={s.background}
                    params={{
                        particles: {
                            number: {
                                value: 260,
                                density: {
                                    enable: false,
                                },
                            },
                            color: {
                                value: "#FFFFFF",
                            },
                            opacity: {
                                value: 0.5,
                            },
                            size: {
                                value: 5,
                                random: true,
                                anim: {
                                    speed: 8,
                                    size_min: 0.3,
                                },
                            },
                            line_linked: {
                                enable: false,
                            },
                            move: {
                                random: true,
                                speed: 1,
                                direction: "top",
                                out_mode: "out",
                            },
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
                            }
                        }
                    }} />
                <h1 className={s.title}>Hi, i am Borislav Izmestiev</h1>
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
