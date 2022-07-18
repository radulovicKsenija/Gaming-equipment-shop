import React, {useEffect, useState} from 'react';
import {
    useNavigate
} from "react-router-dom";

import './login.css';
import './input.css';
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import axiosInstance from "../../services/api";

function Login(props) {
    let navigate = useNavigate();
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameCheck, setUsernameCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);

    const validateUsername = () => {
        if (username === "") {
            setUsernameErr("Username je obavezan!");
            setUsernameCheck(false);
        } else {
            if (username.length < 4) {
                setUsernameErr("Username mora imati 4 karaktera!");
                setUsernameCheck(false);
            } else {
                setUsernameErr("");
                setUsernameCheck(true);
            }
        }
    }

    const validatePassword = () => {
        if (password === ""){
            setPasswordErr("Lozinka je obavezna!");
            setPasswordCheck(false);
        }else{
            if(password.length < 4){
                setPasswordErr("Lozinka mora imati 4 karaktera!");
                setPasswordCheck(false);
            }else{
                setPasswordErr("");
                setPasswordCheck(true);
            }
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if(usernameCheck && passwordCheck){
                const {data} = await axiosInstance.post("/token/", {username, password});
                if(data){
                    localStorage.setItem("USER_ITEM", data.access);
                    window.location.href = '/'
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        validateUsername();
    }, [username]);

    useEffect(() => {
        validatePassword();
    }, [password]);

    return (
        <>
            <div className={"login-container"}>
                <div className={"login-form"}>
                    <h2>Prijavi se</h2>
                    <form>
                        <label htmlFor="username">Username</label><br/>
                        <input
                            type="text"
                            value={username}
                            id={"username"}
                            placeholder={"Tvoj username"}
                            className={usernameCheck ? "" : "error-border"}
                            onChange={(e) =>{
                                setUsername(e.target.value);
                            }}
                        /><br/>
                        <span className={"error"}>{usernameErr}</span>
                        <br/>
                        <label htmlFor="password">Lozinka</label><br/>
                        <input
                            type="password"
                            value={password}
                            id={"password"}
                            placeholder={"Tvoja lozinka"}
                            className={passwordCheck ? "" : "error-border"}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br/>
                        <span className={"error"}>{passwordErr}</span>
                        <br/>
                        <div className={"login-button"}>
                            <Button handleLogin={handleLogin}/>
                        </div>
                    </form>
                    <div className={"registration-container"}>
                        <h2>Nemaš nalog?</h2>
                        <Link to={"/registration"}>
                            <button className={"registration-button"}>Registracija</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
