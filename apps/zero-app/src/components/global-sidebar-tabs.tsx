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
      <div>
        apps
        <Link href='/'>Root</Link>
        <Link href='/zero'>Zero</Link>
        <Link href='/docs'>Docs</Link>
      </div>
    ),
  },
  {
    id: 'search',
    icon: <Icon reactIcon={<LuSearch />} />,
    content: <div>search</div>,
  },
  {
    id: 'user',
    icon: <Icon reactIcon={<LuUserCircle2 />} />,
    content: <div>user</div>,
  },
  {
    id: 'settings',
    icon: <Icon reactIcon={<LuSettings />} />,
    content: <div>settings</div>,
  },
]