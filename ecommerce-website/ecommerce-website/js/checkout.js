const orderSummary = document.getElementById("orderSummary");
const priceDetails = document.getElementById("priceDetails");
const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
const orderConfirmed = document.getElementById("orderConfirmed");
let orderId = 0;

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
    let orderDetailsHtml = '<div class="order-details-title fw-bold">Order Summary</div>';
    console.log(data)
    for(i=0; i < data.productsSelected.length; i++) {
        orderDetailsHtml += '<div class="order-details-product d-flex flex-row">'
            + '<div class="order-details-product-img d-flex">'
            + '<img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg">'
            + '</div>'
            + '<div class="order-details-product-data d-flex flex-column">'
            + '<div>' + data.productsSelected[i].name + '</div>'
            + '<div>&#8377; ' + data.productsSelected[i].cost + '</div>'
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
    
    orderSummary.innerHTML = orderDetailsHtml;
    priceDetails.innerHTML = priceDetailsHtml;
}

function createCart(){
	const userId = localStorage.getItem('userId');
	const token = localStorage.getItem('token');
	console.log(userId,token,"33");
	const headers = { 
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${token}` };
		fetch(BASE_URL + '/carts', {
			method: 'POST', headers:headers,
			body : JSON.stringify({userId}),
		}).then(response => response.json() )
		.then(data => 
			localStorage.setItem("cartId",data.id)
			
        
			
		).catch((error) => {
			console.error('Error:', error);
		});
		
  }

  
function confirmPayment() {
    orderConfirmed.classList.remove('d-none');
	confirmPaymentBtn.classList.add('d-none');
    createCart()
        

          
}

loadOrderDetails();

confirmPaymentBtn.addEventListener("click", confirmPayment);