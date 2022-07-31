import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import NavbarLogin from '../../components/navbarlogin'
import Footer from '../../components/footer'
import styles from './Detail.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const DetailLayout = () => {
    const [quantity, setQuantity] = useState(1)

    return (<>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            <title>Cold Brew | Coffee Shop</title>
        </Head>
        <NavbarLogin />
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
                        <Image src={'/img/coldbrew.png'} width="300px" height="300px" className="img-circle" />
                        <div className="my-3">
                            <h3 className={styles.nameProduct}>Cold Brew</h3>
                            <p className={styles.priceProduct}>Rp. 10.000</p>
                        </div>
                    </div>
                </div>
                <div className="col-7 mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className={styles.title}>Description:</h3>
                            <p className={styles.description}>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
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