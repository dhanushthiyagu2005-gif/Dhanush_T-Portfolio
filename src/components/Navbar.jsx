import {useEffect,useState} from 'react'
const L=['home','about','skills','services','projects','contact']
export default function Navbar(){
  const [sc,setSc]=useState(false),[open,setOpen]=useState(false),[on,setOn]=useState('home')
  useEffect(()=>{
    const f=()=>setSc(scrollY>30);f();addEventListener('scroll',f,{passive:true})
    const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&setOn(x.target.id)),{rootMargin:'-45% 0px -50% 0px'})
    L.forEach(i=>{const el=document.getElementById(i);el&&o.observe(el)})
    return()=>{removeEventListener('scroll',f);o.disconnect()}
  },[])
  return(<nav className={sc?'sc':''}><div className="wrap nb">
    <a href="#home" className="logo">Dhanush<b>.T</b></a>
    <button className={'burger'+(open?' o':'')} aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
    <div className={'links'+(open?' o':'')}>
      {L.map(i=><a key={i} className={'l'+(on===i?' on':'')} href={'#'+i} onClick={()=>setOpen(false)}>{i[0].toUpperCase()+i.slice(1)}</a>)}
      <a className="btn p" href="#contact" onClick={()=>setOpen(false)}>Let's Talk</a>
    </div></div></nav>)
}
