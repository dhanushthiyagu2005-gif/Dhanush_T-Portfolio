import {useEffect,useRef} from 'react'
export default function Background(){
  const ref=useRef(null)
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion:reduce)').matches)return
    const c=ref.current,x=c.getContext('2d');let W,H,ps=[],id
    const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight;ps=Array.from({length:Math.min(36,W/30|0)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.4,v:Math.random()*.25+.08,a:Math.random()*.5+.2}))}
    rs();addEventListener('resize',rs)
    const f=()=>{x.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.v;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle=`rgba(255,155,50,${p.a})`;x.fill()});id=requestAnimationFrame(f)}
    f();return()=>{cancelAnimationFrame(id);removeEventListener('resize',rs)}
  },[])
  return(<><div className="bgfx"/><canvas id="fx" ref={ref} aria-hidden="true"/></>)
}
