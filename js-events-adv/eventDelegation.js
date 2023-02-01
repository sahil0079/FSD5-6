

// document.querySelector('#categories').addEventListener('click', (e) => {

//     console.log(e.target.id)
//     window.location.href = '/' + e.target.id

// })


document.querySelector('#categories').addEventListener('click', (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == 'LI') {
        window.location.href = '/' + e.target.id
    }
})