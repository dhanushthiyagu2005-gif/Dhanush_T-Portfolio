import {motion,useReducedMotion} from 'framer-motion'
import photo from '../assets/images/profile.jpg'
const W=[['I'],['Build'],['Digital',1],['Experiences',1],['That'],['Grow'],['Businesses.']]
export default function Hero(){
  const rm=useReducedMotion()
  return(<header id="home"><div className="wrap" id="hero">
    <motion.div className="hi" initial={rm?false:{opacity:0,y:10}} animate={{opacity:1,y:0}}>{"HELLO, I'M DHANUSH T"}</motion.div>
    <h1>{W.map(([w,o],i)=><motion.span key={i} className={o?'or':''} style={{display:'inline-block',marginRight:'.25em'}}
      initial={rm?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.15+i*.1,duration:.7}}>{w}</motion.span>)}</h1>
    <motion.div className="ph" initial={rm?false:{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{delay:.6,duration:1}}>
      <img src={photo} alt="Dhanush T – professional portrait" width="720" height="1008" fetchPriority="high"/>
    </motion.div>
    <p className="tag">Helping businesses grow with modern websites, strategic digital marketing and creative video content.</p>
    <div className="cta"><a className="btn p" href="#contact">Let's Work Together <span className="ar">→</span></a><a className="btn" href="#projects">Explore My Work</a></div>
    <div className="av"><i/>Available for Freelance Projects</div>
    <div className="scr" aria-hidden="true"/>
  </div></header>)
}
