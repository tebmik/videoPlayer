import React from "react";
import "./navbar.css";


const logoStyle ={
    display:"flex",
    alignItems:"center",
    alignContent:"spaceAround",
    width:"100%"
}




const YTHome = () => {
    return(
        <div style={logoStyle}>
            <i className="ui red youtube icon"></i>
            <div className="logo-title"><h4>DueTube</h4></div>
        </div>
    );
}

export default YTHome;