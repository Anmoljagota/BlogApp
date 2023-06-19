import React from 'react'
import {Routes,Route} from "react-router-dom"
import Register from '../Pages/Register'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes

