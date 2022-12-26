const body = document.body
const images = document.querySelectorAll('.slide')
const leftButton = document.getElementById('leftArrow')
const rightButton = document.getElementById('rightArrow')

let imageIndex = 0

rightButton.addEventListener('click', nextImage)

leftButton.addEventListener('click', previousImage)


function nextImage() {

    imageIndex++

    if (imageIndex > images.length - 1) {
        imageIndex = 0
    }
    setBackgroundImage()
    setActiveImage()

}
setBackgroundImage()

function previousImage() {
    imageIndex--

    if (imageIndex < 0) {
        imageIndex = images.length - 1
    }

    setBackgroundImage()
    setActiveImage()


}

function setActiveImage() {
    images.forEach((image) => image.classList.remove('active'))

    images[imageIndex].classList.add('active')


}
function setBackgroundImage() {

    body.style.backgroundImage = images[imageIndex].style.backgroundImage
}
