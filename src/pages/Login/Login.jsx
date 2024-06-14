import React, { useState } from 'react';
import styles from './Login.module.css';


const Login = () => {
    const [loginData, setLoginData] = useState({
        userName: '',
        password: '',
    });

    const handleSubmit = () => {

    };

    const handleChange = (e) => {
        setLoginData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    }
    return (
        <div className={styles.loginPage}>
            <div className={styles.container}>
                <h1>Login</h1>
                <form className={styles.form}>
                    <label>Username:
                        <input
                            type="text"
                            name="userName"
                            value={loginData.userName}
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter Username'
                            required
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter Password'
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login