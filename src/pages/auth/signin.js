import Head from "next/head"
import Signin from "../../layouts/auth/signin"
import { FcGoogle } from 'react-icons/fc'
import Link from "next/link"


const signin = () => {
    return (<>
        <Head>
            <title>Sign in | Coffe shop</title>
        </Head>
        <Signin>
            <form className="px-lg-5">
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                    <Link href={'/#'}><p htmlFor="" className="mb-2 mt-3"><a>Forgot your password?</a></p></Link>
                </div>
                <div className="form-group mb-2 mt-3">
                    <button type="submit" className="btn btn-primary w-100 btn-primary-big">Login</button>
                </div>
                <div className="form-group mb-2 mt-3">
                    <button type="submit" className="btn btn-light w-100 btn-primary-big"><FcGoogle style={{ fontSize: '25px', marginRight: '5px' }} />{' '}Login with Google</button>
                </div>
            </form>
        </Signin>
    </>
    )
}

export default signin