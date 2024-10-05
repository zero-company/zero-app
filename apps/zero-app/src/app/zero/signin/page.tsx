'use client'
import { SigninPage } from '@zero-company/zero-lib-react'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  return (
    <>
      <SigninPage
        signupUrl={`/${pathnameDepth1}/signup`}
        forgotPasswordUrl={`/${pathnameDepth1}/forgotpassword`}
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
