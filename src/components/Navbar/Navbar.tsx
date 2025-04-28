import "./Navbar.css";
import  { Navlink } from "../Navlink/Navlink";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="">
                <img src="/TestLogo.svg" alt="Logo" />
            </div>
            <div className="navlink-container">
                <Navlink imageUrl={"home_FILL0_wght300_GRAD0_opsz24.svg"} text={"Overview"} />
                <Navlink imageUrl={"group_FILL0_wght300_GRAD0_opsz24.svg"} text={"Patients"} />
                <Navlink imageUrl={"BirthIcon.svg"} text={"Schedule"} />
                <Navlink imageUrl={"chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"} text={"Message"} />
                <Navlink imageUrl={"credit_card_FILL0_wght300_GRAD0_opsz24.svg"} text={"Transactions"} />
            </div>
            <div className="practitioner-container">
                <div className="">
                    <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="Logo" />
                </div>
                <div className="practitioner-info">
                    <p className="body-emphasized-14pt">Dr Jose Simmons</p>
                    <p className="body-secondary-info-14pt">General Practitioner</p>
                </div>
                <div className="settings-container">
                    <div>
                        <img src="/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="Logo" />
                    </div>
                    <div>
                        <img src="/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="Logo" />
                    </div>
                </div>
            </div>
        </nav>
    );
}