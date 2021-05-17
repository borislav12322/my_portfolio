import s from './SideBar.module.scss';
import MyAvatar from '../../assets/imgs/sidebar/illustration-of-a-stylish-young-man-avatar-of-a-man-for-profile_15870-706.jpeg'

function SideBar() {
    return (
        <aside className={s.sidebar}>
            <div className={s.container}>
                <div className={s.top}>
                    <img src={MyAvatar} alt="avatar" />
                </div>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                HOME
                        </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                ABOUT
                        </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                PORTFOLIO
                        </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                CONTACTS
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;
