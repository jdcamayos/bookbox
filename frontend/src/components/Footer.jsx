import React, { Component } from 'react'

import '../css/components/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>BookBox &copy; { new Date().getFullYear() }</p>
            </footer>
        )
    }
}

export default Footer
