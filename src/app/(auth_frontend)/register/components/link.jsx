import Link from "next/link";
export default function LoginLink () {
    return(
    <>
    <div>
        You Already have an account ?
        <Link href='/login' className="link-body-emphasis ms-2">
            Login
        </Link>
    </div>
    </>
    )
}