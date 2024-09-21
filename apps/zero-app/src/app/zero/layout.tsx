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
                  children: 'Home',
                  icon: <LuHome />,
                  href: '/zero',
                },
                {
                  children: 'App',
                  icon: <LuList />,
                  href: '/zero/about-app',
                },
                {
                  children: 'Zero',
                  icon: <LuList />,
                  href: '/zero/about-zero',
                },
              ]}
            />
            <Menu
              options={[
                {
                  children: 'Apps',
                  icon: <LuLayoutGrid />,
                  href: '/apps',
                  disabled: true,
                },
                {
                  children: 'Search',
                  icon: <LuSearch />,
                  href: '/search',
                  disabled: true,
                },
                {
                  children: 'User',
                  icon: <LuUserCircle2 />,
                  href: '/user',
                  disabled: true,
                },
                {
                  children: 'Settings',
                  icon: <LuSettings />,
                  href: '/settings',
                  disabled: true,
                },
              ]}
            />
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
