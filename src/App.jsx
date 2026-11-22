import {useState} from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseMe from './components/WhyChooseMe'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App(){
  const [service,setService]=useState('')
  return(<>
    <Background/><Navbar/>
    <Hero/><About/><Skills/><Services onPick={setService}/><Projects/><WhyChooseMe/><Reviews/>
    <Contact service={service} setService={setService}/><Footer/>
  </>)
}
