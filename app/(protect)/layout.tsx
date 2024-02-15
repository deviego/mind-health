import { NavBar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

const ProtectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full">
      <NavBar />
      <div className="flex w-full h-4/5">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default ProtectLayout
