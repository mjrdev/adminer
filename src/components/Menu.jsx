import { MdDashboard, MdMore } from 'react-icons/md';
import { TiTabsOutline } from 'react-icons/ti';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/Cg';
import { BiDownArrow } from 'react-icons/bi';
import { AiOutlineForm } from 'react-icons/ai';

import { Button } from '../design/Button';

export default function Menu() {
  return (
    <nav className="flex flex-col h-[100vh] bg-gray-800 w-[11rem] hover:w-[13rem] transition-all fixed">
      <div className='h-[3rem] text-white flex justify-center'>
        <div className='w-1/2'>
          <CgProfile size={35}/>
        </div >
        <h1 className='w-1/2'>Admin</h1>
      </div>

      <ul className="flex flex-col text-gray-50 cursor-pointer w-full">
        <li className="w-full border-b border-gray-700 p-3 hover:bg-gray-900 flex gap-x-2 justify-between">
          <div className='flex justify-between gap-2'>
            <MdDashboard size={20} />
            <h1 className='text-sm font-thin'>Dashboard</h1>
          </div>
          {/* <BiDownArrow /> */}
        </li>
        <li className="w-full border-b border-gray-700 p-3 hover:bg-gray-900 flex gap-x-2 justify-between">
          <div className='flex justify-between gap-2'>
            <TiTabsOutline size={20} />
            <h1 className='text-sm font-thin'>Tabs</h1>
          </div>

          {/* <BiDownArrow /> */}
        </li >
        <li className="w-full border-b border-gray-700 p-3 hover:bg-gray-900 flex gap-x-2 justify-between">
          <div className='flex justify-between gap-2'>
            <BsFillEmojiSmileFill size={20} />
            <h1 className='text-sm font-thin'>Icons</h1>
          </div>

          {/* <BiDownArrow /> */}
        </li>

        <li className="w-full border-b border-gray-700 p-3 hover:bg-gray-900 flex gap-x-2 justify-between">
          <div className='flex justify-between gap-2'>
            <MdMore size={20} />
            <h1 className='text-sm font-thin'>About</h1>
          </div>

          {/* <BiDownArrow /> */}
        </li>

        <li className="w-full border-b border-gray-700 p-3 hover:bg-gray-900 flex gap-x-2 justify-between">
          <div className='flex justify-between gap-2'>
            <AiOutlineForm size={20} />
            <h1 className='text-sm font-thin'>Forms</h1>
          </div>

          {/* <BiDownArrow /> */}
        </li>

        <Button cont="Toque aqui"/>
          
      </ul>
    </nav>  
      
  );
}