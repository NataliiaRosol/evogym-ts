import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import './../../index.css';

import Logo from '@/assets/Logo.png';
import Link from './Link';
import {SelectedPage} from './../../shared/types'
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';




type Props = {
  isTopOfPage: boolean;
  selectedPage:SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  // 

  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuIsToggled, setIsMenuIsToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-red-200 drop-shadow';



  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="Logo" />
          </div>

{/* r side */}

          {isAboveMediumScreens ? ( <div className={`${flexBetween} w-full gap-8`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>

            <div className={`${flexBetween} gap-8`}>
              <Link page='Sign in'/>
              <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
            </div>
          </div>)
          : (
            <div>
              <button className='rounded-full bg-yellow-500 p-2' onClick={()=> setIsMenuIsToggled(!isMenuIsToggled)}>
                <Bars3Icon className='h-6 w-6 text-white'/>
              </button>
            </div>
          )  
        }
        </div>
      </div>
      
      {/* mobile menu modal */}
      {!isAboveMediumScreens && isMenuIsToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-red-100 drop-shadow-lg">
          {/* close icon */}
          <div className='flex justify-end p-12'>
            <button onClick={()=> setIsMenuIsToggled(!isMenuIsToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400'/>
            </button>
          </div>

          {/* Menu items */}
          <div className='ml-[33%] flex flex-col gap-10 text-lg'>
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
