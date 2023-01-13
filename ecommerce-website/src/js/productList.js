const categoryList = document.getElementById('categoryList')
const productList = document.getElementById('productList')
const searchInput = document.getElementById('searchInput')
const minPrice = document.getElementById('minPrice')
const maxPrice = document.getElementById('maxPrice')
const clear = document.getElementById('clear')


//event listeners

searchInput.addEventListener('keyup', searchProduct)
minPrice.addEventListener('change', searchProduct)
maxPrice.addEventListener('change', searchProduct)
clear.addEventListener('click', clearAllFilters)

function searchProduct() {

    const data = {
        name: searchInput.value,
        minCost: minPrice.value,
        maxCost: maxPrice.value,
    }

    let URI = '/products?'

    fetch(BASE_URL + URI + new URLSearchParams(data))
        .then(res => res.json())
        .then(data => renderProducts(data))

}

function clearAllFilters() {
    window.location.reload()
}

function loadCategories() {

    fetch(`${BASE_URL}/categories`)
        .then(res => res.json())
        .then(data => renderCategories(data))
        .catch((error) => console.log(error))

}

function loadProducts() {
    const data = {}
    if (window.location.search) {
        data.id = window.location.search.split("=")[1]
    }

    let URI = '/products'

    if (data.id) {
        URI = `/categories/${data.id}/products`
    }

    fetch(`${BASE_URL}${URI}`)
        .then(res => res.json())
        .then(data => renderProducts(data))
}

function renderCategories(categories) {
    let categoryListHtml = ''
    for (i = 0; i < categories.length; i++) {
        categoryListHtml += '<a class="mx-2 text-decoration-none " href="productList.html?categoryId=' + categories[i].id + '">' + categories[i].name + '</a>'
    }

    categoryList.innerHTML = categoryListHtml


}

function renderProducts(products) {
    let productListHtml = ''

    for (let i = 0; i < products.length; i++) {
        productListHtml += '<a class="product-item text-decoration-none d-iniline-block" href="productDetails.html?productId=' + products[i].id + '">' +
            '<div class="product-img">'
            + '<img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg">'
            + '</div>'
            + '<div class="product-name text-center">' + products[i].name + '</div>'
            + '<div class="product-price text-center">&#8377 ' + products[i].cost + '</div>'
            + '</a>'
    }
    productList.innerHTML = productListHtml
}


loadCategories()
loadProducts()