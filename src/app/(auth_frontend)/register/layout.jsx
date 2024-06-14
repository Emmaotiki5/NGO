import Side from "./components/side"
export default function RegisterLayout ({children}) {
    return (
        <>
            <div className=" text-white" style={{}}>
                <div className="mx-auto text-center display-1 mb-5 ">
                    Register
                </div>
                <div className="mx-auto">
                    <div className="grid text-start " style={{}}>
                        {/* <div className="g-col-lg-4 g-col-sm-6 g-start-lg-3 g-start-sm-4 g-col-md-12 g-start-md-1 g-col-12 g-start-1 ">
                            <Side />
                        </div> */}
                        <div className="g-col-sm-6 g-col-md-12 g-col-lg-4 g-start-sm-4 g-start-1 g-start-md-1 g-col-12 g-start-lg-5" >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}