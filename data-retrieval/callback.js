
//callback => function passed onto another function
//it is used for async programming. 
//we pass function as a call back so that it can be used later sometime in the code

//problems with callbacks
//inversion of control
//callback hell
const div = document.querySelector('div')

const users = [
    { name: 'John', age: '20' },
    { name: 'Peter', age: '30' },
]
function getUsers() {
    //imitate asynchronous behaviour
    setTimeout(() => {
        let result = ''
        users.forEach((user, index) => {
            result = result + `<li>${user.name}</li>`
        })
        console.log(result)
        div.innerHTML = result
    }, 1000)
}

function createUser(user, callback) {
    //imitate asynchronous behaviour
    setTimeout(() => {
        users.push(user)
        // 100 lines of code
        //create user is being used in many places
        callback()
    }, 2000)
}

createUser({
    name: 'jonathan',
    age: '40'
}, getUsers)


//ecommerce website

// basket = ['samsung', 'laptop', 'shoes']

// //callback hell
// createOrder(basket, () => {
//     confirmCheckout(() => {
//         proceedToPayment(() => {

//             orderSummary(() => {
//                 //more callback
//             })
//         })
//     })
// })




