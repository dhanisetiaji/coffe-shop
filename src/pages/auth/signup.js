import SignUp from "../../layouts/auth/signup"
import { FcGoogle } from 'react-icons/fc'
import Head from "next/head"


const signup = () => {
    return (<>
        <Head>
            <title>Sign up | Coffe shop</title>
        </Head>
        <SignUp>
            <form className="px-lg-5">
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Phone Number:</label>
                    <input type="number" className="form-control" placeholder="Enter your phone number" />
                </div>
                <div className="form-group mb-2 mt-3">
                    <button type="submit" className="btn btn-primary w-100 btn-primary-big">Sign up</button>
                </div>
                <div className="form-group mb-2 mt-3">
                    <button type="submit" className="btn btn-light w-100 btn-primary-big"><FcGoogle style={{ fontSize: '25px', marginRight: '5px' }} />{' '}Sign up with Google</button>
                </div>
            </form>
        </SignUp>
    </>)
}

export default signup