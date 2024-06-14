"use client"


import Left from "./components/left"
import Right from "./components/right"

import React from "react";
import {axios} from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function LoginPage () {
    const [user, setUser] = React.useState({
        username: "",
        password: "",
    })

    const onSignup = async () => {
    }


    return(
        <>
            <div className="d-flex justify-content-center align-items-center border-light" style={{backgroundColor: '', height: "70vh"}}>
                <div className="container mt-5 ">
                    <form action="" method="post" className="form-control form border-light">
                    <div className="display-1 text-center">
                        Sign in
                    </div>
                        <div className="grid mt-5">
                            <div className="g-col-lg-5 g-start-lg-5 g-col-12 g-start-1">
                                <input
                                className="form-control"
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={user.username}
                                onChange={(e) => setUser({
                                    ...user, username: e.target.value
                                    })} />
                            </div>
                            <div className="g-col-lg-5 g-start-lg-5 g-col-12 g-start-1">
                                <input
                                className="form-control"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => setUser({
                                    ...user, password: e.target.value
                                    })} />
                            </div>
                            
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center mt-5 ">
                                <button type="submit" className="btn btn-md btn-outline-secondary">
                                    Submit
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};