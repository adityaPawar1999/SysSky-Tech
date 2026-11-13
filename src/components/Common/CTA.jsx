import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import { Link } from 'react-router-dom'
export function CTA({ to, children, variant = 'primary', className = '' }) {
  return <Link className={`cta cta-${variant} ${className}`} to={to}>{children}<ArrowForwardRounded fontSize="small" /></Link>
}
