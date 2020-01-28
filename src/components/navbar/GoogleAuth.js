import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";


class GoogleAuth extends React.Component {

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    componentDidMount() {
        window.gapi.load("client: auth2", () => {
            window.gapi.client.init({
                clientId:"831874009542-uqnemmpn734kd14vr9vsh8cpu0pam9on.apps.googleusercontent.com",
                scope:"email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null){
            return (
                <button className="ui basic loading button">
                    <i className="google icon" />
                    Loading
                </button>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui positive basic button">
                    <i className="google icon" />
                    SIGN OUT
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui primary basic button">
                    <i className="google icon" />
                    SIGN IN
                </button>
            );
        }
    }

    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, 
    {signIn, signOut}
)
(GoogleAuth);