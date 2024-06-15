"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Registerink from "./components/link";



export default function LoginPage () {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const router = useRouter();

    const onLogin = async (e) => {
        e.preventdefault();
        try {
            
            const response = await axios.post('api/users/login', user)

            console.log(response.data);

            router.push('/')

        } catch (err) {
            console.log(err)
    }
}


    return(
        <>
            <div className="d-flex justify-content-center align-items-center border-light" style={{backgroundColor: '', height: "70vh"}}>
                <div className="container mt-5 ">
                    <form action="" method="post" className="form-control form border-light" onSubmit={onLogin}>
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
                                })
                                }
                                />
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
                                })
                                }
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center mt-5 ">
                                <button
                                type="submit"
                                className="btn
                                btn-md
                                btn-outline-secondary"
                                >
                                    Submit
                                </button>
                        </div>
                    </form>
                    <Registerink />
                </div>
            </div>
        </>
    )
}
