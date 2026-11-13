import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded'
import { Link } from 'react-router-dom'
export function ServiceCard({ service, index }) {
  const Icon = service.icon
  return <article className="service-card"><div className="service-icon"><Icon /></div><span className="card-index">{String(index + 1).padStart(2, '0')}</span><h3>{service.title}</h3><p>{service.text}</p><Link className="text-link" to="/services">Explore service <ArrowOutwardRounded fontSize="small" /></Link></article>
}
