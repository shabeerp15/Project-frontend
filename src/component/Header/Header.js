import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <>
      <header className="header header--1" data-sticky="true" id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left"><Link className="ps-logo" to="/"><img src={"/img/logo_second.png"}
                                alt="" /></Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle"><i className="icon-menu"> </i><span>Shop by Department</span></div>
                            {/* <FontAwesomeIcon icon={["fas", "coffee"]} /> */}
                            <div className="menu__content">
                                <ul className="menu--dropdown">
                                    <li><Link to="shop.html"><i className="icon-star"></i>Hot Promotions</Link></li>
                                    <li className="menu-item-has-children has-mega-menu"><Link to="shop.html">
                                    <i class="fas fa-laptop-medical"></i>Consumer Electronic</Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Electronic</h4>
                                                <ul className="mega-menu__list">
                                                    <li><Link to="shop.html">Home Audio &amp; Theathers</Link></li>
                                                    <li><Link to="shop.html">TV &amp; Videos</Link></li>
                                                    <li><Link to="shop.html">Cellphones &amp; Accessories</Link></li>
                                                    <li><Link to="shop.html">Headphones</Link></li>
                                                    <li><Link to="shop.html">Wireless Speakers</Link></li>
                                                    <li><Link to="shop.html">Office Electronic</Link></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Accessories &amp; Parts</h4>
                                                <ul className="mega-menu__list">
                                                    <li><Link to="shop.html">Digital Cables</Link></li>
                                                    <li><Link to="shop.html">Audio &amp; Video Cables</Link></li>
                                                    <li><Link to="shop.html">Batteries</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="menu-item-has-children has-mega-menu"><Link to="shop.html"><i
                                                className="icon-desktop"></i>Computer &amp; Technology</Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Computer &amp; Technologies</h4>
                                                <ul className="mega-menu__list">
                                                    <li><Link to="shop.html">Computer &amp; Tablets</Link></li>
                                                    <li><Link to="shop.html">Laptop</Link></li>
                                                    <li><Link to="shop.html">Mobiles</Link></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li><Link to="shop.html"><i className="icon-smartphone"></i>Phones &amp; Accessories</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__center">
                        <form className="ps-form--quick-search" method="get" action="https://reactstorefronts.com/">
                            <div className="ps-form__categories"><select className="form-control">
                                    <option >All</option>
                                    <option >Babies &amp; Moms</option>
                                    <option >Cars &amp; Motocycles</option>
                                    <option >Clothing &amp; Apparel</option>
                                    <option > Accessories</option>
                                    <option >Bags</option>
                                    <option >Kid’s Fashion</option>
                                    <option >Mens</option>
                                    <option >Shoes</option>
                                    <option >Sunglasses</option>
                                    <option >Womens</option>
                                    <option >Computers &amp; Technologies</option>
                                    <option >Desktop PC</option>
                                    <option >Laptop</option>
                                    <option >Smartphones</option>
                                </select></div>
                            <div className="ps-form__input"><input type="text" className="form-control" 
                                    placeholder="I&#x27;m shopping for..." /></div><button>Search</button>
                            <div className="ps-panel--search-result">
                                <div className="ps-panel__content">
                                    <p>No product found.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="header__right">
                        <div className="header__actions"><Link className="header__extra" to="account/compare.html"><i
                                    className="icon-chart-bars"></i><span><i>0</i></span></Link><Link className="header__extra"
                                to="account/wishlist.html"><i className="icon-heart"></i><span><i>0</i></span></Link>
                            <div className="ps-cart--mini"><Link className="header__extra" to="#"><i
                                        className="icon-bag2"></i><span><i>0</i></span></Link>
                                <div className="ps-cart__content">
                                    <div className="ps-cart__items"><span>No products in cart</span></div>
                                </div>
                            </div>
                            <div className="ps-block--user-header">
                                <div className="ps-block__left"><i className="icon-user"></i></div>
                                <div className="ps-block__right"><Link to="/login">Login</Link><Link
                                        to="/register">Register</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle"><i className="icon-menu"></i><span>Shop by Department</span></div>
                            <div className="menu__content">
                                <ul className="menu--dropdown">
                                    <li><Link to="shop.html"><i className="icon-star"></i>Hot Promotions</Link></li>
                                    <li className="menu-item-has-children has-mega-menu"><Link to="shop.html"><i
                                                className="icon-laundry"></i>Consumer Electronic</Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Electronic</h4>
                                                <ul className="mega-menu__list">
                                                    <li><Link to="shop.html">Home Audio &amp; Theathers</Link></li>
                                                    <li><Link to="shop.html">TV &amp; Videos</Link></li>
                                                    <li><Link to="shop.html">Camera, Photos &amp; Videos</Link></li>
                                                    <li><Link to="shop.html">Cellphones &amp; Accessories</Link></li>
                                                    <li><Link to="shop.html">Headphones</Link></li>
                                                    <li><Link to="shop.html">Videosgames</Link></li>
                                                    <li><Link to="shop.html">Wireless Speakers</Link></li>
                                                    <li><Link to="shop.html">Office Electronic</Link></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Accessories &amp; Parts</h4>
                                                <ul className="mega-menu__list">
                                                    <li><Link to="shop.html">Digital Cables</Link></li>
                                                    <li><Link to="shop.html">Audio &amp; Video Cables</Link></li>
                                                    <li><Link to="shop.html">Batteries</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="shop.html"><i className="icon-shirt"></i>Clothing &amp; Apparel</Link></li>
                                    <li><Link to="shop.html"><i className="icon-lampshade"></i>Home, Garden &amp; Kitchen</Link>
                                    </li>
                                    <li><Link to="shop.html"><i className="icon-heart-pulse"></i>Health &amp; Beauty</Link></li>
                                    <li><Link to="shop.html"><i className="icon-diamond2"></i>Yewelry &amp; Watches</Link></li>
                                    <li className="menu-item-has-children has-mega-menu"><Link to="shop.html"><i
                                                className="icon-desktop"></i>Computer &amp; Technology</Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Computer &amp; Technologies</h4>
                                                <ul className="mega-menu__list">
                                                    <li><Link to="shop.html">Computer &amp; Tablets</Link></li>
                                                    <li><Link to="shop.html">Laptop</Link></li>
                                                    <li><Link to="shop.html">Monitors</Link></li>
                                                    <li><Link to="shop.html">Networking</Link></li>
                                                    <li><Link to="shop.html">Drive &amp; Storages</Link></li>
                                                    <li><Link to="shop.html">Computer Components</Link></li>
                                                    <li><Link to="shop.html">Security &amp; Protection</Link></li>
                                                    <li><Link to="shop.html">Gaming Laptop</Link></li>
                                                    <li><Link to="shop.html">Accessories</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="shop.html"><i className="icon-baby-bottle"></i>Babies &amp; Moms</Link></li>
                                    <li><Link to="shop.html"><i className="icon-baseball"></i>Sport &amp; Outdoor</Link></li>
                                    <li><Link to="shop.html"><i className="icon-smartphone"></i>Phones &amp; Accessories</Link>
                                    </li>
                                    <li><Link to="shop.html"><i className="icon-book2"></i>Books &amp; Office</Link></li>
                                    <li><Link to="shop.html"><i className="icon-car-siren"></i>Cars &amp; Motocycles</Link></li>
                                    <li><Link to="shop.html"><i className="icon-wrench"></i>Home Improments</Link></li>
                                    <li><Link to="shop.html"><i className="icon-tag"></i>Vouchers &amp; Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navigation__right">
                        <ul className="menu">
                            <li className="menu-item-has-children dropdown"><Link to="/">Home</Link>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children dropdown"><Link to="/">Marketplace Full
                                            Width</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/auto-part.html">Home Auto
                                            Parts</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/technology.html">Home
                                            Technology</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/organic.html">Home
                                            Organic</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/market-place.html">Home
                                            Marketplace V1</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/market-place-2.html">Home
                                            Marketplace V2</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/market-place-3.html">Home
                                            Marketplace V3</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/market-place-4.html">Home
                                            Marketplace V4</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/electronic.html">Home
                                            Electronic</Link></li>
                                    <li className="menu-item-has-children dropdown"><Link to="home/furniture.html">Home
                                            Furniture</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children has-mega-menu"><Link to="shop.html">Shop</Link>
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                        <h4>Catalog Pages</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="shop.html">Shop Default</Link></li>
                                            <li><Link to="shop/shop-fullwidth.html">Shop Fullwidth</Link></li>
                                            <li><Link to="shop/shop-categories.html">Shop Categories</Link></li>
                                            <li><Link to="shop/shop-sidebar.html">Shop Sidebar</Link></li>
                                            <li><Link to="shop/shop-sidebar-without-banner.html">Shop Without Banner</Link>
                                            </li>
                                            <li><Link to="shop/shop-carousel.html">Shop Carousel</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                        <h4>Product Layout</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="product/3.html">Default</Link></li>
                                            <li><Link to="product/extended/7.html">Extended</Link></li>
                                            <li><Link to="product/full-content/7.html">Full Content</Link></li>
                                            <li><Link to="product/boxed/7.html">Boxed</Link></li>
                                            <li><Link to="product/sidebar/7.html">Sidebar</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                        <h4>Product Types</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="product/3.html">Simple</Link></li>
                                            <li><Link to="product/image-swatches/11.html">Image swatches</Link></li>
                                            <li><Link to="product/countdown/10.html">Countdown</Link></li>
                                            <li><Link to="product/affiliate/7.html">Affiliate</Link></li>
                                            <li><Link to="product/on-sale/7.html">On sale</Link></li>
                                            <li><Link to="product/groupped/22.html">Grouped</Link></li>
                                            <li><Link to="product/out-of-stock/7.html">Out Of Stock</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                        <h4>Ecomerce Pages</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="account/shopping-cart.html">Shopping Cart</Link></li>
                                            <li><Link to="account/checkout.html">Checkout</Link></li>
                                            <li><Link to="account/wishlist.html">Whishlist</Link></li>
                                            <li><Link to="account/compare.html">Compare</Link></li>
                                            <li><Link to="account/order-tracking.html">Order Tracking</Link></li>
                                            <li><Link to="account/login.html">My Account</Link></li>
                                            <li><Link to="account/login.html">Login / Register</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children has-mega-menu"><Link to="/">Pages</Link>
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                        <h4>Basic Page</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="page/about-us.html">About Us</Link></li>
                                            <li><Link to="page/contact-us.html">Contact</Link></li>
                                            <li><Link to="page/faqs.html">Faqs</Link></li>
                                            <li><Link to="page/page-404.html">404 Page</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                        <h4>Vendor Pages</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="vendor/become-a-vendor.html">Become a Vendor</Link></li>
                                            <li><Link to="vendor/vendor-store.html">Vendor Store</Link></li>
                                            <li><Link to="stores.html">Store List</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children has-mega-menu"><Link to="blog.html">Blogs</Link>
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                        <h4>Blog Layout</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="blog.html">Grid</Link></li>
                                            <li><Link to="blog/blog-small-thumbnail.html">Small Thumb</Link></li>
                                            <li><Link to="blog/blog-left-sidebar.html">Left Sidebar</Link></li>
                                            <li><Link to="blog/blog-right-sidebar.html">Right Sidebar</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                        <h4>Single Blog</h4>
                                        <ul className="mega-menu__list">
                                            <li><Link to="post/default.html">Single 1</Link></li>
                                            <li><Link to="post/detail-2.html">Single 2</Link></li>
                                            <li><Link to="post/detail-3.html">Single 3</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>  

        <header className="header header--mobile">
            
            <div className="navigation--mobile">
                <div className="navigation__left"><Link className="ps-logo" to="/"><img src={"/img/logo_second.png"}
                            alt="Classique" /></Link></div>
                <div className="navigation__right"><Link className="header__extra" to="#"><i
                            className="icon-bag2"></i><span><i>0</i></span></Link>
                    <div className="header__extra"><i className="icon-user"></i></div>
                </div>
            </div>
            <div className="ps-search--mobile">
                <form className="ps-form--search-mobile" method="get">
                    <div className="form-group--nest"><input type="text" className="form-control"
                            placeholder="Search something..." /><button><i className="icon-magnifier"></i></button></div>
                </form>
            </div>
        </header>

    </>
  )
}

export default Header
