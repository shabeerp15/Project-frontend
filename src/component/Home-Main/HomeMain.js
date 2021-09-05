import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

function HomeMain() {
    return (
        <>
        <HomeMain/>
            <main id="homepage-1">
                <div className="ps-home-banner ps-home-banner--1">
                    <div className="ps-container">
                        <div className="ps-section__left"></div>
                        <div className="ps-section__right"><Link className="ps-collection" to="shop.html"><img
                            src="static/img/not-found.jpg" alt="Classique" /></Link><Link className="ps-collection"
                                to="shop.html"><img src="static/img/not-found.jpg" alt="Classique" /></Link></div>
                    </div>
                </div>
                <div className="ps-site-features">
                    <div className="ps-container">
                        <div className="ps-block--site-features">
                            <div className="ps-block__item">
                                <div className="ps-block__left"><i className="icon-rocket"></i></div>
                                <div className="ps-block__right">
                                    <h4>Free Delivery</h4>
                                    <p>For all oders over $99</p>
                                </div>
                            </div>
                            <div className="ps-block__item">
                                <div className="ps-block__left"><i className="icon-sync"></i></div>
                                <div className="ps-block__right">
                                    <h4>90 Days Return</h4>
                                    <p>If goods have problems</p>
                                </div>
                            </div>
                            <div className="ps-block__item">
                                <div className="ps-block__left"><i className="icon-credit-card"></i></div>
                                <div className="ps-block__right">
                                    <h4>Secure Payment</h4>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                            <div className="ps-block__item">
                                <div className="ps-block__left"><i className="icon-bubbles"></i></div>
                                <div className="ps-block__right">
                                    <h4>24/7 Support</h4>
                                    <p>Dedicated support</p>
                                </div>
                            </div>
                            <div className="ps-block__item">
                                <div className="ps-block__left"><i className="icon-gift"></i></div>
                                <div className="ps-block__right">
                                    <h4>Gift Service</h4>
                                    <p>Support gift service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-deal-of-day">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <div className="ps-block--countdown-deal">
                                <div className="ps-block__left">
                                    <h3>Deal of the day</h3>
                                </div>
                                <div className="ps-block__right">
                                    <figure>
                                        <figcaption>End in:</figcaption>
                                        <ul className="ps-countdown">
                                            <li><span className="days mr-1"></span></li>
                                            <li><span className="hours ml-1 mr-1"></span></li>
                                            <li><span className="minutes ml-1 mr-1"></span></li>
                                            <li><span className="seconds ml-1"></span></li>
                                        </ul>
                                    </figure>
                                </div>
                            </div><Link to="shop.html">View all</Link>
                        </div>
                        <div className="ps-section__content">
                            <p>No product(s) found.</p>
                        </div>
                    </div>
                </div>
                <div className="ps-home-ads">
                    <div className="ps-container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><Link className="ps-collection"
                                to="shop.html"><img src="static/img/not-found.jpg" alt="Classique" /></Link></div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><Link className="ps-collection"
                                to="shop.html"><img src="static/img/not-found.jpg" alt="Classique" /></Link></div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><Link className="ps-collection"
                                to="shop.html"><img src="static/img/not-found.jpg" alt="Classique" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="ps-top-categories">
                    <div className="ps-container">
                        <h3>Top categories of the month</h3>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/1.jpg" alt="Classique" />
                                    <p>Electronics</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/2.jpg" alt="Classique" />
                                    <p>Clothings</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/3.jpg" alt="Classique" />
                                    <p>Computers</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/4.jpg" alt="Classique" />
                                    <p>Home &amp; Kitchen</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/5.jpg" alt="Classique" />
                                    <p>Health &amp; Beauty</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/6.jpg" alt="Classique" />
                                    <p>Health &amp; Beauty</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/7.jpg" alt="Classique" />
                                    <p>Jewelry &amp; Watch</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category"><Link className="ps-block__overlay" to="shop.html"></Link><img
                                    src="static/img/categories/8.jpg" alt="Classique" />
                                    <p>Technology Toys</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-product-list">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <h3>Consumer Electronics</h3>
                            <ul className="ps-section__links">
                                <li className="active"><Link to="#">New Arrivals</Link></li>
                                <li className=""><Link to="#">Best seller</Link></li>
                                <li className=""><Link to="#">Most Popular</Link></li>
                                <li><Link to="shop.html">View All</Link></li>
                            </ul>
                        </div>
                        <div className="ps-section__content">
                            <p>No product(s) found.</p>
                        </div>
                    </div>
                </div>
                <div className="ps-product-list">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <h3>Clothings</h3>
                            <ul className="ps-section__links">
                                <li className="active"><Link to="#">New Arrivals</Link></li>
                                <li className=""><Link to="#">Best seller</Link></li>
                                <li className=""><Link to="#">Most Popular</Link></li>
                                <li><Link to="shop.html">View All</Link></li>
                            </ul>
                        </div>
                        <div className="ps-section__content">
                            <p>No product(s) found.</p>
                        </div>
                    </div>
                </div>
                <div className="ps-product-list">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <h3>Garden &amp; Kitchen</h3>
                            <ul className="ps-section__links">
                                <li className="active"><Link to="#">New Arrivals</Link></li>
                                <li className=""><Link to="#">Best seller</Link></li>
                                <li className=""><Link to="#">Most Popular</Link></li>
                                <li><Link to="shop.html">View All</Link></li>
                            </ul>
                        </div>
                        <div className="ps-section__content">
                            <p>No product(s) found.</p>
                        </div>
                    </div>
                </div>
                <div className="ps-home-ads">
                    <div className="ps-container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "><Link className="ps-collection"
                                to="shop.html"><img src="static/img/not-found.jpg" alt="Classique" /></Link></div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><Link className="ps-collection"
                                to="shop.html"><img src="static/img/not-found.jpg" alt="Classique" /></Link></div>
                        </div>
                    </div>
                </div>
                <section className="ps-download-app">
                    <div className="ps-container">
                        <div className="ps-block--download-app">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                        <div className="ps-block__thumbnail"><img src="static/img/app.png" alt="Classique" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                        <div className="ps-block__content">
                                            <h3>Download Classique App Now!</h3>
                                            <p>Shopping fastly and easily more with our app. Get a link to download the app
                                                on your phone</p>
                                            <form className="ps-form--download-app"
                                                action="https://reactstorefronts.com/do_action" method="post">
                                                <div className="form-group--nest"><input type="Email" className="form-control"
                                                    placeholder="Email Address" /><button
                                                        className="ps-btn">Subscribe</button></div>
                                            </form>
                                            <p className="download-link"><Link to="#"><img src="static/img/google-play.png"
                                                alt="Classique" /></Link><Link to="#"><img src="static/img/app-store.png"
                                                    alt="Classique" /></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ps-product-list ps-new-arrivals">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <h3>Hot New Arrivals</h3>
                            <ul className="ps-section__links">
                                <li><Link to="shop.html">Technologies</Link></li>
                                <li><Link to="shop.html">Electronic</Link></li>
                                <li><Link to="shop.html">Furnitures</Link></li>
                                <li><Link to="shop.html">Clothing &amp; Apparel</Link></li>
                                <li><Link to="shop9233.html?category=health-and-beauty">Health &amp; Beauty</Link></li>
                                <li><Link to="shop.html">View All</Link></li>
                            </ul>
                        </div>
                        <div className="ps-section__content">
                            <div className="row">
                                <p>No product found.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ps-newsletter">
                    <div className="ps-container">
                        <form className="ps-form--newsletter" action="https://reactstorefronts.com/do_action" method="post">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="ps-form__left">
                                        <h3>Newsletter</h3>
                                        <p>Subcribe to get information about products and coupons</p>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="ps-form__right">
                                        <div className="form-group--nest"><input type="email" className="form-control"
                                            placeholder="Email address" /><button className="ps-btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default HomeMain
