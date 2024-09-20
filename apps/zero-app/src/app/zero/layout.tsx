'use client'
import Link from 'next/link'
import {
  AppLayoutV2,
  IconV2,
  Header,
  Footer,
  SupportCard,
  Button,
  Menu,
} from '@zero-company/zero-lib-react'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
} from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV2
        body={children}
        header={<Header />}
        sidebar={
          <>
            <Menu
              options={[
                {
                  name: 'Home',
                  icon: <LuHome />,
                  href: '/zero',
                },
                {
                  name: 'About Zero',
                  icon: <LuList />,
                  href: '/zero/about-zero',
                },
                {
                  name: 'About App',
                  icon: <LuList />,
                  href: '/zero/about-app',
                },
              ]}
            />
            <Menu
              options={[
                {
                  name: 'Apps',
                  icon: <LuLayoutGrid />,
                  href: '/apps',
                  disabled: true,
                },
                {
                  name: 'Search',
                  icon: <LuSearch />,
                  href: '/search',
                  disabled: true,
                },
                {
                  name: 'User',
                  icon: <LuUserCircle2 />,
                  href: '/user',
                  disabled: true,
                },
                {
                  name: 'Settings',
                  icon: <LuSettings />,
                  href: '/settings',
                  disabled: true,
                },
              ]}
            />
            <Link href='/zero'>home</Link>
            <Link href='/zero/about-app'>about-app</Link>
            <Link href='/zero/about-zero'>about-zero</Link>
          </>
        }
        footer={
          <>
            <SupportCard />
            <Footer />
          </>
        }
      />
    </>
  )
}
