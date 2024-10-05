'use client'
import Link from 'next/link'
import {
  AppLayoutV2,
  IconV2,
  Header,
  Footer,
  Button,
  MenuV2,
  ZeroLogo,
  ZERO_LINKS,
  GradientButton,
} from '@zero-company/zero-lib-react'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuLogIn,
  LuLogOut,
  LuUserPlus,
  LuSmartphone,
  LuUser,
  LuSearch,
  LuBookOpen,
  LuInfo,
} from 'react-icons/lu'
import { FaFacebookF, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

const SocialLinks = () => (
  <>
    <div className='flex p-2 gap-2'>
      <Link href={ZERO_LINKS.buymeacoffee} className='flex-1' target='_blank'>
        <GradientButton className='w-full'>Support Zero</GradientButton>
      </Link>
      <Link href={ZERO_LINKS.discord} className='flex-1' target='_blank'>
        <GradientButton gradient='purple2' className='w-full'>
          Join Community
        </GradientButton>
      </Link>
    </div>
    <div className='h-8 divide-x flex *:flex *:flex-1 *:justify-center *:h-full *:p-2'>
      <Link href={ZERO_LINKS.website} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaGlobe />} />
      </Link>
      <Link href={ZERO_LINKS.github} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaGithub />} />
      </Link>
      <Link href={ZERO_LINKS.twitter} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaTwitter />} />
      </Link>
      <Link href={ZERO_LINKS.facebook} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaFacebookF />} />
      </Link>
    </div>
  </>
)

export default function Layout({ children }: Props) {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  return (
    <>
      <AppLayoutV2
        body={children}
        header={<Header />}
        sidebar={
          <>
            <MenuV2
              options={[
                {
                  children: 'Index',
                  icon: <LuHome />,
                  href: `/${pathnameDepth1}`,
                },
                {
                  children: 'Docs',
                  icon: <LuBookOpen />,
                  href: `/${pathnameDepth1}/docs`,
                  disabled: true,
                },
                {
                  children: 'Advanced Search',
                  icon: <LuSearch />,
                  href: `/${pathnameDepth1}/advanced-search`,
                },
              ]}
            />
            <MenuV2
              options={[
                {
                  children: 'Apps',
                  icon: <LuLayoutGrid />,
                  href: '/apps',
                  disabled: true,
                },
                {
                  children: 'User',
                  icon: <LuUser />,
                  subMenu: (
                    <MenuV2
                      options={[
                        {
                          children: 'Sign In',
                          icon: <LuLogIn />,
                          href: `/${pathnameDepth1}/signin`,
                        },
                        {
                          children: 'Sign Out',
                          icon: <LuLogOut />,
                        },
                        {
                          children: 'Account',
                          icon: <LuUserCircle2 />,
                          href: `/${pathnameDepth1}/account`,
                        },
                        {
                          children: 'Sign Up',
                          icon: <LuUserPlus />,
                          href: `/${pathnameDepth1}/signup`,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: 'Settings',
                  icon: <LuSettings />,
                  href: '/settings',
                  disabled: true,
                },
                {
                  children: 'About',
                  icon: <LuInfo />,
                  subMenu: (
                    <MenuV2
                      options={[
                        {
                          children: 'About App',
                          icon: <LuSmartphone />,
                          href: `/${pathnameDepth1}/about-app`,
                        },
                        {
                          children: 'About Zero',
                          icon: <IconV2 reactIcon={<ZeroLogo />} size='sm' />,
                          href: `/${pathnameDepth1}/about-zero`,
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </>
        }
        footer={
          <>
            <SocialLinks />
            <Footer />
          </>
        }
      />
    </>
  )
}
