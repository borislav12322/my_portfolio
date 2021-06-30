import s from './SideBar.module.scss';
import MyAvatar from '../../assets/imgs/sidebar/profile_icon.png'
import { NavLink } from 'react-router-dom';
import {useState} from "react";
import  Menu  from './menu/Menu';

const SideBar = (active, setActive, props) => {
    const [information, setInformation] = useState("");
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    return (
        <header className={s.sidebar} className={navigationToggler ? "sidebar active" : "active"}>
            <button className={s.mobileBtn} onClick={handleNavigationToggler} className={s.mobileBtn}>
                    <i class="lni lni-menu"></i>
            </button>
            <Menu/>
            
        </header>
    );
}

export default SideBar;
