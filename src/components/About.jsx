import {useEffect,useRef,useState} from 'react'
import {useInView} from 'framer-motion'
import Reveal from './Reveal'
function Count({n,s=''}){
  const r=useRef(null),v=useInView(r,{once:true}),[c,setC]=useState(0)
  useEffect(()=>{if(!v)return;if(matchMedia('(prefers-reduced-motion:reduce)').matches){setC(n);return}
    let i=0;const t=setInterval(()=>{i++;setC(i);if(i>=n)clearInterval(t)},260);return()=>clearInterval(t)},[v,n])
  return <b ref={r}>{c}{c===n?s:''}</b>
}
export default function About(){return(<section id="about"><div className="wrap"><div className="ab">
  <Reveal><div className="eyebrow">// about-me</div><h2>About Me</h2>
    <p>I'm a Frontend Developer building my career around creating clean, responsive and practical websites and web applications. I enjoy the process of turning an idea into a working interface — from layout and typography to the small interactions that make a site feel polished.</p>
    <p>I work primarily with HTML, CSS, JavaScript and React, and I use Git and GitHub to manage every project I build. I'm currently working as a Junior Embedded Engineer, which has sharpened my attention to detail and my understanding of how systems fit together — but frontend development is where I'm focused and where I want to grow.</p>
    <p>Alongside web development, I offer freelance digital solutions: Meta and Google advertising campaigns, and creative video editing — so local businesses can get their website, their ads and their content from one person.</p></Reveal>
  <Reveal delay={.15}><div className="grid stats">
    <div className="card stat"><Count n={3} s="+"/><span>Years Experience</span></div>
    <div className="card stat"><Count n={15} s="+"/><span>Projects</span></div>
    <div className="card stat"><Count n={10} s="+"/><span>Core Services</span></div></div>
    <div className="tl"><div><b>Freelance Digital Solutions &amp; Creative Services</b><small>Websites · Meta Ads · Google Ads · Video Editing</small></div>
      <div><b>Junior Embedded Engineer</b><small>Current role</small></div></div></Reveal>
</div></div></section>)}
