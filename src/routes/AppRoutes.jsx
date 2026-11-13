import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home.jsx').then((module) => ({ default: module.Home })))
const About = lazy(() => import('../pages/About/About.jsx').then((module) => ({ default: module.About })))
const Services = lazy(() => import('../pages/Services/Services.jsx').then((module) => ({ default: module.Services })))
const ERPSolutions = lazy(() => import('../pages/ERPSolutions/ERPSolutions.jsx').then((module) => ({ default: module.ERPSolutions })))
const Industries = lazy(() => import('../pages/Industries/Industries.jsx').then((module) => ({ default: module.Industries })))
const Contact = lazy(() => import('../pages/Contact/Contact.jsx').then((module) => ({ default: module.Contact })))
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx').then((module) => ({ default: module.NotFound })))

export function AppRoutes() {
  return <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/erp-solutions" element={<ERPSolutions />} /><Route path="/industries" element={<Industries />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Suspense>
}
