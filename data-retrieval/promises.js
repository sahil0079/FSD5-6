
//Promises
//=> Promise is an object that represent th eventual completion and failure of an async operation


//in the traditional callbacks
//we pass functions inside function
//in promises we attach a callback to the promise object



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
        div.innerHTML = result
    }, 1000)
}

function createUser(user) {
    //imitate asynchronous behaviour
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user)
            const error = true
            if (!error) {
                resolve()
            } else {
                reject('Error: something is wrong')
            }

        }, 2000)
    })
}

createUser({
    name: 'jonathan',
    age: '40'
})
    .then(getUsers)
    // .then(() => console.log('getPosts'))
    .catch(error => console.log(error))
    .finally(() => console.log('finally method ran'))




