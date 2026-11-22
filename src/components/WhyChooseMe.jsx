import {WY} from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
export default function WhyChooseMe(){return(<section id="why"><div className="wrap">
  <Reveal><div className="eyebrow">// why-work-with-me</div><h2>Why Choose Me?</h2><p className="sub">&nbsp;</p></Reveal>
  <div className="grid wy">{WY.map((w,i)=><Reveal key={w[1]} className="card" delay={i*.08} lift><div style={{padding:28}}><Icon k={w[0]}/><h3 style={{fontSize:18,margin:'16px 0 8px'}}>{w[1]}</h3><p style={{color:'var(--t2)',fontSize:14,margin:0}}>{w[2]}</p></div></Reveal>)}</div>
</div></section>)}
