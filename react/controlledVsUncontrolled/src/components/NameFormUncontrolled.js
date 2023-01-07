//useRef
import { useRef } from "react"

export default function NameFormUncontrolled() {

    const inputRef = useRef("")

    const handleSubmit = () => {
        alert(`the name is ${inputRef.current.value} `)
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                <input ref={inputRef} type='text' />
            </label>
            <input type='submit' />
        </form>
    )
}







// import React, { Component } from "react";


// export default class NameFormUncontrolled extends Component {
//     constructor(props) {
//         super(props)

//         this.inputRef = React.createRef()
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         alert(`The name is ${this.inputRef.current.value}`)
//     }
//     render() {
//         console.log(this.inputRef)
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <input ref={this.inputRef} type='text' />
//                 </label>
//                 <input type='submit' />
//             </form>
//         )

//     }
// }




