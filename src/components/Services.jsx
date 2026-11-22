import {SV} from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
export default function Services({onPick}){return(<section id="services"><div className="wrap">
  <Reveal><div className="eyebrow">// services</div><h2>What I Can Do For Your Business</h2><p className="sub">Four services, one point of contact.</p></Reveal>
  <div className="grid sv">{SV.map((s,i)=><Reveal key={s[1]} className="card" delay={i*.08} lift style={{display:'flex',flexDirection:'column'}}>
    <Icon k={s[0]}/><h3>{s[1]}</h3><p>{s[2]}</p><ul>{s[3].map(x=><li key={x}>{x}</li>)}</ul>
    <a className="btn" href="#contact" onClick={()=>onPick(s[1])}>Contact Me <span className="ar">→</span></a></Reveal>)}</div>
</div></section>)}
