import React from 'react'

const Nav = () => {
        return (


            <nav>
                <ul>
                    <li><img className="logo" src="/ProductImages/The-Plug-Logo.jpg" alt="The Plug Logo" /></li>
                    <li><a className="navbutton" href="home.html">Home</a></li>
                    <li className="active"><a class="navbutton" href="products.html">Products</a></li>
                    <li><a className="navbutton" href="contact.html">Contact</a></li>
                </ul>
            </nav>
     )
    }


export default Nav