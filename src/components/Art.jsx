import {P} from '../data'
// Unique illustrated cover per project. Replace with real screenshots in src/assets/projects/ if desired.
export default function Art({k,h,i}){
  const s=14+i*2
  return(<svg className="bg" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>
    <linearGradient id={'g'+i} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={`hsl(${h} 35% 16%)`}/><stop offset="1" stopColor="#0c0c0c"/></linearGradient>
    <pattern id={'p'+i} width={s} height={s} patternUnits="userSpaceOnUse" patternTransform={`rotate(${i*17})`}><path d={`M0 0H${s}`} stroke="#ffffff0d"/></pattern></defs>
    <rect width="320" height="180" fill={`url(#g${i})`}/><rect width="320" height="180" fill={`url(#p${i})`}/>
    <circle cx={60+i*22} cy={40+(i%3)*40} r={50+i*4} fill={`hsl(${h} 90% 55%)`} opacity=".12"/>
    <g transform="translate(160 90) scale(4.2) translate(-12 -12)" fill="none" stroke="#FF9B32" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d={P[k]}/></g></svg>)
}
