import React from "react";
import logo from "../../shamabakikwetu.png"
import facebook from "../../assets/icons/facebook.svg"
import twitter from "../../assets/icons/twitterx.svg";
import instagram from "../../assets/icons/instagram.svg";
import telegram from "../../assets/icons/telegram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import "./footer.style.scss"
function Finalpage () {
    return(
        <div>
            <footer>
                <div className={"footerlogo"} style={{width: '300px', height: '300px'}}>
                    <img src={logo} alt={"shamakikwetulogo"}/>
                </div>
                <div className={"all"}>
                <div className={"smicons"}>
                    <button> <img src={facebook} alt={"facebook"}/></button>
                    <button> <img src={twitter} alt={"twitter"}/></button>
                    <button> <img src={instagram} alt={"instagram"}/></button>
                    <button> <img src={telegram} alt={"telegram"}/></button>
                    <button> <img src={tiktok} alt={"tiktok"}/></button>
                    <h1> @shamba_kikwetu01</h1>
                    <p>Akiba Yetu</p>
                </div>
                <div className={"services"}>
                    <h1>Our Services</h1>
                    <ul>
                        <li> Title deed details</li>
                        <li>Property buying</li>
                        <li>Consultation</li>
                        <li>Land loans</li>
                    </ul>
                </div>
                <div className={"contact us"}>
                    <h1>Contact Us</h1>
                    <img src={phone} alt={"phone"}/>
                    <img src={mail} alt={"mail"}/>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Finalpage;