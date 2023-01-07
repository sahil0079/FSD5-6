import React, { useState } from 'react'

function NameFormControlled() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {

        if (e.target.name == 'name') {
            setUser((user) => ({ ...user, name: e.target.value }))
        } else if (e.target.name == 'email') {
            setUser((user) => ({ ...user, email: e.target.value }))
        }
        // if (e.target.name == 'name') {
        //     setName(e.target.value)
        // } else if (e.target.name == 'email') {
        //     setEmail(e.target.value)
        // }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`My name is ${user.name} and email is ${user.email}`)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input name='name' onChange={handleChange} type='name' placeholder='name..' />
            </label>
            <label>
                <input name='email' onChange={handleChange} type='email' placeholder='email..' />
            </label>
            <input type='submit'></input>
        </form>
    )
}

export default NameFormControlled












// import React from 'react'


// export default class NameFormControlled extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: ''
//         }
//     }

//     // handleNameChange = (event) => {

//     //     this.setState({
//     //         name: event.target.value
//     //     })

//     // }
//     // handleEmailChange = (event) => {
//     //     this.setState({
//     //         email: event.target.value
//     //     })
//     // }
//     handleChange = (event) => {
//         if (event.target.name === 'name') {
//             this.setState({
//                 name: event.target.value
//             })
//         } else if (event.target.name === 'email') {
//             this.setState({
//                 email: event.target.value
//             })
//         }

//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         alert(`My name is ${this.state.name} and email is ${this.state.email}`)
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <input name='name' onChange={this.handleChange} type='text' placeholder='name' />
//                 </label>
//                 <label>
//                     <input name='email' onChange={this.handleChange} type='email' placeholder='email...' />
//                 </label>
//                 <input type='submit' />
//             </form>
//         )
//     }
// }