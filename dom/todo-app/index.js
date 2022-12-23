//variables

const form = getElement('addForm')
const todoList = getElement('todos')
const filter = getElement('filter')
const todo = getElement('todo')





//eventListners

//form submit

form.addEventListener('submit', addTodo)

//click event on delete
todoList.addEventListener('click', removeTodo)

//keyup event on search
filter.addEventListener('keyup', filterTodos)

//functions

function getElement(id) {
    return document.getElementById(id)
}

function addTodo(e) {
    e.preventDefault()

    if (todo.value == '') {
        alert('put a valid todo')
        return
    }

    //get the user input 
    const newTodo = todo.value

    //create a new li element

    let li = document.createElement('li')

    //add the classes to li
    li.className = 'list-group-item'

    //add newtodo to the li

    li.innerText = newTodo

    //create delete button element

    let deleteButton = document.createElement('button')

    deleteButton.className = "btn btn-danger btn-sm delete"

    deleteButton.innerText = 'delete'

    li.append(deleteButton)
    todoList.append(li)

    todo.value = ''

}
function removeTodo(e) {
    if (e.target.classList.contains('delete')) {
        let result = confirm('Are you sure?')
        if (result) {
            let li = e.target.parentElement
            todoList.removeChild(li)

        }

    }
}
function filterTodos(e) {

    //convert to lowercase

    let searchText = e.target.value.toLowerCase()

    //get the list items
    let liItems = document.getElementsByTagName('li')

    //convert it into array

    Array.from(liItems).forEach(item => {
        let todoName = item.firstChild.textContent

        console.log(todoName.toLowerCase().indexOf(searchText))
        if (todoName.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'block'

        } else {

            item.style.display = 'none'
        }
    })




}
