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
  ZeroLogo,
} from '@zero-company/zero-lib-react'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuBookOpen,
  LuInfo,
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
                  children: 'Index',
                  icon: <LuHome />,
                  href: '/zero',
                },
                {
                  children: 'Docs',
                  icon: <LuBookOpen />,
                  href: '/docs',
                },
                {
                  children: 'Advanced Search',
                  icon: <LuSearch />,
                  href: '/advanced-search',
                },
                {
                  children: 'App',
                  icon: <LuList />,
                  href: '/zero/about-app',
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
                {
                  children: 'About',
                  icon: <LuInfo />,
                  href: '/zero/about',
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
