import {useEffect,useState} from 'react'
import {GITHUB} from '../data'
export default function Footer(){
  const [show,setShow]=useState(false)
  useEffect(()=>{const f=()=>setShow(scrollY>600);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
  const ext={target:'_blank',rel:'noopener noreferrer'}
  return(<><footer><div className="wrap"><div className="fg">
    <div><a href="#home" className="logo" style={{color:'#fff',fontSize:22}}>Dhanush<b>.T</b></a><p>Frontend Developer | Digital Marketer | Video Editor.</p></div>
    <div><h4>Quick Links</h4>{['home','about','skills','projects','contact'].map(i=><a key={i} href={'#'+i}>{i[0].toUpperCase()+i.slice(1)}</a>)}</div>
    <div><h4>Services</h4>{['Website Development','Meta Ads','Google Ads','Video Editing'].map(s=><a key={s} href="#services">{s}</a>)}</div>
    <div><h4>Connect</h4><a href={GITHUB} {...ext}>GitHub</a><a href="https://linkedin.com/" {...ext}>LinkedIn</a><a href="mailto:dhanushtthiyagarajan@gmail.com">Email</a><a href="https://wa.me/919843392005" {...ext}>WhatsApp</a></div>
  </div><div className="cp">© 2026 Dhanush T. All Rights Reserved.</div></div></footer>
  <button id="top" className={show?'s':''} aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>↑</button></>)
}
