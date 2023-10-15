import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/Toggle";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="bg">
                <Links/>
            </div>
            <ToggleButton/>
        </div>
    )
};

export default Sidebar;