import {useState} from 'react'
import {APPROVED,WA} from '../data'
import Reveal from './Reveal'
const Stars=({n})=><>{[1,2,3,4,5].map(i=><span key={i} className={i<=Math.round(n)?'on':''}>★</span>)}</>
export default function Reviews(){
  const [f,setF]=useState({name:'',service:'',text:''}),[rating,setRating]=useState(0),[err,setErr]=useState({}),[sent,setSent]=useState(false)
  const avg=APPROVED.length?APPROVED.reduce((a,r)=>a+r.rating,0)/APPROVED.length:0
  const set=k=>e=>setF({...f,[k]:e.target.value})
  const submit=e=>{e.preventDefault()
    const er={}
    if(f.name.trim().length<2)er.name='Please enter your name.'
    if(!f.service)er.service='Please select the service you received.'
    if(rating<1||rating>5)er.rating='Please choose a rating from 1 to 5.'
    if(f.text.trim().length<10)er.text='Please write at least 10 characters.'
    setErr(er);if(Object.keys(er).length)return
    const m=`New review for approval\n\nName: ${f.name.trim()}\nService Received: ${f.service}\nRating: ${rating}/5\nReview: ${f.text.trim()}`
    const u=WA+encodeURIComponent(m)
    setSent(true);setF({name:'',service:'',text:''});setRating(0)
    if(!window.open(u,'_blank','noopener'))location.href=u}
  return(<section id="reviews"><div className="wrap">
    <Reveal><div className="eyebrow">// reviews</div><h2>What Clients Say</h2><p className="sub">Real experiences from people I've worked with.</p>
      <div className="sum">{APPROVED.length?<><b>{avg.toFixed(1)}</b><span className="stars" aria-label={`Average ${avg.toFixed(1)} out of 5`}><Stars n={avg}/></span><span className="muted">{APPROVED.length} approved review{APPROVED.length>1?'s':''}</span></>:<span className="muted">No approved ratings yet</span>}</div></Reveal>
    <div className="rg"><div className="rl">
      {APPROVED.length?APPROVED.map((r,i)=><Reveal key={i} as="article" className="card glass rc" lift><div className="stars" aria-label={`${r.rating} out of 5 stars`}><Stars n={r.rating}/></div><p>“{r.text}”</p><div className="who"><b>{r.name}</b><small>{r.service}</small></div></Reveal>)
        :<Reveal className="card glass rc"><p style={{margin:0}}>No reviews have been published yet. Submitted reviews appear here after I approve them.</p></Reveal>}</div>
    <Reveal as="form" className="card glass" noValidate onSubmit={submit} style={{padding:32}}>
      <h3 style={{fontSize:20,marginBottom:6}}>Share Your Experience</h3>
      <p className="fn" style={{textAlign:'left',margin:'0 0 18px'}}>Reviews are never published automatically. Every submission stays pending until I approve it.</p>
      <label htmlFor="rn">Client Name</label><input id="rn" value={f.name} onChange={set('name')} placeholder="Enter your name" maxLength={60} autoComplete="name"/><div className="er">{err.name}</div>
      <label htmlFor="rs">Service Received</label><select id="rs" value={f.service} onChange={set('service')}><option value="">Select a service</option>{['Website Development','Meta Ads','Google Ads','Video Editing','Other'].map(o=><option key={o}>{o}</option>)}</select><div className="er">{err.service}</div>
      <label>Star Rating (1–5)</label><div className="stin" role="group" aria-label="Star rating">{[1,2,3,4,5].map(v=><button type="button" key={v} className={v<=rating?'on':''} aria-label={`${v} star${v>1?'s':''}`} aria-pressed={v===rating} onClick={()=>setRating(v)}>★</button>)}</div><div className="er">{err.rating}</div>
      <label htmlFor="rx">Written Review</label><textarea id="rx" rows={4} maxLength={600} value={f.text} onChange={set('text')} placeholder="Tell me about your experience"/><div className="er">{err.text}</div>
      <button className="btn p" type="submit">Submit Review</button>
      {sent&&<div className="rok show" role="status">Thank you! Your review is pending my approval. It has not been published or saved on this site — please press Send in WhatsApp to deliver it to me.</div>}
      <p className="fn" style={{textAlign:'left'}}>Storage note: this site has no database, so reviews cannot be saved here. Submitting opens WhatsApp with your review pre-filled for me to approve — press Send there to deliver it. Approved reviews are added to the site by me manually, and reviews are not independently verified.</p>
    </Reveal></div></div></section>)
}
