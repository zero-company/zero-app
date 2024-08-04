import './App.css'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <img src='/zero-logo-v1.svg' alt='O' className='max-w-52' />
      </div>
    </ThemeProvider>
  )
}

export default App
