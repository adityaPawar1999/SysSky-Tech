import { useState } from 'react'
import { Alert, Button, MenuItem, TextField } from '@mui/material'
const options = ['ERP consulting and implementation', 'Oracle NetSuite services', 'Custom software development', 'Web or mobile development', 'AI and business automation', 'Cloud solutions', 'IT consulting', 'Something else']
export function ContactForm() {
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setSubmitting(true); setStatus('')
    window.setTimeout(() => { setSubmitting(false); setStatus('Your message is validated and ready. Connect an email or API service to enable delivery.'); form.reset() }, 450)
  }
  return <form className="contact-form" onSubmit={handleSubmit}><div className="form-grid">
    <TextField name="fullName" label="Full name" autoComplete="name" required inputProps={{ minLength: 2 }} />
    <TextField name="businessEmail" label="Business email" type="email" autoComplete="email" required />
    <TextField name="phone" label="Phone number" type="tel" autoComplete="tel" />
    <TextField name="company" label="Company name" autoComplete="organization" />
    <TextField className="field-wide" name="service" label="Service interested in" select defaultValue="">{options.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}</TextField>
    <TextField className="field-wide" name="message" label="How can we help?" multiline minRows={4} required inputProps={{ minLength: 10 }} />
  </div><div className="form-submit"><Button type="submit" variant="contained" size="large" disabled={submitting}>{submitting ? 'Preparing…' : 'Send your inquiry'}</Button><span>We’ll only use your details to respond to your inquiry.</span></div>
    {status && <Alert severity="info" role="status" className="form-alert">{status}</Alert>}
  </form>
}
