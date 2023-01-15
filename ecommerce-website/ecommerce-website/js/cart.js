const orderDetails = document.getElementById("orderDetails");
const priceDetails = document.getElementById("priceDetails");

function loadOrderDetails() {
    const cartId = localStorage.getItem("cartId");

    const URI = `/carts/${cartId}`;

    const token = localStorage.getItem("token");
    const headers = { 
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${token}` };
    fetch(BASE_URL + URI, {
        method: 'GET', // or 'PUT'
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            renderOrderDetails(data);
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function renderOrderDetails(data) {
    
    let orderDetailsHtml = '<div class="order-details-title fw-bold">Order Details</div>';

    for(i=0; i < data.productsSelected.length; i++) {
        orderDetailsHtml += '<div class="order-details-product d-flex flex-row">'
            + '<div class="order-details-product-img d-flex">'
            + '<img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg">'
            + '</div>'
            + '<div class="order-details-product-data d-flex flex-column">'
            + '<div>' + data.productsSelected[i].name + '</div>'
            + '<div>&#8377; ' + data.productsSelected[i].cost + '</div>'
            + '</div>'
            + '<div class="order-details-product-actions d-flex flex-column">'
            + '<div class="order-details-product-quantity">'
                // + '<div class="fw-bold">Quantity</div>'
                // + '<div class="form-group">'
                //     + '<select class="form-select">'
                //         + '<option value="1" ' + (data.products[i].quantity == 1 ? 'selected' : '') + '>1</option>'
                //         + '<option value="2" ' + (data.products[i].quantity == 2 ? 'selected' : '') + '>2</option>'
                //         + '<option value="3" ' + (data.products[i].quantity == 3 ? 'selected' : '') + '>3</option>'
                //         + '<option value="4" ' + (data.products[i].quantity == 4 ? 'selected' : '') + '>4</option>'
                //         + '<option value="5" ' + (data.products[i].quantity == 5 ? 'selected' : '') + '>5</option>'
                //     + '</select>'
                // + '</div>'
            + '</div>'
            + '<div class="order-details-product-remove btn btn-info">Remove</div>'
            + '</div>'
            + '</div>';
    }

    let priceDetailsHtml = '<div class="price-details-title fw-bold">Price Details</div>'
        + '<div class="price-details-data">'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Price</div>'
            + '<div>&#8377; ' + data.cost + '</div>'
        + '</div>'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Discount</div>'
            + '<div>&#8377; 0</div>'
        + '</div>'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Delivery Charges</div>'
            + '<div>FREE</div>'
        + '</div>'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Total</div>'
            + '<div>&#8377; ' + data.cost + '</div>'
        + '</div>'
        + '</div>'
    
    orderDetails.innerHTML = orderDetailsHtml;
    priceDetails.innerHTML = priceDetailsHtml;
}

loadOrderDetails();