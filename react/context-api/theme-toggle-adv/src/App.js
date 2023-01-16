import React, { useContext } from 'react'
import './App.css'
import { useContextValue } from './context/theme-context'

export default function App() {

  const { theme, toggle, dark } = useContextValue()
  return (
    <div className='app'>
      <h1>Theme Toggler</h1>
      <div
        className='app_header'
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color
        }}

      >
        <h1>Context Api Theme Toggler</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis libero sit amet porta convallis. In accumsan pulvinar arcu vel interdum. In dapibus magna a magna pharetra, id fringilla ex interdum. Aenean a metus ut orci hendrerit aliquet. Morbi lacinia odio in odio porta, a semper leo ultrices. Ut a lorem vitae ligula tristique elementum quis at felis. Proin tincidunt cursus nisl vel molestie. Nulla laoreet leo nec lorem ullamcorper sollicitudin. Fusce eu lacus tempor, molestie neque ac, ultrices nunc. Quisque ac diam sed dolor imperdiet pharetra. Sed at tortor velit.</p>
        <div className='button_container'>
          {`Toggle to ${!dark ? 'Dark' : 'Light'} Mode`}
        </div>
      </div>

    </div>
  )
}
