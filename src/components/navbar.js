import Link from "next/link"
import Image from "next/image"
import logo from "../../public/img/logo-coffe.svg"
// import LoaderNav from "./Loader/Navbar"
import useVerify from '../lib/useVerify'
import { useRouter } from 'next/router'



const Navbar = () => {
    const router = useRouter()
    const { data, mutateData } = useVerify();
    const pathName = router.pathname
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container">
                <Link href={'/'}><div className="title navbar-brand d-flex align-items-center fs-6"><Image src={logo} alt="logo-coffe" /><div className="mx-3"><a>Coffee shop</a></div></div></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/"><a className={pathName === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" >Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/product"><a className={pathName === '/product' ? 'nav-link active' : 'nav-link'} >Product</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cart"><a className={pathName === '/cart' ? 'nav-link active' : 'nav-link'} >Your Cart</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/history"><a className={pathName === '/history' ? 'nav-link active' : 'nav-link'} >History</a></Link>
                        </li>
                    </ul>
                    <span className="navbar-text d-flex justify-content-center align-items-center">

                        {data?.isLoggedIn === true && (<>
                            <div type="button" className="position-relative" style={{ marginRight: '25px' }}>
                                <Image src="/img/chat.svg" width={'25px'} height={'25px'} alt="icon"></Image>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                    99+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </div>
                            <Link href={'/profile'}><a><Image src={data.userImage} width={'35px'} height="35px" alt="profile img" className="img-circle"></Image></a></Link>
                        </>)}
                        {data?.isLoggedIn === false && (<>
                            <Link href="/auth/signin"><a className="nav-link mx-3 fw-semibold">Login</a></Link>
                            <Link href={'/auth/signup'}><button className="btn btn-primary btn-radius">Sign Up</button></Link>
                        </>)}


                    </span>
                </div>
            </div>
        </nav>
    )
}


export default Navbar