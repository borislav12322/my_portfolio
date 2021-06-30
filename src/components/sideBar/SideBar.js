import './SideBar.scss';
import MyAvatar from '../../assets/imgs/sidebar/profile_icon.png'
import { NavLink } from 'react-router-dom';
import {useState} from "react";
import  Menu  from './menu/Menu';

const SideBar = (active, setActive, props) => {
    
    const [navigationToggler, setNavigationToggler] = useState(false);
    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    return (
        <header className={navigationToggler ? "sidebar active" : "sidebar"}>
            <button  onClick={handleNavigationToggler} className='mobileBtn'>
                    <i class="lni lni-menu"></i>
            </button>
            <Menu/>         
        </header>
    );
}

export default SideBar;
