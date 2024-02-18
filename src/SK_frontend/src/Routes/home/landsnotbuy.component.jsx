import React from "react";
import image1 from "../../assets/shambakikweru/lands/image1.jpg"
import image2 from "../../assets/shambakikweru/lands/image2.jpg"
import "./landsnotbuy.style.scss"
function Landsnotbuy() {
    return(
        <div className={"lands"}>
            <h1 className={"landsheading"}>Lands you cannot buy</h1>
               <div className={"sub-lands"}>
                <div className={"image-container"}>
                    <img className={"image1"} src={image1} alt={"beautiful land 1"}
                         style={{width: '400px', height: '400px'}}/>
                    <img className={"image2"} src={image2} alt={"landscape horizon"}
                         style={{width: '400px', height: '400px'}}/>
                </div>
                <div className={"words"}>
                    <p>Avoid buying land from con-artist that sell lands that are not permitted to be sold and belong to
                        the goverment click here to access a map that lists those lands location</p>
                    <button className={"butlands"}> Click here</button>
                </div>
            </div>
        </div>
    );
}

export default Landsnotbuy;