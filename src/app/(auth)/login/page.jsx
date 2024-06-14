import Left from "./components/left"
import Right from "./components/right"

export default function LoginPage () {
    return(
        <>
            <div className="grid">
                <div>
                    <Left />
                </div>
                <div>
                    <Right />
                </div>
            </div>
        </>
    )
};