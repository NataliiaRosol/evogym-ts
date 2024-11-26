
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './scenes/navbar/Navbar.tsx'
import Home from './scenes/home/Home.tsx'
import {SelectedPage} from './shared/types'
import Benefits from './scenes/benefits/Benefits.tsx'
import OurClasses from './scenes/ourClasses/OurClasses.tsx'
import ContactUs from './scenes/contactUs/contactUs.tsx'
import Footer from './scenes/footer/Footer.tsx'


function App() {
  
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App
