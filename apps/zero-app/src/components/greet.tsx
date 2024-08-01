'use client'

import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().min(2).max(50),
})

export const Greet = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const [greetMsg, setGreetMsg] = useState('')
  async function greet() {
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <>
      <form
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
