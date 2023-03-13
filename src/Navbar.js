import React from 'react'
import './App.css'
function Navbar(props) {
  return (
     
<div style ={{fontSize: '20px'}} className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} "`}  >
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label light" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  )
}

export default Navbar
