import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { Catalog } from './pages/Catalog'

import { Button } from './components/ui/button';
import { Input } from './components/ui/Input';
function App() {
  return (
    <>
      <header className='w-full h-24'>
        <div className='h-full w-9/12 flex justify-evenly  m-auto max-w-screen-xl' >
          <div className='flex flex-col justify-center items-end'>
            {/* <FiAlignJustify size={26} /> */}
          </div>
          <div className='flex w-1/3 justify-between'>
            <div className='h-full flex flex-row  text-xl justify-center items-center'>
              <a href='/'>Discover</a>
            </div>
            <div className='h-full flex flex-row  text-xl justify-center items-center'>
              <a href='/Catalog'>Creators</a>
            </div>
            <div className='h-full flex flex-row  text-xl justify-center items-center'>
              <a href='/'>Sell</a>
            </div>
            <div className='h-full flex flex-row  text-xl justify-center items-center'>
              <a href='/'>Stats</a>
            </div>

          </div>
          <div className='flex w-1/2 items-center justify-end' >
            <div className='flex w-1/2 items-center mr-5 bg-slate-50 rounded-2xl' >

              <Input placeholder="Search Art Work / Creator" className='  bg-slate-50 h-14 text-base rounded-2xl'></Input>

            </div>
            <Button variant="outline" className='h-14 w-52 bg-black text-white  rounded-2xl '>Connect Wallet</Button>

          </div>
        </div>

      </header >
      <Routes>
        <Route path='/Catalog' element={<Catalog />}></Route>
      </Routes>
    </>
  )
}

export default App;