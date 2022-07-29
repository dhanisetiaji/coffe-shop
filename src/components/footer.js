import Image from "next/image"
import Link from "next/link"
import { FiFacebook } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import logo from "../../public/img/logo-coffe.svg"


const Footer = () => {
    return (
        <footer>
            <div className="container footer-wrapper">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-8">
                                <div className="title t-decoration-none d-flex align-items-center">
                                    <Image src={logo} alt="logo-coffe" />
                                    <div className="mx-3"><a>Coffee shop</a></div>
                                </div>
                                <br />
                                <p className="text-secondary fw-semibold">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                                <div className="social">
                                    <Link target="_blank" href="https://www.facebook.com/"><a target="_blank" className="box-shadow"><FiFacebook /></a></Link>
                                    <Link target="_blank" href="https://twitter.com/"><a target="_blank" className="box-shadow"><FaTwitter /></a></Link>
                                    <Link target="_blank" href="https://www.instagram.com/"><a target="_blank" className="box-shadow"><ImInstagram /></a></Link>
                                </div>
                                <p className="text-secondary mt-5 fs-6">©2020CoffeeStore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="row">
                            <div className="col-6">
                                <div className="title">
                                    <div className="fw-bold mb-2">Product</div>
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Download</a>
                                    </Link><br />
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Pricing</a>
                                    </Link><br />
                                    <Link href="/">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Locations</a>
                                    </Link><br />
                                    <Link href="/">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Countries</a>
                                    </Link><br />
                                    <Link href="/">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Blog</a>
                                    </Link><br />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="title">
                                    <div className="fw-bold mb-2">Engage</div>
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Coffe Shop?</a>
                                    </Link><br />
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">FAQ</a>
                                    </Link><br />
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">About Us</a>
                                    </Link><br />
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Privacy Policy</a>
                                    </Link><br />
                                    <Link href="/#">
                                        <a className="text-decoration-none text-secondary fw-normal fs-6">Terms of Service</a>
                                    </Link><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer