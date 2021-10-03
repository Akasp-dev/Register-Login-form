import classNames from 'classnames';
import AOS from 'aos';
import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            whichHidden: "onRight",
            registerClass: "",
            loginClass: "hidden"
        };
        this.props = props;
    }
    handleClick = () =>{
        const {whichHidden} = this.state;
        if(whichHidden === "onRight"){
            this.setState({
                registerClass: "hidden",
                loginClass: "",
                whichHidden: "onLeft"
            });
        }else{
            this.setState({
                registerClass: "",
                loginClass: "hidden",
                whichHidden: "onRight"
            });
        }
    }
  
    render(){
        return(
            <>
            <div className="form-window" style={this.props.style}>
                <div className={classNames("cover", this.state.whichHidden)}>
                    <div className={classNames("register", this.state.registerClass)}>
                        <h1>Posiadasz konto?</h1>
                        <button onClick={this.handleClick}>Zaloguj się</button>
                    </div>
                    <div className={classNames("login", this.state.loginClass)}>
                        <h1>Nie posiadasz konta?</h1>
                        <button onClick={this.handleClick}>Zarejestruj się</button>
                    </div>
                </div>
                <form>
                    <h1>Rejestracja</h1>
                    <input type="text" placeholder="Nazwa uzytkownika" value="fdsafdsafsdafsda"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="password" placeholder="Hasło"></input>
                    <input type="password" placeholder="Potwierdź hasło"></input>
                    <input type="submit" value="Zarejestruj się"></input>
                </form>
                <form>
                    <h1>Logowanie</h1>
                    <input type="text" placeholder="Login"></input>
                    <input type="password" placeholder="Hasło"></input>
                    <input type="submit" value="Zaloguj się"></input>
                </form>
            </div>
            </> 
        );
    }
  }
export default Form;