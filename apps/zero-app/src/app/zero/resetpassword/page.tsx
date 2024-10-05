'use client'
import { Suspense } from 'react'
import { ResetPasswordPage, SplashPage } from '@zero-company/zero-lib-react'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function Page() {
  return (
    <>
      <Suspense fallback={<SplashPage />}>
        <InnerPage />
      </Suspense>
    </>
  )
}

const InnerPage = () => {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]
  const searchParams = useSearchParams()
  const resetPasswordToken = searchParams.get('resetPasswordToken')

  return (
    <ResetPasswordPage
      resetPasswordToken={resetPasswordToken || undefined}
      signupUrl={`/${pathnameDepth1}/signup`}
      signinUrl={`/${pathnameDepth1}/signin`}
      onSubmit={values => console.log(values)}
    />
  )
}
