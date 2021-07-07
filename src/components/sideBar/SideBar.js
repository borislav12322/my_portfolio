import './SideBar.scss';
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
                    <i className="lni lni-menu"></i>
            </button>
            <Menu/>         
        </header>
    );
}

export default SideBar;
