import { NavBar } from '@/components/navbar'
import HomePage from './(protect)/home/page'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <div className="container h-full">
      <NavBar />
      <div className="flex w-full h-4/5">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  )
}
