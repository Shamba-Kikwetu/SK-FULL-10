
import React from "react";
import logo from "../../shamabakikwetu.png";
import {Link, Outlet} from "react-router-dom";
import "./navigation.style.scss";

 const Navbar = () =>
 {
     return (
         <div className={"maindiv"} >

             {/*shamba logo*/}
             <Link className={"Logocontainer"}  to={"/home"}>
                 <div className={"shamabalogo"}>
                     <img src={logo} alt="shamba-kikwetu-logo" className="h-50 w-60"/>

                 </div>
             </Link>

             <div className={"links"}>
             {/*Homepage linking*/}
                 <Link className={"homecontainer"} to={"/home"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                     <h1 className="text-black">Home</h1>

                 </Link>

                 {/*//Checkland linking*/}
             <Link className={"checkland-con"} to={"/checkland"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 <h1 className="text-black">Check Land</h1>
             </Link>

             {/*Properties Linking*/}
             <Link  className={"properties-con"} to={"/properties"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 <h1 className="text-black">Properties</h1>
             </Link>

             {/*About Us linking*/}
             <Link className={"aboutus-con"} to={"/aboutus"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 <h1 className="text-black">About Us</h1>
             </Link>

             {/*Contact Us Linking*/}
             <Link className={"contactus-con"} to={"/contactus"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 <h1 className="text-black">Contact Us</h1>
             </Link>

             </div>
             <Link  className={"login"} to={"/login"}   style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 <h1 className={"text"}> Log in/Sign Up</h1>
             </Link>

             <Outlet/>
         </div>
     );

 }

export default Navbar;