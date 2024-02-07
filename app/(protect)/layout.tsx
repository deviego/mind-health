import { NavBar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container h-full">
      <NavBar />
      <div className="flex w-full h-4/5">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
