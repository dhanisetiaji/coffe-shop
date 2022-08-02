import 'react-toastify/dist/ReactToastify.css';
import Signin from "../../layouts/auth/signin"
import { FcGoogle } from 'react-icons/fc'
import Link from "next/link"
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { useRouter } from 'next/router'
import HeadLayout from '../../layouts/head';


export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
    const data = req.session.data;

    if (data) {
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
        return {
            props: {},
        };
    }

    return {
        props: {},
    };
}, sessionOptions);



const SigninPages = () => {
    const router = useRouter()

    const [formLogin, setFormLogin] = useState({})

    const handleLogin = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: formLogin,
            url: `/api/auth/login`,
        }).then((res) => {
            if (res.status === 200) {
                toast.success(`${res.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push("/")
            }
        }).catch((err) => {
            if (!err.response.data.message) {
                toast.error(`Error, Please Try Again`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error(`${err.response.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    }

    return (<>
        <HeadLayout title={"Signin"} />
        <Signin>
            <form className="px-lg-5" onSubmit={(e) => handleLogin(e)}>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Email address:</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter your email address" onChange={(e) => setFormLogin((prevData) => ({ ...prevData, email: e.target.value }))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Password:</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter your password" onChange={(e) => setFormLogin((prevData) => ({ ...prevData, password: e.target.value }))} required />
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



export default SigninPages