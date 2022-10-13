import React from 'react'


class Footer extends React.Component {
    render() {
        return (
           <footer class="section-p1" >
                <div class="col">
                <img class="logo" src="../img/logo.png" alt="" />
                <h4>Contact</h4>
                <p><strong>Address:</strong> 328, Birdington Road, Street 22, San-Franscisco</p>
                <p><strong>Phone:</strong> +01 2222 954/(+91) 01 2345 6789</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat </p>
                <div class="div">
                    <h4>Follow Us</h4>
                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-pinterest"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>

            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track my Order</a>
                <a href="#">Help</a>
            </div>

            <div class="col install">
                <h4>Install App</h4>
                <p>From App-store or Google-play</p>
                <div class="row">
                    <img src="../img/pay/app.jpg" alt="" />
                    <img src="../img/pay/play.jpg" alt="" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src="../img/pay/pay.png" alt="" />
            </div>

            <div class="copyright">
                <p>2022, DECA Bros. E-commerce Template</p>
            </div>
        </footer>
        );
    }
}

export default Footer
