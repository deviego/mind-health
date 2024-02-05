import { LayoutGrid, Bell, ChevronDown, FileText } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Card } from './ui/card'

export const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-12 py-7">
      <div>
        <img src="/imgs/MiND-logo.png" alt="logo" />
      </div>

      <div className="flex gap-12 text-secondary-gray ">
        <LayoutGrid className="w-[22px]" />
        <FileText className="w-[22px]" />
        <Bell className="w-[22px]" />
      </div>

      <div className="">
        <Popover>
          <PopoverTrigger>
            <Card className="bg-white w-full flex gap-1 items-center px-4 rounded-3xl h-12">
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
              <div>
                <ChevronDown />
              </div>
            </Card>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
