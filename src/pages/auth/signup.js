import SignUp from "../../layouts/auth/signup"
import { FcGoogle } from 'react-icons/fc'
import { useState } from "react"
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import HeadLayout from "../../layouts/head"

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


const SignupPage = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: formData,
            url: `/api/auth/register`,
        }).then((res) => {
            if (res.status === 201) {
                toast.success(`${res.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push("/auth/signin")

            }
        }).catch((err) => {
            console.log(err.response);
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
        <HeadLayout title={"Signup"} />
        <SignUp>
            <form className="px-lg-5" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Email address:</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter your email address" onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter your password" onChange={(e) => setFormData((prevData) => ({ ...prevData, password: e.target.value }))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="fw-bolder text-secondary mb-2 mt-3">Phone Number:</label>
                    <input type="number" email="phone" className="form-control" placeholder="Enter your phone number" onChange={(e) => setFormData((prevData) => ({ ...prevData, phone: e.target.value }))} required />
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

export default SignupPage