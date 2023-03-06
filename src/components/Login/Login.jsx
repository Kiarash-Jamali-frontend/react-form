import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import "./../../../node_modules/animate.css/animate.min.css";
import validate from "../validate";

const Login = () => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = ({ target }) => {
        setData({ ...data, [target.name]: target.value });
    }

    const touchedHandler = ({ target }) => {
        setTouched({ ...touched, [target.name]: true });
    }

    useEffect(() => {
        setErrors(validate("login", data));
    }, [data]);

    return (
        <>
            <div className={styles.container + " animate__animated animate__flipInX"}>
                {/*Title*/}
                <h1 className={styles.title}>Login To Site</h1>

                <form action="" method="get" className={styles.form}>
                    {/*User name*/}
                    <div>
                        <label htmlFor="name">Name</label>

                        <input type="text" id="name" name="name" placeholder="Ex: Kiarash"
                            onChange={changeHandler} onFocus={touchedHandler}
                            className={errors.name && touched.name ? styles.errorBorder : ""} />

                        {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>

                    {/*Password*/}
                    <div>
                        <label htmlFor="password">Password</label>

                        <input type="text" id="password" name="password" placeholder="Ex: Kiarash"
                            onChange={changeHandler} onFocus={touchedHandler}
                            className={errors.password && touched.password ? styles.errorBorder : ""} />

                        {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>

                    {/*Buttons*/}
                    <div className={styles.buttons}>
                        <a href="">Login</a>
                        <a href="">Sign up</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;