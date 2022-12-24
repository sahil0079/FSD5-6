//callbacks
let stocks = {
    Fruits: ['orange', 'grapes', 'bananas', 'apples'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'choco chips', 'dry fruits']
}

// let order = (fruitName, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruitName]} was selected.`)
//         call_production()

//     }, 2000)
//     //order selection is done, start production


// }
// let production = () => {

//     setTimeout(() => {
//         console.log('production has started')

//         setTimeout(() => {
//             console.log('the fruits are chopped')
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} is added.`)

//                 setTimeout(() => {
//                     console.log('start the machine')

//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[0]}`)

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} is added as toppings`)
//                             setTimeout(() => {
//                                 console.log('Serve the ice cream')

//                             }, 1000)

//                         }, 3000)


//                     }, 2000)

//                 }, 1000)

//             }, 1000)

//         }, 2000)
//     }, 0000)


// }
// order(1, production)


//Promises

let is_shop_open = true

let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log('The shop is closed'))
        }
    })
}
//step 1
order(2000, () => console.log(`${stocks.Fruits[1]} is selected`))
    //step 2 promise hell
    .then(() => {
        return order(0000, () => console.log('production has started'))
    })
    .then(() => {
        return order(2000, () => console.log(`Fruits have been chooped`))
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} is addded`))
    })
    .then(() => {
        return order(1000, () => console.log('start the machine'))
    })
    .then(() => {
        return order(2000, () => console.log(`ice cream placed on ${stocks.holder[0]}`))
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} added as toppings`))
    })
    .then(() => {
        return order(1000, () => console.log('serve the icecream'))
    })



