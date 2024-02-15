const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full  h-screen bg-white">
      <div className="pl-12 pt-3 bg-white">
        <img src="/imgs/MiND-logo.png" alt="logo" />
      </div>
      {children}
    </div>
  )
}

export default AuthLayout
