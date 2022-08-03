import Image from "next/image"
import Navbar from "../../components/navbar"
import styles from './Checkout.module.scss'
import toRupiah from '@develoka/angka-rupiah-js'
import Footer from "../../components/footer"
import { AiTwotoneBank, AiFillCreditCard } from "react-icons/ai"
import { FaPeopleCarry } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import useSWR from "swr"
import Myloader from './loader'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import { delItem } from "../../redux/actions/Cart"

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);


const IndexCheckout = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    const [value, setValue] = useState([])
    const [alldata, setAlldata] = useState({
        userId: ""
    })
    useEffect(() => {
        if (cart.length === 0) {
            alert('Cart is empty')
            router.push('/')
        }
    }, [cart, data])// eslint-disable-line
    let { data: voucher1, isValidating: loading1 } = useSWR(`/api/voucher?code=${cart.voucher}`, fetcher)
    const { data, isValidating: loading } = useSWR(`/api/product?slug=${cart.slug}`, fetcher)
    let subtotal = 0
    let totalPriceItem = 0
    let taxPrice = 0
    let voucherPrice = 0
    if (!loading) {
        const price = data.data.productPrice
        cart.size === 'medium' ? subtotal = price * cart.qty + 3000 : cart.size === 'large' ? subtotal = price * cart.qty + 5000 : subtotal = price * cart.qty
        taxPrice = subtotal * 0.1
        if (!loading1) {
            if (cart.voucher) {
                voucherPrice = subtotal * parseInt(voucher1.data.voucherDiscount) / 100
                totalPriceItem = subtotal - voucherPrice + taxPrice
            } else {
                totalPriceItem = subtotal + taxPrice
            }
        }
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const { value: formValues } = Swal.fire({
            title: 'Address Detail',
            html:
                '<input id="name" placeholder="input name" class="swal2-input">' +
                '<input id="address" placeholder="input address" class="swal2-input">' +
                '<input id="phone" placeholder="phone" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return setValue([document.getElementById('name').value,
                document.getElementById('address').value,
                document.getElementById('phone').value])
            }
        })
    }
    const handleCheckout = (e) => {
        e.preventDefault()
        if (value.length === 0) {
            alert('Please fill your address')
            var radio = document.querySelector('input[type=radio][name=cod]:checked');
            radio.checked = false;
        } else {
            axios({
                method: "POST",
                url: "/api/transaction",
                data: alldata,
            }).then(res => {
                if (res.data.success) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your order has been placed',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        router.push('/')
                        dispatch(delItem())
                    })
                }
            }).catch(err => {
                alert(err.response.data.message)
            })
        }
    }

    return (<>
        <Navbar />
        <div className={styles.CheckoutWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-3">
                        <h3 className={styles.title}>Checkout your item now!</h3>
                    </div>
                    <div className="col-md-12 ">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-5">
                                <div className={`card ${styles.card}`}>
                                    <div className="card-body">
                                        <h5 className={styles.TitleOrderSummary}>Order Summary</h5>
                                        <div className="row text-start">
                                            {loading ? <Myloader /> : cart.length === 0 ? <Myloader /> : (<>
                                                <div className="col-3 mb-3">
                                                    <Image src={data.data.productImage} alt="checkout image" width="125px" height="125px" className={styles.imgRounded}></Image>
                                                </div>
                                                <div className={`col-6 ${styles.productDetail}`}>
                                                    <h5 className="m-0">{data.data.productName}</h5>
                                                    <p className="m-0">x {cart.qty}</p>
                                                    <p className="m-0">{cart.size}</p>
                                                </div>
                                                <div className={`col-3 ${styles.priceCheckout}`}>
                                                    <h6 className="">{toRupiah(subtotal, { useUnit: true, symbol: null, k: true, symbol: 'IDR', formal: false, floatingPoint: 1 })}</h6>
                                                </div>
                                            </>)}
                                        </div>
                                        <hr />
                                        <div className="row">
                                            {cart.length === 0 ? <Myloader /> : (<>

                                                <div className="col-6">
                                                    <h5 className={styles.pOrderSummary}>SUBTOTAL</h5>
                                                    <h5 className={styles.pOrderSummary}>TAX & FEES</h5>
                                                    <h5 className={styles.pOrderSummary}>VOUCHER</h5>
                                                    <h5 className={styles.pOrderSummary}>SHIPPING</h5>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <h5 className={styles.pOrderSummary}>{toRupiah(subtotal, { floatingPoint: 0, formal: false, symbol: 'IDR' })}</h5>
                                                    <h5 className={styles.pOrderSummary}>{toRupiah(taxPrice, { floatingPoint: 0, formal: false, symbol: 'IDR' })}</h5>
                                                    <h5 className={styles.pOrderSummary}>{toRupiah(voucherPrice, { floatingPoint: 0, formal: false, symbol: 'IDR' })}</h5>
                                                    <h5 className={styles.pOrderSummary}>{toRupiah(0, { floatingPoint: 0, formal: false, symbol: 'IDR' })}</h5>
                                                </div>
                                                <div className="col-12 d-flex justify-content-between align-items-center">
                                                    <h5 className={styles.TitleOrderSummary}>TOTAL</h5>
                                                    <h5 className={styles.TitleOrderSummary}>{toRupiah(totalPriceItem, { floatingPoint: 0, formal: false, symbol: 'IDR' })}</h5>
                                                </div>
                                            </>)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-between">
                                        <h5 className={styles.titleDetails}>Address details</h5>
                                        <p type="button" onClick={(e) => handleEdit(e)} className={styles.pDetails}>Edit</p>
                                    </div>
                                    <div className="col-12">
                                        <div className={`card`}>
                                            {value.length === 0 ? (<>
                                                <div className="card-body">
                                                    <p className="m-0"><b>Delivery</b> to please input value</p>
                                                    <hr className="m-2" />
                                                    <p className="m-0">please input value</p>
                                                    <hr className="m-2" />
                                                    <p className="m-0">please input value</p>
                                                </div>
                                            </>) : (<>
                                                <div className="card-body">
                                                    <p className="m-0"><b>Delivery</b> to {value[0]}</p>
                                                    <hr className="m-2" />
                                                    <p className="m-0">{value[1]}</p>
                                                    <hr className="m-2" />
                                                    <p className="m-0">{value[2]}</p>
                                                </div>
                                            </>)}

                                        </div>
                                    </div>
                                    <div className="col-12 mt-5 d-flex justify-content-between">
                                        <h5 className={styles.titleDetails}>Payment Method</h5>
                                    </div>
                                    <form onSubmit={(e) => handleCheckout(e)}>
                                        <div className="col-12 mb-3">
                                            <div className={`card`}>
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" disabled />
                                                        <label className="form-check-label">
                                                            <AiFillCreditCard className={styles.icon} /> Card
                                                        </label>
                                                    </div>
                                                    <hr className="m-2" />
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" disabled />
                                                        <label className="form-check-label">
                                                            <AiTwotoneBank className={styles.icon} /> Bank
                                                        </label>
                                                    </div>
                                                    <hr className="m-2" />
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="cod" id="flexRadioDefault1" onChange={(e) => setAlldata(prevData => ({
                                                            ...prevData,
                                                            total: totalPriceItem,
                                                            transactionName: value[0],
                                                            transactionAddress: value[1],
                                                            transactionPhone: value[2],
                                                            qty: cart.qty,
                                                            productId: data.data.productId,
                                                            paymentMethod: e.target.value,
                                                        }))} required />
                                                        <label className="form-check-label">
                                                            <FaPeopleCarry className={styles.icon} /> Cash On Delivery
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">

                                            <button className="btn btn-secondary btn-primary-big w-100">Confirm and pay</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}


export default IndexCheckout