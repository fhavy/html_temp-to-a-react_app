import React from 'react'


class About extends React.Component {
    render() {
        return (
            <main>
                  <section id="page-header" class="contact-header">
            <h2>#About</h2>
            <p>Little Details about us</p>
        </section>

        <section id="contact-details" class="section-p1">
            <div class="details">
                <span>GET IN TOUCH</span>
                <h2>Visit on of our agency locations or contact us today</h2>
                <h3>Head Office</h3>
                <div>
                    <li>
                        <i class="fas fa-map"></i>
                        <p>328, Birdington Road, Street 22, San-Franscisco</p>
                    </li>
                    <li>
                        <i class="fas fa-envelope"></i>
                        <p>contact@example.com</p>
                    </li>
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <p>contact@example.com</p>
                    </li>
                    <li>
                        <i class="fas fa-clock"></i>
                        <p>Monday to Saturday: 9am - 10pm</p>
                    </li>
                </div>
            </div>
            
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8089841344945!2d-1.256555484398072!3d51.754816379676534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sng!4v1664377753620!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
            </main>
        );
    }
}

export default About
