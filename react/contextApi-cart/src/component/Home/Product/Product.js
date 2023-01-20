import React from 'react'
import { useStateValue } from '../../../context/StateProvider'
import './Product.css'

function Product({ id, title, price, rating, image }) {

    const [_, dispatch] = useStateValue()

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }

        })

    }

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
            <button onClick={addToCart} >Add to Cart</button>
        </div>
    )
}

export default Product