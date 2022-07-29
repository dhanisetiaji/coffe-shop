/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/img/logo-coffe.svg"
import styles from './Auth.module.css'
import Footer from "../../components/footer"


const SignUp = ({ children }) => {
    return (<>
        <div className={`${styles.auth} row`}>
            <div className="col-6">
                <img src='/img/sidebarimage.png' className={styles.imageSidebar} alt="img-sidebar" />
            </div>
            <div className="col-6">
                <nav className="Navbar Navbar-expand-lg">
                    <div className="container">
                        <div className="d-flex justify-content-between mx-3 my-5">
                            <div className="navbar-brand">
                                <Link href={'/'}><div className="title t-decoration-none d-flex align-items-center"><Image src={logo} alt="logo-coffe" /><div className="mx-3"><a>Coffee shop</a></div></div></Link>
                            </div>
                            <div className="">
                                <Link href={'/auth/signup'}><button className="btn btn-primary btn-radius">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container px-5">
                    <h3 className="text-sec text-center fw-bolder mb-3">Login</h3>
                    {children}
                </div>

            </div>
            <div className="cards-absolute">
                <div className="card-absolute box-shadow d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 card-contents">
                                <h3 className={`fs-3 fw-bold ${styles.cardsAuth}`}>Get your member card now!</h3>
                                <p>Let{`'`}s join with our member and enjoy the deals.</p>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <button className="btn btn-primary w-50 btn-primary-big">Create Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    </>)
}

export default SignUp