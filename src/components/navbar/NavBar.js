import React from "react";
import SearchBar from "./SearchBar";
import YTHome from "./YTHome";
import GoogleAuth from "./GoogleAuth";

const navStyle = {
    height:"60px",
    display:"grid",
    gridGap:"10px",
    alignItems:"center",
    gridTemplateColumns:"100px auto 140px",

}

const logo = {
    display:"grid",
    justifySelf:"start",
    
}

const searchBar = {
    display:"grid",
    justifySelf:"center",
    width:"100%"
}

const signIn = {
    display:"grid",
    justifySelf:"right",
    minWidth:"100%"
}

class NavBar extends React.Component {

    
    render(props){
        return(
            <div style={navStyle}>
                <div style={logo} >
                    <YTHome />
                </div>
                <div style={searchBar}>
                    <SearchBar onFormSubmit={this.props.onFormSubmit} />
                </div>
                <div style={signIn}>
                    <GoogleAuth />
                </div>
                
            </div>
        )
    }
}

export default NavBar;