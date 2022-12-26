

const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')

let index = 1
let time = 500 / speedElement.value


const someText = 'I am doing Javascript'

speedElement.addEventListener('change', (e) => {
    time = 500 / e.target.value
})

function automaticText() {


    textElement.innerText = someText.slice(0, index)

    index++

    if (index > someText.length) {
        index = 1
    }

    setTimeout(automaticText, time)

}
automaticText()