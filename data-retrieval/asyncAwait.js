
//Async

//async is a function declaration
//await keyword is allowed inside the function body
//THese enable asynchronous and a promise based behaviour



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
            const error = false
            if (!error) {
                resolve()
            } else {
                reject('Error: something is wrong')
            }

        }, 2000)
    })
}


//Async and await

async function userOperation() {

    await createUser({
        name: 'jonathan', age: 40
    })

    getUsers()

}
userOperation()




