import React, { Component } from 'react'
import NavBar from './NavBar'

import '../css/components/Header.css'
import BookBoxLogo500 from '../assets/images/bookbox_L500.png'

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <span>
                    <img src={BookBoxLogo500} alt="logo BookBox"/>
                    <p>BookBox</p>
                </span>
                <NavBar />
            </header>
        )
    }
}

export default Header
