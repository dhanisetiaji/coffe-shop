import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import styles from './Detail.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import useSWR from 'swr'
import convertRupiah from "rupiah-format"
import { ImgLoader, Content } from './loader'

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);


const DetailLayout = ({ slug }) => {
    const [quantity, setQuantity] = useState(1)
    const { data, isValidating: loading } = useSWR(`/api/product?slug=${slug.slug}`, fetcher)
    return (<>
        <Navbar />
        <div className="container mb-5">
            <div className="row mt-3">
                <div className="col-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href={'/product'}><a className='text-decoration-none'>Favorite & Promo</a></Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cold Brew</li>
                        </ol>
                    </nav>
                    <div className="text-center">
                        {loading ? <ImgLoader /> : (<>
                            <Image src={data.data.productImage} alt={data.data.productName} className="img-circle" width={300} height={300} />
                            <div className="my-3">
                                <h3 className={styles.nameProduct}>{data.data.productName}</h3>
                                <p className={styles.priceProduct}>{convertRupiah.convert(data.data.productPrice)}</p>
                            </div>
                        </>)}

                    </div>
                </div>
                <div className="col-7 mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className={styles.title}>Description:</h3>
                            {loading ? <Content /> : (<>
                                <p className={styles.description}>{data.data.productDesc}</p>
                            </>)}
                        </div>
                        <div className="col-12">
                            <select name="size" className='form-select'>
                                <option value="">Select Size</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div className="col-12 my-2">
                            <select name="delivery" className='form-select'>
                                <option value="">Select Delivery Methods</option>
                                <option value="dine in">Dine in</option>
                                <option value="door delivery">Door Delivery</option>
                                <option value="pickup">Pick Up</option>
                            </select>
                            <p>* Delivery only on Monday to friday at  1 - 7 pm</p>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="row">
                                <div className="col-4">
                                    <div className="input-group">
                                        <button className={styles.btnCart} onClick={() => { setQuantity(prevData => (prevData - 1)) }}><AiOutlineMinus /></button>
                                        <input type="number" className={`form-control ${styles.formCart}`} value={quantity} disabled />
                                        <button className={styles.btnCart} onClick={() => { setQuantity(prevData => (prevData + 1)) }}><AiOutlinePlus /></button>
                                    </div>

                                </div>
                                <div className="col-8">
                                    <button className="btn btn-primary btn-primary-big w-100">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-secondary btn-primary-big w-100">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default DetailLayout