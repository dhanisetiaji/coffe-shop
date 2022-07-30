import Link from "next/link"
import Image from "next/image"
import logo from "../../public/img/logo-coffe.svg"
import toggle from "../../public/img/toggle.svg"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3">
            <div className="container">
                <Link href={'/'}><div className="title navbar-brand d-flex align-items-center fs-6"><Image src={logo} alt="logo-coffe" /><div className="mx-3"><a>Coffee shop</a></div></div></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="#"><a className="nav-link active" aria-current="page" >Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#"><a className="nav-link" >Product</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#"><a className="nav-link" >Your Cart</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#"><a className="nav-link" >History</a></Link>
                        </li>
                    </ul>
                    <span className="navbar-text d-flex justify-content-center align-items-center">
                        <Link href="/auth/signin"><a className="nav-link mx-3 fw-semibold">Login</a></Link>
                        <Link href={'/auth/signup'}><button className="btn btn-primary btn-radius">Sign Up</button></Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar