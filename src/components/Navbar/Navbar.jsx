import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuRounded from '@mui/icons-material/MenuRounded'
import CloseRounded from '@mui/icons-material/CloseRounded'
import { navigation, site } from '../../data/site.js'
import { CTA } from '../Common/CTA.jsx'
export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header"><div className="nav-shell">
    <Link className="brand" to="/" onClick={close} aria-label="SYSSKYTECH home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span><span><strong>{site.name}</strong><small>{site.tagline}</small></span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <CloseRounded /> : <MenuRounded />}</button>
    <nav className={`primary-nav${open ? ' nav-open' : ''}`} aria-label="Main navigation">{navigation.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={close}>{item.label}</NavLink>)}<CTA to="/contact" className="nav-cta">Get in Touch</CTA></nav>
  </div></header>
}
