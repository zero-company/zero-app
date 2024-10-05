'use client'
import { SignupPage } from '@zero-company/zero-lib-react'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  return (
    <>
      <SignupPage
        signinUrl={`/${pathnameDepth1}/signin`}
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
