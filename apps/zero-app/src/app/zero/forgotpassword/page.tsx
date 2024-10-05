'use client'
import { ForgotPasswordPage } from '@zero-company/zero-lib-react'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  return (
    <>
      <ForgotPasswordPage
        signupUrl={`/${pathnameDepth1}/signup`}
        signinUrl={`/${pathnameDepth1}/signin`}
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
