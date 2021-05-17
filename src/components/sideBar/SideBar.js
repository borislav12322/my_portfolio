import s from './SideBar.module.scss';
import MyAvatar from '../../assets/imgs/sidebar/profile_icon.png'

function SideBar() {
    return (
        <aside className={s.sidebar}>
            <div className={s.container}>
                <div className={s.top}>
                    <a href="/home" className={s.logo_link}>
                        <img className={s.logo} src={MyAvatar} alt="avatar"/>
                    </a>
                </div>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a href="/home" className={s.link}>
                                HOME
                        </a>
                        </li>
                        <li className={s.item}>
                            <a href="/about" className={s.link}>
                                ABOUT
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="portfolio" className={s.link}>
                                PORTFOLIO
                        </a>
                        </li>
                        <li className={s.item}>
                            <a href="contacts" className={s.link}>
                                CONTACTS
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={s.bottom}>
                    <small className={s.copyright}>
                        © 2021 Borislav Izmestiev
                    </small>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
