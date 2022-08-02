/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Navbar from '../../components/navbar'
import Footer from "../../components/footer"
import styles from "./Product.module.css"
import Link from "next/link"


const ProductLayout = () => {
    return (<>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <div className={`col-3 pt-3 ${styles.VoucherWrapper}`}>
                    <h5 className={`${styles.hProduct} px-5 text-center`}> Promo for you</h5>
                    <p className={`${styles.pProduct} mb-5 px-5  text-center`}>Coupons will be updated every weeks. Check them out! </p>
                    <div className="row px-3">
                        <a type="button">
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
                            <a type="button">
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
                        <div className="col-12 mt-3">
                            <input type="text" className="form-control" placeholder="Or Input Promo Code" />
                        </div>
                        <div className="col-12 mt-3 mb-5">
                            <button className="btn btn-secondary btn-primary-big w-100">Apply Coupon</button>
                        </div>
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
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 mb-3">
                                <Link href={'/detail'}>
                                    <a className="text-decoration-none">
                                        <div className={`card ${styles.cardProduct}`}>
                                            <div className="card-body bg-transparent">
                                                <div className={styles.imageProduct}>
                                                    <Image src="/img/coffelate.png" width={'120px'} height="120px" className={`img-circle ${styles.imgProduct}`} />
                                                </div>
                                                <p className={`${styles.titleProduct}`}>Veggie tomato mix</p>
                                                <p className={`${styles.priceProduct}`}>IDR 34.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
        <Footer />
    </>)
}

export default ProductLayout