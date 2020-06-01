import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <React.Fragment>
                 <div>
                    <nav>
                        <ul>
                            <li><img className="logo" src="/ProductImages/The-Plug-Logo.jpg" alt="The Plug Logo" /></li>
                                <li><a className="navbutton" href="index.html">Home</a></li>
                                <li className="active"><a class="navbutton" href="products.html">Products</a></li>
                                <li><a className="navbutton" href="contact.html">Contact</a></li>
                         </ul>
                     </nav>
              </div>
            </React.Fragment>
        )
    }
}

export default Nav