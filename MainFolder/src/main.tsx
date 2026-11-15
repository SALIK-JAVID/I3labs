import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SITE_SUSPENDED } from './suspension'
import { SuspendedNotice } from './components/SuspendedNotice'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {SITE_SUSPENDED ? <SuspendedNotice /> : <App />}
  </StrictMode>,
)
