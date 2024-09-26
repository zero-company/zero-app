'use client'
import Link from 'next/link'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@zero-company/zero-lib-react'

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export default function NotFound() {
  return (
    <div className='flex-1 flex justify-center items-center'>
      {/*
       <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
      */}

      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>[404] Not Found</CardTitle>
          <CardDescription>This page could not be found.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 hidden'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>First name</Label>
                <Input id='first-name' placeholder='Max' required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='last-name'>Last name</Label>
                <Input id='last-name' placeholder='Robinson' required />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
            <Button type='submit' className='w-full'>
              Create an account
            </Button>
            <Button variant='outline' className='w-full'>
              Sign up with GitHub
            </Button>
          </div>
          <div className='text-center text-sm'>
            <Link href='/' className='underline'>
              Return Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
