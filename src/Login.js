import React, { Component } from 'react'

class Login extends Component {

    constructor(){
        super()
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    logMeIn = () => {
        let iemail = this.emailRef.current.value
        let ipass = this.passwordRef.current.value

        if(iemail == "dev@mail.com" && ipass == "devpassword"){
            localStorage.setItem("Auth", true);
            window.location.href="/"
        }else {
            alert('Incorrect Credentials')
        }
    }

    render(){

        if(localStorage.getItem("Auth")=="true"){
            window.location.href = "/"
        }

        return(
            <div className="loginPage">
                <div class="inputBox">
                    <div className="innerBox">
                        <input placeholder="Email" ref={this.emailRef} type="email"/>
                        <input placeholder="Password" ref={this.passwordRef} type="password"/>
                        <button onClick={this.logMeIn}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;