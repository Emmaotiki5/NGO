import Link from "next/link";
export default function Registerink () {
    return(
    <>
    <div className="mt-3 justify-content-center align-items-center d-flex">
        Don&apos;t have an account ?
        <Link href='/register' className="link-body-emphasis ms-2">
            Sign Up
        </Link>
    </div>
    </>
    )
}