import {PJ,GITHUB} from '../data'
import Art from './Art'
import Reveal from './Reveal'
export default function Projects(){return(<section id="projects"><div className="wrap">
  <Reveal><div className="eyebrow">// projects</div><h2>Some Things I've Built</h2><p className="sub">A selection of websites and web apps I've designed and built.</p></Reveal>
  <div className="grid pj">{PJ.map((p,i)=><Reveal key={p[1]} as="article" className={'card pc'+(p[6]?' ft':'')} delay={(i%3)*.08} lift>
    <div className="art">{p[6]?<span className="badge">FEATURED PROJECT</span>:null}<Art k={p[0]} h={p[5]} i={i}/></div>
    <div className="pb"><h3>{p[1]}</h3><p>{p[2]}</p><div className="stk">{p[3].map(t=><span key={t}>{t}</span>)}</div>
      <div className="pbtn"><a className="btn p" href={p[4]} target="_blank" rel="noopener noreferrer">View Live Project <span className="ar">→</span></a>
        {p[7]?<a className="btn" href={p[7]} target="_blank" rel="noopener noreferrer">View Source Code</a>:null}</div></div></Reveal>)}</div>
  <p className="note">Project covers are illustrated artwork. Browse more on <a href={GITHUB} target="_blank" rel="noopener noreferrer" style={{color:'var(--a)'}}>GitHub</a>.</p>
</div></section>)}
