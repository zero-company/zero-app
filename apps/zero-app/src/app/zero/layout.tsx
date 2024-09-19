'use client'
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
                  name: 'Browse',
                  icon: <LuHome />,
                  href: '/browse',
                  disabled: true,
                },
                {
                  name: 'Outline',
                  icon: <LuList />,
                  href: '/outline',
                  disabled: true,
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
