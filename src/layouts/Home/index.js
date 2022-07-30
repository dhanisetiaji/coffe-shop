import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
// import Slider from "react-slick";
import { BsFillCheckCircleFill, BsFillPersonFill, BsCheck } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineHeart, AiFillStar, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './Home.module.css'

const Homepage = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     draggable: true,
    // }

    return (<>
        <Head>
            <title>Coffee Shop</title>
        </Head>
        <Navbar />
        <div className={styles.banner}>
            <img src="/img/banner.png" alt="banner" className={styles.imgBanner} />
            <div className={styles.textBanner}>
                <h3 className={styles.titleBanner}>Start Your Day with Coffee and Good Meals</h3>
                <p className={styles.pBanner}>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                <button className="btn btn-primary btn-primary-big">Get Started</button>
            </div>
        </div>
        <div className={styles.statsFly}>
            <div className={`${styles.stats} container box-shadow`}>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <BsFillPersonFill className={styles.iconStats} />
                        <div className={styles.textStats}>
                            <h3 className={styles.titleStats}>90+</h3>
                            <p className={styles.pStats}>Staff</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <FaMapMarkerAlt className={styles.iconStats} />
                        <div className={styles.textStats}>
                            <h3 className={styles.titleStats}>30+</h3>
                            <p className={styles.pStats}>Stores</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <AiOutlineHeart className={styles.iconStats} />
                        <div className={styles.textStats}>
                            <h3 className={styles.titleStats}>800+</h3>
                            <p className={styles.pStats}>Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.teamWorks}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/img/teamwork.png" alt="team work" className={styles.imgTeamWork} />
                    </div>
                    <div className="col-6 px-3">
                        <h3 className={styles.titleTeamWork}>We Provide Good Coffee and Healthy Meals</h3>
                        <p className={styles.pTeamwork}>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <p className={`${styles.pTeamwork} d-flex align-items-center`}><BsFillCheckCircleFill className={styles.iconTeamWork} /> High quality beans</p>
                        <p className={`${styles.pTeamwork} d-flex align-items-center`}><BsFillCheckCircleFill className={styles.iconTeamWork} /> Healthy meals, you can request the ingredients</p>
                        <p className={`${styles.pTeamwork} d-flex align-items-center`}><BsFillCheckCircleFill className={styles.iconTeamWork} /> Chat with our staff to get better experience for ordering</p>
                        <p className={`${styles.pTeamwork} d-flex align-items-center`}><BsFillCheckCircleFill className={styles.iconTeamWork} /> Free member card with a minimum purchase of IDR 200.000.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.favoritePeople}>
            <div className="container text-center">
                <h3 className={styles.titleTeamWork}>Here is People{`’`}s Favorite</h3>
                <p className={`${styles.pTeamwork} mb-5`}>Let{`’`}s choose and have a bit taste of poeple{`’`}s favorite. It might be yours too!</p>
                <div className="row">
                    <div className="col-md-4">
                        <div className={`card ${styles.hoverCard}`}>
                            <div className="card-body p-5">
                                <img src="/img/coffelate.png" alt="product" className="img-circle box-shadow" />
                                <h5 className='my-5 fw-semibold'>Hazelnut Latte</h5>
                                <div className={`text-start px-2 ${styles.descCard}`}>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />HazelnutSyrup</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Wanilla Whipped Cream</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Ice / Hot</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Sliced Banana on Top</p>
                                </div>
                                <h3 className="mb-3 fw-bold">IDR 25.000</h3>
                                <button className="btn btn-primary btn-radius">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.hoverCard}`}>
                            <div className="card-body p-5">
                                <img src="/img/pinkpromise.png" alt="product" className="img-circle box-shadow" />
                                <h5 className='my-5 fw-semibold'>Pink Promise</h5>
                                <div className={`text-start px-2 ${styles.descCard}`}>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />1 Shot of Coffee</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Vanilla Whipped Cream</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Chocolate Biscuits</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Strawberry Syrup</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Sliced strawberry on Top</p>
                                </div>
                                <h3 className="mb-3 fw-bold">IDR 30.000</h3>
                                <button className="btn btn-primary btn-radius">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.hoverCard}`}>
                            <div className="card-body p-5">
                                <img src="/img/chickenwings.png" alt="product" className="img-circle box-shadow" />
                                <h5 className='my-5 fw-semibold'>Chicken Wings</h5>
                                <div className={`text-start px-2 ${styles.descCard}`}>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Wings</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Drum Sticks</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Mayonaise and Lemon</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Hot Fried</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Secret Recipe</p>
                                    <p className={styles.pTeamwork}><BsCheck className={styles.iconFav} />Buy 1 Get 1 only for Dine in</p>
                                </div>
                                <h3 className="mb-3 fw-bold">IDR 40.000</h3>
                                <button className="btn btn-primary btn-radius">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.visitMaps}>
            <div className="container text-center">
                <h3 className={styles.titleTeamWork}>Visit Our Store in the <br /> Spot on the Map Below</h3>
                <p className={`${styles.pTeamwork} mb-5`}>See our store in every city on the spot and spen your good day there. <br />See you soon!</p>
                <div className="my-5">
                    <img src="/img/map.png" alt="maps" className="img-fluid" />
                </div>
            </div>
        </div>
        <div className="ourPatners mt-3">
            <div className="container text-center">
                <h3 className={styles.titleTeamWork}>Our Patner</h3>
                <div className="my-3">
                    <div className="row d-flex align-items-center">
                        <div className="col">
                            <img src="/img/netflix.png" alt="patner image" />
                        </div>
                        <div className="col">
                            <img src="/img/reddit.png" alt="patner image" />
                        </div>
                        <div className="col">
                            <img src="/img/amazon.png" alt="patner image" />
                        </div>
                        <div className="col">
                            <img src="/img/discord.png" alt="patner image" />
                        </div>
                        <div className="col">
                            <img src="/img/spotify.png" alt="patner image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`mt-3 ${styles.customerReview}`}>
            <div className="container text-center">
                <h3 className={styles.titleTeamWork}>Loved by Thousands of<br /> Happy Customer</h3>
                <p className={`${styles.pTeamwork} mb-5`}>These are the stories of our customers who have visited us with<br />great pleasure.</p>
                <div className="row">
                    {/* <Slider {...settings}> */}
                    <div className="col-4">
                        <div className={`card ${styles.cardCustomer}`}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src="/img/person2.png" alt="image customer" className={styles.imgPerson} />
                                            <div className="nameCustomer mt-3">
                                                <h5 className='fw-semibold m-0'>Viezh Robert</h5>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <p className="fw-bold m-0">4.5</p>
                                        <AiFillStar className={styles.iconStar} />
                                    </div>
                                    <div className="col-12">
                                        <p className={`${styles.commentCustomer} mt-3 px-3`}>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`card ${styles.cardCustomer}`}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src="/img/person2.png" alt="image customer" className={styles.imgPerson} />
                                            <div className="nameCustomer mt-3">
                                                <h5 className='fw-semibold m-0'>Viezh Robert</h5>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <p className="fw-bold m-0">4.5</p>
                                        <AiFillStar className={styles.iconStar} />
                                    </div>
                                    <div className="col-12">
                                        <p className={`${styles.commentCustomer} mt-3 px-3`}>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`card ${styles.cardCustomer}`}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src="/img/person2.png" alt="image customer" className={styles.imgPerson} />
                                            <div className="nameCustomer mt-3">
                                                <h5 className='fw-semibold m-0'>Viezh Robert</h5>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <p className="fw-bold m-0">4.5</p>
                                        <AiFillStar className={styles.iconStar} />
                                    </div>
                                    <div className="col-12">
                                        <p className={`${styles.commentCustomer} mt-3 px-3`}>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="col-4 py-3">
                            <nav aria-label="pagination paginationCustomer">
                                <ul className="pagination">
                                    <li className="page-item pageItemC pageActive">
                                        <span className="page-link pageLinkC"></span>
                                    </li>
                                    <li className="page-item pageItemC"><a className="page-link pageLinkC" href="#"></a></li>
                                    <li className="page-item pageItemC"><a className="page-link pageLinkC" href="#"></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-4 text-end p-3">
                            <AiOutlineArrowLeft className="iconArrowLeft" />
                            <AiOutlineArrowRight className="iconArrowRight" />
                        </div>
                    </div>
                    {/* </Slider> */}
                </div>
            </div>
        </div>



        <div className={styles.footerFly}>
            <div className={`${styles.stats} container box-shadow`}>
                <div className="row">
                    <div className="col-6 card-contents">
                        <h3 className={`fs-3 fw-bold ${styles.cardsAuth}`}>Check our promo today!</h3>
                        <p>Let{`'`}s see the deals and pick yours!</p>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary w-50 btn-primary-big">See Promo</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </>)
}

export default Homepage