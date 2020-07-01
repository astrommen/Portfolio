import React from 'react';
import Links from '../Links';
import "./style.css";

function Shutter() {
    return (
        <div className="flex-container left card">
            <img src={process.env.PUBLIC_URL + "./img/Drawing.png"} id="logo" alt="Aja's logo" />


            <div className="main"> 
                {/* <!--bio of me, including pic--> */}
                Hi! I'm a web developer based in Philadelphia. <br />
                I love taking a journey into the rabbit hole <br />
                and making order out of chaos. <br />
                Check out some of my work below.
            </div>

            <div className="links">
                <Links />

            </div>

        </div>
    );
}

export default Shutter;