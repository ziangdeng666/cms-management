import React from 'react'
import {Outlet} from 'react-router-dom'
import "./App.less"

export default function App() {
  return (
    <div>
        <h2>App Component</h2>
        <Outlet />
    </div>
  )
}
