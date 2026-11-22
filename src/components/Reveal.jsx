import {motion,useReducedMotion} from 'framer-motion'
// Scroll-reveal wrapper. Use lift for cards so hover lift is handled by Framer Motion.
export default function Reveal({children,delay=0,className='',as='div',lift=false,...rest}){
  const rm=useReducedMotion(),M=motion[as]
  return <M className={className} initial={rm?false:{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
    viewport={{once:true,amount:.12}} transition={{duration:.8,delay}} whileHover={lift&&!rm?{y:-6}:undefined} {...rest}>{children}</M>
}
