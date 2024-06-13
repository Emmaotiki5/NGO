export default function RegisterPage () {
    return(
        <>
            <div>
                <div className="card">
                        <div className="card-body ">
                            <div className="card-header text-center bg-white mb-5">
                                Create Your Account
                            </div>
                            <div className="grid mx-auto container">
                                <div className="">
                                    <button type="button" className="btn btn-outline-dark">
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-outline-dark">
                                        Facebook
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex text-center">
                                <div>
                                    <hr />
                                </div>
                                Or
                                <div>
                                    <hr />
                                </div>
                            </div>
                            <form action="#" method="post" className="form">
                                <div>
                                    <p className="form-label">Username</p>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div>
                                    <p className="form-label">Email</p>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div>
                                    <p className="form-label">Password</p>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div>
                                    <p className="form-label">Password</p>
                                    <input type="password" className="form-control" autoComplete="false"/>
                                </div>
                                <div className="mt-2">
                                    <button type="submit" className="btn btn-outline-primary ">
                                        Submit
                                    </button>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}