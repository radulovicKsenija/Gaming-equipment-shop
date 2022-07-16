import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import axiosInstance from "../../services/api";
import '../Login/login.css';

function Register(props) {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const [surname, setSurname] = useState("");
    const [surnameErr, setSurnameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const [username, setUsername] = useState("");
    const [usernameErr, setUsernameErr] = useState("");

    const [nameCheck, setNameCheck] = useState(false);
    const [surnameCheck, setSurnameCheck] = useState(false);

    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [usernameCheck, setUsernameCheck] = useState(false);

    const validateName = () => {
        if (name === "") {
            setNameErr("Ime je obavezno!");
            setNameCheck(false);
        } else {
            if (name.length < 4) {
                setNameErr("Ime mora imati 4 karaktera!");
                setNameCheck(false);
            } else {
                setNameErr("");
                setNameCheck(true);
            }
        }
    }

    const validateSurname = () => {
        if (surname === "") {
            setSurnameErr("Prezime je obavezno!");
            setSurnameCheck(false);
        } else {
            if (surname.length < 4) {
                setSurnameErr("Prezime mora imati 4 karaktera!");
                setSurnameCheck(false);
            } else {
                setSurnameErr("");
                setSurnameCheck(true);
            }
        }
    }

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

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            setEmailErr("E-mail je obavezan!");
            setEmailCheck(false);
        } else {
            if (email.match(regex)) {
                setEmailErr("");
                setEmailCheck(true);
            } else {
                setEmailErr("Email nije u korektnom formatu");
                setEmailCheck(false);
            }
        }
    }

    const validatePassword = () => {
        if (password === "") {
            setPasswordErr("Lozinka je obavezna!");
            setPasswordCheck(false);
        } else {
            if (password.length < 4) {
                setPasswordErr("Lozinka mora imati 4 karaktera!");
                setPasswordCheck(false);
            } else {
                setPasswordErr("");
                setPasswordCheck(true);
            }
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            if (nameCheck && surnameCheck && usernameCheck && emailCheck && passwordCheck) {
                const {data} = await axiosInstance.post("/register", {username:username, email: email, password:password,first_name:name, last_name: surname});
                // if (data.isSuccess) {
                //     window.alert("Uspjesna registracija!")
                //     navigate("/login");
                // }else if(data.msg === "Email already exists"){
                //     window.alert("E-mail vec postoji!")
                //     setName_surname("");
                //     setEmail("");
                //     setPassword("");
                // }
                // else {
                //     setName_surname("");
                //     setEmail("");
                //     setPassword("");
                // }
                console.log(data)
            }
        } catch (e) {
            console.log(e)
        }
    };


    useEffect(() => {
        validateName();
    }, [name]);

    useEffect(() => {
        validateSurname();
    }, [surname]);

    useEffect(() => {
        validateUsername();
    }, [username]);

    useEffect(() => {
        validateEmail();
    }, [email]);

    useEffect(() => {
        validatePassword();
    }, [password]);

    return (
        <>
            <div className={"register-container"}>
                <div className={"register-form"}>
                    <h2>Registruj se</h2>
                    <form>
                        <label htmlFor="name">Ime</label><br/>
                        <input
                            type="text"
                            placeholder={"Ime"}
                            id={"name"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={nameCheck ? "" : "error-border"}
                        /><br/>
                        <span className={"error"}>{nameErr}</span>
                        <br/>
                        <label htmlFor="surname">Prezime</label><br/>
                        <input
                            type="text"
                            placeholder={"Prezime"}
                            id={"surname"}
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className={surnameCheck ? "" : "error-border"}
                        /><br/>
                        <span className={"error"}>{surnameErr}</span>
                        <br/>
                        <label htmlFor="username">Username</label><br/>
                        <input
                            type="text"
                            placeholder={"Username"}
                            id={"username"}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={usernameCheck ? "" : "error-border"}
                        /><br/>
                        <span className={"error"}>{usernameErr}</span>
                        <br/>
                        <label htmlFor="email">E-mail</label><br/>
                        <input
                            type="email"
                            placeholder={"Tvoj e-mail"}
                            id={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={emailCheck ? "" : "error-border"}
                        /><br/>
                        <span className={"error"}>{emailErr}</span>
                        <br/>
                        <label htmlFor="password">Lozinka</label><br/>
                        <input
                            type="password"
                            placeholder={"Tvoja lozinka"}
                            id={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={passwordCheck ? "" : "error-border"}
                        /><br/>
                        <span className={"error"}>{passwordErr}</span><br/>
                        <div className={"register-button"}>
                            <button onClick={(e) => {
                                handleRegister(e);
                            }}>Registruj se
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
