import { useState } from 'react'
import { invoke } from '@tauri-apps/api/core'
import './App.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { ZeroLogo } from '@/components/zero-logo'
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
        <img src='/zero-logo-v1.svg' alt='O' />
        <Greet />
      </div>
    </ThemeProvider>
  )
}

export default App
