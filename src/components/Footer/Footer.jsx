import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import { Link } from 'react-router-dom'
import { navigation, site } from '../../data/site.js'
import { SocialLinks } from '../SocialLinks/SocialLinks.jsx'
const currentYear = new Date().getFullYear()
export function Footer() {
  return <footer className="site-footer"><div className="footer-main wrap">
    <div className="footer-about"><Link className="brand brand-footer" to="/"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span><span><strong>{site.name}</strong><small>{site.tagline}</small></span></Link><p>Technology consulting and engineering for clearer operations, better-connected systems, and what comes next.</p><SocialLinks /></div>
    <div><h3>Explore</h3><ul>{navigation.slice(0, 5).map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}</ul></div>
    <div><h3>Start a conversation</h3><p>Tell us what your team is working toward.</p><Link className="footer-contact" to="/contact">Contact our team <ArrowForwardRounded fontSize="small" /></Link><a className="footer-email" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></div>
  </div><div className="footer-bottom wrap"><span>{currentYear} {site.name}. All rights reserved.</span><span>Engineering the Future.</span></div></footer>
}
