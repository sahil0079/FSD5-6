import React from 'react'
import './Product.css'

function Product({ id, title, price, rating, image }) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <strong>$</strong>
                    <span>{price} </span>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map(_ => (
                            <p>⭐</p>
                        ))
                    }
                </div>

            </div>
            <img src={image} />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product