import React from 'react'


class Header extends React.Component {
    render() {
        return (
            <section id="header">
            <a href="#"><img src="../img/logo.png" className="logo" alt="logo"/></a>
            <div>
                <ul id="navbar">
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a  href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li id="lg-bag"><a href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                    <a href="#" id="close"><i className="fa fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
        );
    }
}

export default Header
