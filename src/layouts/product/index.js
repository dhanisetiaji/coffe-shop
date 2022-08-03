/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Navbar from '../../components/navbar'
import Footer from "../../components/footer"
import styles from "./Product.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useSWR from "swr"
import Myloader from "./loader"
import convertRupiah from "rupiah-format"

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);

const ProductLayout = () => {
    const router = useRouter()
    const [voucher, setVoucher] = useState()
    const [field, setField] = useState({})
    const code = router.query.voucher
    let { data } = useSWR(`/api/voucher?code=${code}`, fetcher)
    const { data: product, isValidating: loading } = useSWR(`/api/product?limit=8`, fetcher)
    // console.log(product);
    // console.log(loading);
    useEffect(() => {
        if (code !== undefined) {
            if (data) {
                if (data.success) {
                    toast.success(`Voucher ${code.toUpperCase()} success applied`, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setVoucher(code)
                }
                if (data.message !== "Success") {
                    toast.error(`Voucher ${code.toUpperCase()} not found`, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setVoucher()
                }
            }
        }
    }, [data, code])






    const handleVoucher = (code) => {

        router.push("/product?voucher=" + code)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/product?voucher=" + field.input)
    }

    const handleCancel = () => {
        toast.error(`Voucher canceled`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setVoucher()
    }
    return (<>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <div className={`col-3 pt-3 ${styles.VoucherWrapper}`}>
                    <h5 className={`${styles.hProduct} px-5 text-center`}> Promo for you</h5>
                    <p className={`${styles.pProduct} mb-5 px-5  text-center`}>Coupons will be updated every weeks. Check them out! </p>
                    <div className="row px-3">
                        <a type="button" onClick={() => handleVoucher('motherday2022')}>
                            <div className="col-12 mt-3">
                                <div className={`card ${styles.card1}`}>
                                    <div className={`card-body d-flex justify-content-center align-items-center ${styles.cardPromo1}`}>
                                        <Image src="/img/promo1.svg" width={'85px'} height={'94px'} alt="promo1" />
                                        <div className={styles.descPromo}>
                                            <h5 className={styles.titlePromo}>HAPPY MOTHER{`'`}S DAY!</h5>
                                            <p className={styles.pPromo}>Get one of our favorite menu for free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="col-12 mt-3">
                            <a type="button" onClick={() => handleVoucher('fatherday2022')}>
                                <div className={`card ${styles.card1}`}>
                                    <div className={`card-body d-flex justify-content-center align-items-center ${styles.cardPromo1}`}>
                                        <Image src="/img/promo2.svg" width={'85px'} height={'94px'} alt="promo1" />
                                        <div className={styles.descPromo}>
                                            <h5 className={styles.titlePromo}>HAPPY FATHER{`'`}S DAY!</h5>
                                            <p className={styles.pPromo}>Get one of our favorite menu for free!</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="col-12 mt-3">
                                {voucher && <input type="text" className="form-control" value={voucher} disabled />}
                                {!voucher && <input type="text" className="form-control" placeholder="Or Input Promo Code" onChange={(e) => setField(prevData => ({ ...prevData, input: e.target.value }))} />}
                            </div>
                            <div className="col-12 mt-3 mb-5">
                                {voucher && <button className="btn btn-danger btn-primary-big w-100" onClick={() => handleCancel()}>Cancel Voucher</button>}
                                {!voucher && <button className="btn btn-secondary btn-primary-big w-100">Apply Coupon</button>}
                            </div>
                        </form>
                        <div className="col-12 mt-5 mb-5">
                            <h5 className={`${styles.titlePromo} text-star`}> Terms and Condition</h5>
                            <p className={`${styles.pPromo} m-0`}>1. You can only apply 1 coupon per day</p>
                            <p className={`${styles.pPromo} m-0`}>2. It only for dine in</p>
                            <p className={`${styles.pPromo} m-0`}>3. Buy 1 get 1 only for new user</p>
                            <p className={`${styles.pPromo} m-0`}>4. Should make member card to apply coupon</p>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="container">
                        <div className="row pt-3 mb-5 text-center">
                            <div className="col">
                                <a type="button"><h5 className={`${styles.hProduct0} ${styles.active} box-shadow`}>Favorite Product</h5></a>
                            </div>
                            <div className="col">
                                <a type="button"><h5 className={styles.hProduct1}>Coffee</h5></a>
                            </div>
                            <div className="col">
                                <a type="button"><h5 className={styles.hProduct1}>Non Coffee</h5></a>
                            </div>
                            <div className="col">
                                <a type="button"><h5 className={styles.hProduct1}>Foods</h5></a>
                            </div>
                            <div className="col">
                                <a type="button"><h5 className={styles.hProduct1}>Add on</h5></a>
                            </div>
                        </div>
                        <div className="row p-3 text-center">

                            {loading ? (<>
                                <div className="col-3">
                                    <Myloader />
                                </div>
                            </>) : product.data.results.map((item, index) => {
                                return (<>
                                    <div className="col-3 mb-3" key={index}>
                                        <Link href={voucher ? `/detail/${item.slug}?voucher=${voucher}` : `/detail/${item.slug}`}>
                                            <a className="text-decoration-none">
                                                <div className={`card ${styles.cardProduct}`}>
                                                    <div className="card-body bg-transparent">
                                                        <div className={styles.imageProduct}>
                                                            <Image src={item.productImage} width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                        </div>
                                                        <p className={`${styles.titleProduct}`}>{item.productName}</p>
                                                        <p className={`${styles.priceProduct}`}>{convertRupiah.convert(item.productPrice)}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                </div >
            </div >
        </div >
        <Footer />
    </>)
}

export default ProductLayout