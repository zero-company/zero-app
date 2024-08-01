import './App.css'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='container flex'>
        <img src='/zero-logo-v1.svg' alt='O' />
      </div>
    </ThemeProvider>
  )
}

export default App
