import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { invoke } from '@tauri-apps/api/core'
import './App.css'
import { Calendar } from '@/components/ui/calendar'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Greet } from '@/components/greet'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [greetMsg, setGreetMsg] = useState('')
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='container flex'>
        {/*
         <ModeToggle />
        */}

        <img src='/zero-logo-v1.svg' alt='O' />

        <div className='row'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo vite' alt='Vite logo' />
          </a>
          <a href='https://tauri.app' target='_blank'>
            <img src='/tauri.svg' className='logo tauri' alt='Tauri logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>

        <Greet />
      </div>
    </ThemeProvider>
  )
}

export default App