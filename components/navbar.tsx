'use client'
import { LayoutGrid, Bell, FileText } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Link from 'next/link'
import { CreatePatient } from '@/app/(protect)/_components/ModalCreatePatient'
import { useState } from 'react'
import { CreateDoctor } from '@/app/(protect)/_components/ModalCreateDoctor'
enum Dialogs {
  dialog1 = 'dialog1',
  dialog2 = 'dialog2',
}
export const NavBar = () => {
  const NavLink = [
    { href: '/profile', label: 'Perfil' },
    { href: '/profile', label: 'Perfil' },
  ]

  const [dialog, setDialog] = useState<string>()

  return (
    <div className="w-full flex justify-between items-center px-4 pt-2 pb-6 ">
      <div>
        <img src="/imgs/MiND-logo.png" alt="logo" />
      </div>

      <div className="flex gap-12 text-secondary-gray ">
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <LayoutGrid className="w-[22px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DialogTrigger
                asChild
                onClick={() => {
                  setDialog(Dialogs.dialog1)
                }}
              >
                <DropdownMenuItem>Criar paciente</DropdownMenuItem>
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => {
                  setDialog(Dialogs.dialog2)
                }}
              >
                <DropdownMenuItem>Criar médico</DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem>
                <Link href="/healthInsurance">Convênio</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="w-[600px]">
            {dialog === Dialogs.dialog1 ? <CreatePatient /> : <CreateDoctor />}
          </DialogContent>
        </Dialog>
        <Link href="/scheduling">
          <FileText />
        </Link>
        <Bell />
      </div>

      <div className="mt-1">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="w-full">
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center px-4 rounded-3xl h-12">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src="https://github.com/deviego.png"
                    className="h-full w-full"
                  />
                  <AvatarFallback>Dev</AvatarFallback>
                </Avatar>
                <div className="pr-12 leading-none pt-1">
                  <p className="text-sm font-normal ">Deviego</p>
                  <p className="text-[10px] text-start text-secondary-gray">
                    Paciente
                  </p>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                {NavLink.map((link, index) => {
                  return (
                    <NavigationMenuLink key={index} className="w-full">
                      <Link href={link.href}>
                        <p>{link.label}</p>
                      </Link>
                    </NavigationMenuLink>
                  )
                })}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
