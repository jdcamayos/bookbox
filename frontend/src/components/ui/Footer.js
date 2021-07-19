import React from 'react'

import '../../css/components/Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <p>BookBox &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}
