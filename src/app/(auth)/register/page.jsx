export default function RegisterPage () {
    return(
        <>
            <div>
                <div className="card">
                        <div className="card-body ">
                            <div className="card-header text-center bg-light-subtle mb-5">
                                Create Your Account
                            </div>
                            <div className="grid mx-auto container mb-5 mt-5">
                                <div className="g-col-4 g-start-lg-3 g-start-3 g-start-md-3 g-start-sm-3">
                                    <button type="button" className="btn btn-outline-dark">
                                        Google
                                    </button>
                                </div>
                                <div className="g-col-4">
                                    <button type="button" className="btn btn-outline-dark">
                                        Facebook
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className="grid mb-5">
                                <div className="g-col-4 g-start-6 ">
                                    Or
                                </div>
                            </div>
                            <hr />
                            <form action="#" method="post" className="form">
                                <div className="grid mx-auto">
                                    <div className="g-col-5 g-start-2">
                                        <p className="form-label">Username</p>
                                        <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="g-col-5 text-center">
                                        <p className="form-label">Email</p>
                                        <input type="email" className="form-control" placeholder='Email'/>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="g-col-6 g-start-4">
                                        <p className="form-label">Password</p>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="g-col-6 g-start-4">
                                        <p className="form-label">Password</p>
                                        <input type="password" className="form-control" autoComplete="false"/>
                                    </div>
                                    <div className="mt-2 g-col-5 g-start-6">
                                        <button type="submit" className="btn btn-outline-primary ">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}