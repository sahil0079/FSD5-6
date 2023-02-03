
const input = document.getElementById('input')
const defaultText = document.getElementById('defaultText')
const debounceText = document.getElementById('debounceText')
const throttleText = document.getElementById('throttleText')


const updateDebounceText = debounce((text) => debounceText.innerText = text)

const updateThrottleText = throttle((text) => throttleText.innerText = text)
input.addEventListener('input', (e) => {
    defaultText.innerText = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)

})

function debounce(callback, time = 1000) {

    let timeout;

    return (...args) => {
        clearTimeout()
        timeout = setTimeout(() => {
            callback(...args)
        }, time)
    }

}

function throttle(callback, time = 1000) {
    let wait = false
    return (...args) => {

        if (wait) return

        callback(...args)
        wait = true

        setTimeout(() => {
            wait = false
        }, time)
    }
}


