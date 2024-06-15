"use client"
import  axios  from "axios"
import Link from "next/link"
import { NextResponse } from "next/server"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LoginLink from "./components/link"
import { PrismaClient } from "@prisma/client"




export default function RegisterPage () {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const db = new PrismaClient()
    const router = useRouter()
    const onSignup = async (e)=> {
        e.preventDefault();
        try {
            const response = await axios.post('api/users/signup', user);
            console.log("User Details")
            console.log(response.data["username"]);
            console.log("EOD")

            router.push('/login')

        } catch (err) {
            console.log(err)
        }


    }


    return(
        <>
            <div>
                <div className="card">
                        <div className="card-body ">
                            <div className="
                                card-header
                                text-center
                                bg-light-subtle
                                mb-5"
                            >
                                Create Your Account
                            </div>
                            <div className="
                                grid
                                mx-auto
                                container
                                mb-5
                                mt-5"
                            >
                                <div className="
                                    g-col-4
                                    g-start-lg-4
                                    g-start-3
                                    g-start-md-3
                                    g-start-sm-3"
                                >
                                    <button
                                    type="button"
                                    className="
                                                btn
                                                btn-outline-dark"
                                    >
                                        Google
                                    </button>
                                </div>
                                <div className="g-col-4">
                                    <button type="button"
                                        className="
                                        btn
                                        btn-outline-dark"
                                    >
                                        Facebook
                                    </button>
                                </div>
                            </div>
                            <div className="grid mb-5">
                                <div className="g-col-4 g-start-7 ">
                                    Or
                                </div>
                            </div>
                            <form action="#" method="post" className="form" onSubmit={onSignup}>
                                <div className="grid mx-auto">
                                    <div className="
                                        g-col-lg-5
                                        g-col-md-5
                                        g-col-12
                                        g-start-lg-2
                                        g-start-md-2
                                        g-start-1"
                                    >
                                        <input
                                        id="username"
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        value={user.username}
                                        onChange={(e) =>  setUser({
                                            ...user, username: e.target.value
                                        })
                                        }
                                        />
                                    </div>
                                    <div className="
                                        g-col-5
                                        g-col-md-5
                                        g-col-12
                                        text-center"
                                    >
                                        <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder='Email'
                                        value={user.email}
                                        onChange={(e) => setUser({
                                            ...user, email: e.target.value,
                                        })
                                        }
                                        />
                                    </div>
                                </div>
                                <div className="grid mt-4">
                                    <div className="
                                        g-col-lg-6
                                        g-col-md-6
                                        g-col-12
                                        g-start-lg-4
                                        g-start-md-4
                                        g-start-1">
                                        <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(e) => setUser({
                                            ...user, password: e.target.value
                                        })
                                        }
                                        />
                                    </div>
                                    <div className="
                                        g-col-lg-6
                                        g-col-md-6
                                        g-col-12
                                        g-start-lg-4
                                        g-start-md-4
                                        g-start-1"
                                    >
                                        <input
                                            type="password"
                                            className="form-control"
                                            autoComplete="false"
                                            placeholder="Confirm Password"
                                            />
                                    </div>
                                    <div className="mt-2
                                                    g-col-6
                                                    g-start-6">
                                        <button
                                        type="submit"
                                        className="
                                                    btn
                                                    btn-outline-primary
                                                    btn-large "
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <br />
                            </form>
                            <LoginLink />
                        </div>
                    </div>
            </div>
        </>
    )
}