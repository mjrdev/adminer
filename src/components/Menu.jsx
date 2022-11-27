import { MdDashboard, MdMore } from 'react-icons/md';
import { TiTabsOutline } from 'react-icons/ti';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si';

export default function Menu() {
  return (
    <nav className="flex justify-center items-center h-[3.5rem] bg-gray-800 w-full">
      <ul className="flex text-white w-[80%] cursor-pointer">
        <li className="w-[10%] border p-4 hover:bg-gray-900 flex gap-x-2 justify-center">
          <MdDashboard size={25}/> Dashboard
        </li>
        <li className="w-[10%] border p-4  hover:bg-gray-900 flex gap-x-2 justify-center">
          <TiTabsOutline size={25}/>Tabs</li>
        <li className="w-[10%] border p-4  hover:bg-gray-900 flex gap-x-2 justify-center">
          <BsFillEmojiSmileFill size={25}/> Icons</li>
        <li className="w-[10%] border p-4  hover:bg-gray-900 flex gap-x-2 justify-center">
          <MdMore size={25}/>About</li>
          
      </ul>
    </nav>  
      
  );
}