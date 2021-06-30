import s from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import MyAvatar from '../../../assets/imgs/sidebar/profile_icon.png'


function Menu ({props}){
    return(
        <div className={s.menu}>
            <div className={s.container} >
                
            
            
                <div className={s.top}>
                    <NavLink to="/" className={s.logo_link}>
                        <img className={s.logo} src={MyAvatar} alt="avatar" />
                    </NavLink>
                    
                </div>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <NavLink to="/" exact activeClassName={s.active} className={s.link}>
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
        </div>
    );
}

export default Menu;