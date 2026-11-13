import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'

export default function App() {
  return <BrowserRouter><Navbar /><AppRoutes /><Footer /></BrowserRouter>
}
