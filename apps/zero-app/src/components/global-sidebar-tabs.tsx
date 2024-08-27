'use client'
import { Icon } from '@zero-company/zero-lib-react'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuLayoutGrid,
} from 'react-icons/lu'
import Link from 'next/link'

export const GlobalSidebarTabs = [
  {
    id: 'apps',
    icon: <Icon reactIcon={<LuLayoutGrid />} />,
    content: (
      <>
        <Link href='/zero' className='block' prefetch>
          <div className='p-2 space-y-1'>
            <h2 className='font-semibold text-xs text-white tracking-wider'>
              /zero
            </h2>
            <p className='text-xs'>About our Open Source Team</p>
          </div>
        </Link>
        <Link href='/docs' className='block' prefetch>
          <div className='p-2 space-y-1'>
            <h2 className='font-semibold text-xs text-white tracking-wider'>
              /docs
            </h2>
            <p className='text-xs'>Open source community documents</p>
          </div>
        </Link>
      </>
    ),
  },
  {
    id: 'search',
    icon: <Icon reactIcon={<LuSearch />} />,
    content: <div>search</div>,
    disabled: true,
  },
  {
    id: 'user',
    icon: <Icon reactIcon={<LuUserCircle2 />} />,
    content: <div>user</div>,
    disabled: true,
  },
  {
    id: 'settings',
    icon: <Icon reactIcon={<LuSettings />} />,
    content: <div>settings</div>,
    disabled: true,
  },
]
