import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import { PageMeta } from '../../components/Common/PageMeta.jsx'
import { CTA } from '../../components/Common/CTA.jsx'
import { services } from '../../data/services.js'

export function Services() {
  return <main><PageMeta title="Services" description="Explore SYSSKYTECH services: ERP consulting, NetSuite, software development, web and mobile apps, automation, cloud, and IT consulting." />
    <section className="page-hero service-page-hero wrap"><div><span className="eyebrow">OUR SERVICES</span><h1>Technology services for <em>real business needs.</em></h1><p>From a focused advisory engagement to a complex systems initiative, we bring the right mix of strategy, engineering, and support.</p><CTA to="/contact">Discuss your goals</CTA></div><div className="page-hero-image"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85" alt="Technology and business professionals collaborating on a project" loading="lazy" /><span>ADVISORY · ENGINEERING · ENABLEMENT</span></div></section>
    <section className="section-pad section-tint"><div className="wrap"><div className="service-detail-list">{services.map((service, index) => { const Icon = service.icon; return <article className="service-detail" key={service.title}><div className="detail-number">{String(index + 1).padStart(2, '0')}</div><div className="detail-icon"><Icon /></div><div className="detail-copy"><span className="eyebrow">{index < 4 ? 'ERP & BUSINESS SYSTEMS' : index < 8 ? 'DIGITAL PRODUCTS' : 'TECHNOLOGY ADVISORY'}</span><h2>{service.title}</h2><p className="detail-summary">{service.text}</p><p>{service.detail}</p><ul className="benefit-tags">{service.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul><CTA to="/contact" variant="text">Talk with us about this <ArrowForwardRounded fontSize="small" /></CTA></div></article> })}</div></div></section>
    <section className="closing-cta"><div className="wrap closing-inner"><div><span className="eyebrow">NOT SURE WHERE TO START?</span><h2>Let’s make sense of the opportunity together.</h2></div><CTA to="/contact">Share your challenge</CTA></div></section>
  </main>
}
