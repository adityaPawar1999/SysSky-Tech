import { Link } from 'react-router-dom'
import { PageMeta } from '../../components/Common/PageMeta.jsx'
export function NotFound() {
  return <main className="not-found"><PageMeta title="Page not found" description="This SYSSKYTECH page could not be found." /><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>That page isn’t here.</h1><p>The link may have moved. Find your way back to the home page or explore our services.</p><div><Link className="cta cta-primary" to="/">Back to home</Link><Link className="text-link" to="/services">Explore services</Link></div></main>
}
