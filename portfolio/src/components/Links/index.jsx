import React from 'react';
import "./style.css";

function Links() {
    return (
        <div>
            <a href="https://www.linkedin.com/in/aja-strommen-66a937187/" className="hvr-grow">
                    <img src={process.env.PUBLIC_URL + "./img/linkedin.png"} alt="LinkedIn logo" />
                </a>
                <a href="https://github.com/astrommen" className="hvr-grow">
                    <img src={process.env.PUBLIC_URL + "./img/github.png"} alt="Github logo" />
                </a>
                <a href="https://codepen.io/astrommen" className="hvr-grow">
                    <img src={process.env.PUBLIC_URL + "./img/codepen.png"} alt="Codepen logo" />
                </a>
                <a href="portfolio-copy.html" className="hvr-grow">
                    <img src={process.env.PUBLIC_URL + "./img/portfolio.png"} alt="Portfolio Icon" />
                </a>
                <a href="contact.html" className="hvr-grow">
                    <img src={process.env.PUBLIC_URL + "./img/contactus.png"} alt="Contact Icon" />
                </a>
            {/* <!-- Copyright@2019 --> */}
        </div>
    )
}

export default Links;