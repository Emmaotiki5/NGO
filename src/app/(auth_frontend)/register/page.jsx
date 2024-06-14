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
                                <div className="g-col-4 g-start-lg-4 g-start-3 g-start-md-3 g-start-sm-3">
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
                            <div className="grid mb-5">
                                <div className="g-col-4 g-start-7 ">
                                    Or
                                </div>
                            </div>
                            <form action="#" method="post" className="form">
                                <div className="grid mx-auto">
                                    <div className="g-col-lg-5 g-col-md-5 g-col-12 g-start-lg-2 g-start-md-2 g-start-1">
                                        <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="g-col-5 g-col-md-5 g-col-12 text-center">
                                        <input type="email" className="form-control" placeholder='Email'/>
                                    </div>
                                </div>
                                <div className="grid mt-4">
                                    <div className="g-col-lg-6 g-col-md-6 g-col-12 g-start-lg-4 g-start-md-4 g-start-1">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="g-col-lg-6 g-col-md-6 g-col-12 g-start-lg-4 g-start-md-4 g-start-1">
                                        <input type="password" className="form-control" autoComplete="false" placeholder="Confirm Password"/>
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