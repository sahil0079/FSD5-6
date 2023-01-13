const productDetails = document.getElementById('productDetails')

const addToCartBtn = document.getElementById('addToCartBtn')

const goToCartBtn = document.getElementById('goToCartBtn')


function loadProductDetails() {
    const productId = window.location.search.split("=")[1]

    fetch(`${BASE_URL}/products/${productId}`)
        .then(res => res.json())
        .then(data => renderProductDetails(data))
        .catch(error => console.log(error))
}

function renderProductDetails(data) {

    let productDetailsHtml = '<div class="product-name">' + data.name + '</div>'
        + '<div class="product-price fw-bold">&#8377; ' + data.cost + '</div>'
        + '<div class="product-description">'
        + '<div class="product-description-title fw-bold">Description </div>'
        + '<div class="product-description-data">' + data.description + '<div>' + '</div>'

    productDetails.innerHTML = productDetailsHtml

}
loadProductDetails()


