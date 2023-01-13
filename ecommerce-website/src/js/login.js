
//variables

const loginForm = getElement('loginForm')
const signupForm = getElement('signupForm')
const showLoginBtn = getElement('showLoginBtn')
const showSignupBtn = getElement('showSignupBtn')
const loginUsername = getElement('loginUsername')
const signupUsername = getElement('signupUsername')
const loginPassword = getElement('loginPassword')
const signupPassword = getElement('signupPassword')
const signupBtn = getElement('signupBtn')
const loginBtn = getElement('loginBtn')
const signupEmail = getElement('signupEmail')
const authErrMsg = getElement('authErrMsg')
const succErrMsg = getElement('succErrMsg')


const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1"
//event Listeners

showSignupBtn.addEventListener('click', showSignup)
showLoginBtn.addEventListener('click', showLogin)

signupBtn.addEventListener('click', signupFn)
loginBtn.addEventListener('click', loginFn)





//functions
function showSignup() {
    signupForm.classList.remove('d-none')
    loginForm.classList.add('d-none')
}
function showLogin() {
    signupForm.classList.add('d-none')
    loginForm.classList.remove('d-none')
}
function signupFn() {
    if (signupUsername.value == '') {
        updateAuthErrorMsg('Username should not be empty')
    } else if (signupPassword.value == '') {
        updateAuthErrorMsg('Password should not be empty')
    } else {
        const data = {
            username: signupUsername.value,
            password: signupPassword.value,
            email: signupEmail.value
        }
        fetch(BASE_URL + '/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                updateSuccErrorMsg(data.message)
            })
            .catch((error) => {
                console.log(error)
            })

    }
}
function loginFn() {

    if (loginUsername.value == '') {
        updateAuthErrorMsg('Username should not be empty')
    } else if (loginPassword.value == '') {
        updateAuthErrorMsg('Password should not be empty')
    } else {
        const data = {
            username: loginUsername.value,
            password: loginPassword.value
        }

        fetch(BASE_URL + '/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('username', data.username)
                    localStorage.setItem('userId', data.id)
                    localStorage.setItem('token', data.accessToken)
                    localStorage.setItem('email', data.email)

                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

}

function updateAuthErrorMsg(msg) {
    authErrMsg.innerText = msg
}
function updateSuccErrorMsg(msg) {
    succErrMsg.innerText = msg
}
function getElement(id) {
    return document.getElementById(id)
}

if (localStorage.getItem('username')) {
    window.location.href = 'index.html'
}