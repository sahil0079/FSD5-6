import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'

function Checkout() {

    const [{ cart }] = useStateValue()

    console.log('cart', cart)
    return (
        <div className='checkout'>
            <div className='checkout_left'>

                {cart?.length == 0 ? (
                    <div>
                        <h1>Your shopping cart is empty</h1>
                        <p>
                            You have no items in the cart. To buy just click on 'Add to cart' next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        {cart?.map(({ id, title, image, price, rating }) => (
                            <CheckoutProduct
                                key={id}
                                id={id}
                                title={title}
                                image={image}
                                price={price}
                                rating={rating}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout