
const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')


//event bubbling
grandparent.addEventListener('click', () => {
    console.log('grandparent clicked')
}, false)
parent.addEventListener('click', (event) => {
    console.log('parent clicked')
    event.stopPropagation()

}, false)
child.addEventListener('click', () => {
    console.log('child clicked')
}, false)

//event capturing
// grandparent.addEventListener('click', () => {
//     console.log('grandparent clicked')
// }, true)
// parent.addEventListener('click', (event) => {
//     console.log('parent clicked')
//     event.stopPropagation()
// }, true)
// child.addEventListener('click', () => {
//     console.log('child clicked')
// }, true)
