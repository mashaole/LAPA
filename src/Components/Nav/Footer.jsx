import React from 'react';
import logo from '../assets/IAmPresenting.png'

var style = {
    backgroundColor: "#fffff",
    textAlign: "center",
    left: "0",
    bottom: "0",
    height: "auto",
    fontSize: "20px",
    color: "black",
    padding: "30px",
    marginRight: "10px"
}

var phantom = {
    display: 'block',
    marginRight: '30px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                © 2020 by Lapa Proudly created by <a href="https://mashaolemogale05.wixsite.com/mysite"><img src={logo} alt="IAmPresenting" /></a>
            </div>
        </div>
    )
}

export default Footer;