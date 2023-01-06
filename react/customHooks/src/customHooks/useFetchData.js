import React, { useState, useEffect } from 'react'

function useFetchData(url) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(results => setData(results))
    }, [url])


    return (
        [data]
    )
}

export default useFetchData