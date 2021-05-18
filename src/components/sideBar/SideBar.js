import s from './SideBar.module.scss';
import MyAvatar from '../../assets/imgs/sidebar/profile_icon.png'
import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <header className={s.sidebar}>
            <div className={s.container}>
                <div className={s.top}>
                    <NavLink to="/home" className={s.logo_link}>
                        <img className={s.logo} src={MyAvatar} alt="avatar" />
                    </NavLink>
                </div>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <NavLink to="/home" activeClassName={s.active} className={s.link}>
                                HOME
                        </NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to="/about"
                            activeClassName={s.active}
                            className={s.link}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to="portfolio"
                            activeClassName={s.active}
                            className={s.link}>
                                PORTFOLIO
                        </NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to="contacts"
                            activeClassName={s.active}
                            className={s.link}>
                                CONTACTS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={s.bottom}>
                    <small className={s.copyright}>
                        © 2021 Borislav Izmestiev
                    </small>
                </div>
            </div>
        </header>
    );
}

export default SideBar;
