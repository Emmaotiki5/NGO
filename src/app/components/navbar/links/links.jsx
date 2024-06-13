export default function Links() {
    return (
        <div className="float-end">
            <li className="nav-item dropdown">
                <button  className="nav-link dropdown-toggle fs-5"  href="#"  id="dropdownId"  data-bs-toggle="dropdown"  aria-haspopup="true"  aria-expanded="false"  >Account</button>
                <div  className="dropdown-menu"  aria-labelledby="dropdownId">
                    <button className="dropdown-item " href="#">
                        Login
                    </button>
                    <button className="dropdown-item" href="#">
                        Register
                    </button>
                </div>
            </li>
        </div>
    )
}