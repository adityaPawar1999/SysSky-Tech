import AlternateEmailRounded from '@mui/icons-material/AlternateEmailRounded'
import CallRounded from '@mui/icons-material/CallRounded'
import ScheduleRounded from '@mui/icons-material/ScheduleRounded'
import { PageMeta } from '../../components/Common/PageMeta.jsx'
import { ContactForm } from '../../components/ContactForm/ContactForm.jsx'
import { SocialLinks } from '../../components/SocialLinks/SocialLinks.jsx'
import { site } from '../../data/site.js'

export function Contact() {
  return <main><PageMeta title="Contact Us" description="Contact SYSSKYTECH to discuss ERP consulting, software development, or a technology initiative." />
    <section className="contact-hero section-pad"><div className="wrap"><span className="eyebrow">CONTACT SYSSKYTECH</span><h1>Tell us what you’re <em>working toward.</em></h1><p>Share a little about your goals or the challenge in front of you. We’ll start with a conversation.</p></div></section>
    <section className="contact-section section-pad"><div className="wrap contact-grid"><div className="contact-info"><span className="eyebrow">GET IN TOUCH</span><h2>Good conversations start with listening.</h2><p>Use the form to share what you have in mind. Our contact details below are configurable and should be updated with verified company information.</p>
      <a className="contact-method" href={`mailto:${site.contactEmail}`}><span><AlternateEmailRounded /></span><div><small>EMAIL</small><b>{site.contactEmail}</b></div></a>
      <a className="contact-method" href={`tel:${site.contactPhone.replace(/[^+\d]/g, '')}`}><span><CallRounded /></span><div><small>PHONE</small><b>{site.contactPhone}</b></div></a>
      <div className="contact-method"><span><ScheduleRounded /></span><div><small>RESPONSE</small><b>We’ll follow up after reviewing your note.</b></div></div>
      <div className="contact-social"><small>FOLLOW ALONG</small><SocialLinks /></div>
    </div><div className="contact-form-panel"><ContactForm /><p className="form-connection-note">This form validates your message in the browser. It does not send or store submissions until an email or API integration is connected.</p></div></div></section>
  </main>
}
