import { IconButton, Tooltip } from '@mui/material'
import { GitHub, Instagram, LinkedIn, Facebook, YouTube } from '@mui/icons-material'
import { site } from '../../data/site.js'
const networks = [{ name: 'LinkedIn', icon: LinkedIn }, { name: 'Instagram', icon: Instagram }, { name: 'Facebook', icon: Facebook }, { name: 'YouTube', icon: YouTube }, { name: 'GitHub', icon: GitHub }]
export function SocialLinks() {
  const active = networks.filter(({ name }) => site.social[name.toLowerCase()])
  if (!active.length) return <p className="social-note">Social profiles will appear here once configured.</p>
  return <div className="social-links">{active.map(({ name, icon: Icon }) => <Tooltip title={name} key={name}><IconButton component="a" href={site.social[name.toLowerCase()]} target="_blank" rel="noreferrer" aria-label={name}><Icon /></IconButton></Tooltip>)}</div>
}
