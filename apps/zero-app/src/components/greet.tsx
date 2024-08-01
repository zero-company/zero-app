import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'

export const Greet = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [greetMsg, setGreetMsg] = useState('')
  async function greet() {
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <>
      <form
        className='row'
        onSubmit={e => {
          e.preventDefault()
          greet()
        }}
      >
        <input
          id='greet-input'
          onChange={e => setName(e.currentTarget.value)}
          placeholder='Enter a name...'
        />
        <button type='submit'>Greet</button>
      </form>

      <p>{greetMsg}</p>
    </>
  )
}
