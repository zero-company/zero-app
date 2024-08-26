'use client'
import { AppLayout, Icon } from '@zero-company/zero-lib-react'
import { LuList, LuHome } from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayout
        body={children}
        header={
          <div className='flex-1 p-2'>
            <p>docs</p>
          </div>
        }
        sidebarTabs={{
          defaultTab: 'home',
          top: [
            {
              id: 'home',
              icon: <Icon reactIcon={<LuHome />} />,
              content: <div>home</div>,
            },
            {
              id: 'outline',
              icon: <Icon reactIcon={<LuList />} />,
              content: <div>outline</div>,
            },
          ],
          bottom: [...GlobalSidebarTabs],
        }}
      />
    </>
  )
}
