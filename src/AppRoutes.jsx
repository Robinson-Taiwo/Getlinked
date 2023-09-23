/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Registration from './Registration'
import Confirmation from './Confirmation'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    )
}

export default AppRoutes
