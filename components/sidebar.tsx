import { Home, Landmark, Settings, Syringe } from 'lucide-react'
import { Card } from './ui/card'

export const Sidebar = () => {
  return (
    <div className="w-28 flex flex-col items-center justify-center h-full gap-3">
      <Card className="p-3 rounded-full bg-primary">
        <Home className="w-[22px] text-white" />
      </Card>
      <Card className="p-3 rounded-full ">
        <Landmark className="w-[22px] text-secondary-gray" />
      </Card>
      <Card className="p-3 rounded-full ">
        <Syringe className="w-[22px] text-secondary-gray" />
      </Card>
      <Card className="p-3 rounded-full ">
        <Landmark className="w-[22px] text-secondary-gray" />
      </Card>
      <Card className="p-3 rounded-full ">
        <Settings className="w-[22px] text-secondary-gray" />
      </Card>
    </div>
  )
}
