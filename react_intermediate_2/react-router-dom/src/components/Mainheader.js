import React from 'react'
import { Outlet } from 'react-router-dom'

const Mainheader = () => {
  return (
    <div>
      <Outlet/>
      this is jome page
    </div>
  )
}

export default Mainheader
