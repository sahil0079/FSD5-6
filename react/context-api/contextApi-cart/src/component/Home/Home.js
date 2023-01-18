import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product/Product'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className='home'>

            <div className='home_rows'>
                {products?.map((product) => (
                    <div key={product.id} className='home_row'>
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={Math.round(product.rating.rate)}
                            image={product.image}
                        />
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Home