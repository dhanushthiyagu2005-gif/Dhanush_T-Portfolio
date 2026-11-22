import {useState} from 'react'
import {WA,GITHUB} from '../data'
import Reveal from './Reveal'
const Ln=({d})=><span className="ic"><svg viewBox="0 0 24 24"><path d={d}/></svg></span>
export default function Contact({service,setService}){
  const [name,setName]=useState(''),[mob,setMob]=useState(''),[err,setErr]=useState({})
  const submit=e=>{e.preventDefault()
    const n=name.trim(),raw=mob.trim(),d=raw.replace(/[\s\-()]/g,'')
    const okN=/^[A-Za-z][A-Za-z .'-]{1,59}$/.test(n),okM=/^(\+?91|0)?[6-9]\d{9}$/.test(d)||/^\+\d{8,14}$/.test(d)
    const er={name:okN?'':'Please enter your full name.',service:service?'':'Please select a service.',mob:okM?'':'Enter a valid mobile number (e.g. 98765 43210).'}
    setErr(er);if(!(okN&&service&&okM))return
    const msg=`Hello Dhanush!\n\nI am interested in your services.\n\nName: ${n}\n\nService Required: ${service}\n\nMobile Number: ${raw}\n\nPlease contact me regarding this service.`
    const u=WA+encodeURIComponent(msg)
    if(!window.open(u,'_blank','noopener'))location.href=u}
  return(<section id="contact"><div className="wrap"><div className="ct">
    <Reveal><div className="eyebrow">// contact</div><h2>Let's Grow Your Business Together</h2><p className="sub" style={{marginBottom:0}}>Have a project in mind? Tell me what you need, and let's make it happen.</p>
      <div className="cl">
        <a className="card" href="mailto:dhanushtthiyagarajan@gmail.com"><Ln d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>dhanushtthiyagarajan@gmail.com</a>
        <a className="card" href="tel:+919843392005"><Ln d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>+91 98433 92005 (Phone / WhatsApp)</a>
        <a className="card" href={GITHUB} target="_blank" rel="noopener noreferrer"><Ln d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21"/>github.com/dhanushthiyagu2005-gif</a>
        <a className="card" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><Ln d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>LinkedIn – Connect with me</a></div></Reveal>
    <Reveal as="form" className="card" noValidate onSubmit={submit} delay={.1} style={{padding:32}}>
      <label htmlFor="nm">Full Name</label><input id="nm" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your full name" autoComplete="name"/><div className="er">{err.name}</div>
      <label htmlFor="sv">Select Service</label><select id="sv" value={service} onChange={e=>setService(e.target.value)}><option value="">Select a service</option>{['Website Development','Meta Ads','Google Ads','Video Editing','Other'].map(o=><option key={o}>{o}</option>)}</select><div className="er">{err.service}</div>
      <label htmlFor="mb">Mobile Number</label><input id="mb" type="tel" inputMode="tel" value={mob} onChange={e=>setMob(e.target.value)} placeholder="Enter your mobile number" autoComplete="tel"/><div className="er">{err.mob}</div>
      <button className="btn p" type="submit">SUBMIT ENQUIRY ON WHATSAPP</button>
      <p className="fn">This opens WhatsApp with your message ready — press Send there to deliver it.</p></Reveal>
  </div></div></section>)
}
