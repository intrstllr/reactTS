import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { Catalog } from './pages/Catalog'
import { Input } from './components/ui/Input';
import { FiAlignJustify } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Button } from './components/ui/Button';

function App() {
  return (
    <>
      <header className='w-full  grid grid-cols-2 items-center bg-slate-700r h-20'>
        <div className='flex justify-end'>
          <div className='flex flex-col justify-center items-end'>
            <FiAlignJustify size={26} />
          </div>
          <div className='flex justify-evenly w-2/4' >
            <div className='h-full flex flex-row w-20 text-xl justify-center items-center'>
              <a href='/'>Discover</a>
            </div>
            <div className='h-full flex flex-row w-20 text-xl justify-center items-center'>
              <a href='/Catalog'>Creators</a>
            </div>
            <div className='h-full flex flex-row w-20 text-xl justify-center items-center'>
              <a href='/'>Sell</a>
            </div>
            <div className='h-full flex flex-row w-20 text-xl justify-center items-center'>
              <a href='/'>Stats</a>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex align-center mx-5 justify-center'>
            <FiSearch className='pe-2 size-10'></FiSearch>
            <Input placeholder="Search Art Work / Creator" className='h-14 text-base'></Input>
          </div>
          <Button variant="outline" className='h-14 w-52 bg-black  '>Connect Wallet</Button>

        </div>
      </header>
      <Routes>
        <Route path='/Catalog' element={<Catalog />}></Route>
      </Routes>
    </>
  )
}

export default App;
