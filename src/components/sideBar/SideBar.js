import './SideBar.scss';
import {useState} from "react";
import  MenuMain  from './menu/Menu';

const SideBar = () => {
    const [navigationToggler, setNavigationToggler] = useState(false);
    const showSidebar = () => setNavigationToggler(!navigationToggler);

    return (
        <header className={navigationToggler ? "sidebar active" : "sidebar"} onClick={showSidebar} >
            <button  onClick={showSidebar} className='mobileBtn'>
                    <i className="lni lni-menu"></i>
            </button>
            <MenuMain/>
        </header>
        
    );
}

export default SideBar;