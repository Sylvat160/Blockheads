import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar, Sidebar } from './components'
import { Home, Profile, CreatePropertyToken, PropertyDetails, Kyc, Notifications } from './pages'
import { github } from './assets'

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-asset" element={<CreatePropertyToken />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          
        </Routes>
      </div>

      <div className="text-gray-400 absolute bottom-0 right-0 p-4 flex justify-center content-center mt-2">
        Made & custom By
        <a
          href="https://portfolio-sylvat160.vercel.app/"
          target='_blank'
          className="text-[#1dc071] pl-1 pr-1"
        >
          Sylvain
        </a>
        <a href="https://github.com/Sylvat160" target='_blank'>
          <img src={github} width="25" alt="github" />
        </a>
      </div>
    </div>
  );
}

export default App
