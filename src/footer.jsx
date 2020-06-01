import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                <div className="copyright footer__products">
                    <a href="https://www.instagram.com/ralphlauren/" target="_blank" rel="noopener"> <img border="0" alt="W3Schools" src="/ProductImages/Instagram-Logo.webp" width="100" height="100"/></a>
                    <a href="https://www.facebook.com/RalphLauren/" target="_blank" rel="noopener"> <img border="0" alt="W3Schools" src="/ProductImages/Facebook-Logo.png" width="100" height="100" /></a>
                    <a href="https://twitter.com/ralphlauren" target="_blank" rel="noopener"> <img border="0" alt="W3Schools" src="/ProductImages/Twitter-Logo.png" width="100" height="100"/></a>
                </div>
            </footer>
            </React.Fragment>
        )
    }
}

export default Footer



