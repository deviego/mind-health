'use client'
import { Calendar, Home, Landmark, Settings, Syringe } from 'lucide-react'
import { Card } from './ui/card'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
  const pathName = usePathname()

  const NavLink = [
    { href: '/home', icon: <Home className="w-[22px]" /> },
    {
      href: '/scheduling',
      icon: <Calendar className="w-[22px]" />,
    },
    {
      href: '/productandserviceregistration',
      icon: <Syringe className="w-[22px]" />,
    },
    {
      href: '/financial',
      icon: <Landmark className="w-[22px]" />,
    },
    {
      href: '/settings',
      icon: <Settings className="w-[22px]" />,
    },
  ]

  return (
    <div className="w-28 flex flex-col items-center justify-center h-full gap-3">
      {NavLink.map((link, index) => {
        const isActive =
          pathName === link.href || (pathName === '/' && link.href === '/home')

        return (
          <Link href={link.href} key={index}>
            <Card
              className={
                isActive
                  ? 'p-3 rounded-full bg-primary text-white'
                  : 'p-3 rounded-full text-secondary-gray'
              }
            >
              {link.icon}
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
