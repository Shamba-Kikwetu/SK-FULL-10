import React from "react";
import {Outlet} from "react-router-dom";
import Frontslider from "../../Components/sliders/slideritem.component";
import Search from "./searchsection.component";
import Landsnotbuy from "./landsnotbuy.component";
import Finalpage from "../../Components/footer/footer.component";





function Hello() {
    return (
        <div>
            <Outlet/>
            <Frontslider/>
            <Search/>
            <Landsnotbuy/>
            <Finalpage/>
        </div>
    );
}

export default Hello;
