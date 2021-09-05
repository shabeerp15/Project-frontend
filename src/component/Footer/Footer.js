import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="ps-footer">
                <div className="ps-container">
                    <div className="ps-footer__widgets">
                        <aside className="widget widget_footer widget_contact-us">
                            <h4 className="widget-title">Contact us</h4>
                            <div className="widget_content">
                                <p>Call us 24/7</p>
                                <h3>1800 97 97 69</h3>
                                <p>502 New Design Str, Melbourne, Australia <br /><Link
                                    to="cdn-cgi/l/email-protection.html#0665696872676572466b6774726073747f286569"><span
                                        className="__cf_email__"
                                        data-cfemail="45262a2b3124263105282437312330373c6b262a">[email&#160;protected]</span></Link>
                                </p>
                                <ul className="ps-list--social">
                                    <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link className="google-plus" to="#"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link className="instagram" to="#"><i className="fa fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </aside>
                        <aside className="widget widget_footer">
                            <h4 className="widget-title">Quick links</h4>
                            <ul className="ps-list--link">
                                <li><Link to="page/blank.html">Policy</Link></li>
                                <li><Link to="page/blank.html">Term & Condition</Link></li>
                                <li><Link to="page/blank.html">Shipping</Link></li>
                                <li><Link to="page/blank.html">Return</Link></li>
                                <li><Link to="page/faqs.html">FAQs</Link></li>
                            </ul>
                        </aside>
                        <aside className="widget widget_footer">
                            <h4 className="widget-title">Company</h4>
                            <ul className="ps-list--link">
                                <li><Link to="page/about-us.html">About Us</Link></li>
                                <li><Link to="page/blank.html">Affilate</Link></li>
                                <li><Link to="page/blank.html">Career</Link></li>
                                <li><Link to="page/contact-us.html">Contact</Link></li>
                            </ul>
                        </aside>
                        <aside className="widget widget_footer">
                            <h4 className="widget-title">Bussiness</h4>
                            <ul className="ps-list--link">
                                <li><Link to="page/about-us.html">Our Press</Link></li>
                                <li><Link to="account/checkout.html">Checkout</Link></li>
                                <li><Link to="account/user-information.html">My account</Link></li>
                                <li><Link to="shop.html">Shop</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="ps-footer__links">
                        <p><strong>Consumer Electric:</strong><Link to="shop.html">Air Conditioners</Link><Link
                            to="shop.html">Audios & Theaters</Link><Link to="shop.html">Car Electronics</Link><Link
                                to="shop.html">Office Electronics</Link><Link to="shop.html">TV Televisions</Link><Link
                                    to="shop.html">Washing Machines</Link></p>
                        <p><strong>Clothing & Apparel:</strong><Link to="shop.html">Printers</Link><Link
                            to="shop.html">Projectors</Link><Link to="shop.html">Scanners</Link><Link to="shop.html">Store
                                & Business</Link><Link to="shop.html">4K Ultra HD TVs</Link><Link to="shop.html">LED TVs</Link><Link
                                    to="shop.html">OLED TVs</Link></p>
                        <p><strong>Home, Garden & Kitchen:</strong><Link to="shop.html">Cookware</Link><Link
                            to="shop.html">Decoration</Link><Link to="shop.html">Furniture</Link><Link to="shop.html">Garden
                                Tools</Link><Link to="shop.html">Garden Equipments</Link><Link to="shop.html">Powers And Hand
                                    Tools</Link><Link to="shop.html">Utensil & Gadget</Link></p>
                        <p><strong>Health & Beauty:</strong><Link to="shop.html">Hair Care</Link><Link
                            to="shop.html">Decoration</Link><Link to="shop.html">Makeup</Link><Link to="shop.html">Body
                                Shower</Link><Link to="shop.html">Skin Care</Link><Link to="shop.html">Cologine</Link><Link
                                    to="shop.html">Perfume</Link></p>
                        <p><strong>Jewelry & Watches:</strong><Link to="shop.html">Necklace</Link><Link
                            to="shop.html">Pendant</Link><Link to="shop.html">Diamond Ring</Link><Link to="shop.html">Sliver
                                Earing</Link><Link to="shop.html">Leather Watcher</Link><Link to="shop.html">Gucci</Link></p>
                        <p><strong>Computer & Technologies:</strong><Link to="shop.html">Desktop PC</Link><Link
                            to="shop.html">Laptop</Link><Link to="shop.html">Smartphones</Link><Link
                                to="shop.html">Tablet</Link><Link to="shop.html">Game Controller</Link><Link to="shop.html">Audio
                                    & Video</Link><Link to="shop.html">Wireless Speaker</Link></p>
                    </div>
                    <div className="ps-footer__copyright">
                        <p>© 2021 Classique. All Rights Reserved</p>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
