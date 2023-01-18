import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header_container'>
                <Link to='/'>
                    <img className='header_image' src='data:image/jpeg;base64,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' />

                </Link>
                <div className='search_box'>
                    <input placeholder='Search a product' type='text' />
                </div>
            </div>
            <div className='header_right'>
                <Link to='/checkout'>
                    <div className='headerOption_basket'>
                        Cart
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header