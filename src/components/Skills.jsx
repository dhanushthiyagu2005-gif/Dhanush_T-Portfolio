import {SK} from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
export default function Skills(){return(<section id="skills"><div className="wrap">
  <Reveal><div className="eyebrow">// tech-stack</div><h2>Skills</h2><p className="sub">The tools and disciplines I work with across development, marketing and creative production.</p></Reveal>
  <div className="grid sk">{SK.map((s,i)=><Reveal key={s[1]} className="card" delay={i*.1} lift><div style={{padding:28}}><Icon k={s[0]}/><h3 style={{fontSize:16,margin:'14px 0 16px',letterSpacing:'.06em'}}>{s[1]}</h3>
    <div className="chips">{s[2].map(c=><span className="chip" key={c}>{c}</span>)}</div></div></Reveal>)}</div>
</div></section>)}
