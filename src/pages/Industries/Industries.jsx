import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import { Link } from 'react-router-dom'
import { PageMeta } from '../../components/Common/PageMeta.jsx'
import { SectionHeading } from '../../components/Common/SectionHeading.jsx'
import { industries } from '../../data/services.js'
import { CTA } from '../../components/Common/CTA.jsx'

export function Industries() {
  return <main><PageMeta title="Industries" description="SYSSKYTECH supports manufacturing, retail and e-commerce, distribution, professional services, and small and medium businesses." />
    <section className="page-hero industry-page-hero wrap"><div><span className="eyebrow">INDUSTRIES WE SERVE</span><h1>Built around the work <em>your business does.</em></h1><p>Every industry has its own pace, processes, and pressure points. We listen first, then shape technology to fit the realities of your operation.</p><CTA to="/contact">Talk about your business</CTA></div><div className="page-hero-image"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85" alt="Modern commercial architecture against a clear sky" loading="lazy" /><span>TECHNOLOGY THAT FITS THE CONTEXT</span></div></section>
    <section className="section-pad section-tint"><div className="wrap"><SectionHeading eyebrow="INDUSTRY CONTEXT" title="Different businesses. Shared need for clarity." text="We help teams connect information, reduce unnecessary friction, and keep systems aligned with how the work gets done." centered /><div className="industry-grid">{industries.map((industry,index)=><article className="industry-card" key={industry.title}><div className="industry-photo"><img src={`https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=900&q=82`} alt={industry.alt} loading="lazy" /><span>0{index+1}</span></div><div className="industry-copy"><h3>{industry.title}</h3><p>{industry.text}</p><Link className="text-link" to="/contact">Discuss your needs <ArrowForwardRounded fontSize="small" /></Link></div></article>)}</div></div></section>
    <section className="section-pad"><div className="wrap industry-insight"><div><span className="eyebrow">A FLEXIBLE FOUNDATION</span><h2>Start with your priorities, then build the right path.</h2></div><p>Whether you’re formalizing core operations or modernizing established systems, we help find a useful next step—without forcing a one-size-fits-all solution.</p><CTA to="/services" variant="text">See how we can help</CTA></div></section>
    <section className="closing-cta"><div className="wrap closing-inner"><div><span className="eyebrow">YOUR BUSINESS, YOUR CONTEXT</span><h2>Let’s talk about where technology can help.</h2></div><CTA to="/contact">Connect with us</CTA></div></section>
  </main>
}
