import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product/Product'

function Home({ searchProduct }) {

    const [products, setProducts] = useState([])
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                SetLoading(false)
            }).catch(err => console.log(err))

    }, [])

    if (loading) {

        return <h1>Loading...</h1>
    }



    return (
        <div className='home'>

            <div className='home_rows'>
                {products?.filter((product) => product.title.toLowerCase().includes(searchProduct.toLowerCase())).map((product) => (
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