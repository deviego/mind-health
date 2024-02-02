import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="w-full h-screen bg-white flex item-center justify-center overflow-hidden text-secondary">
      <div className="w-full flex items-center justify-center">
        <form action="" className="flex flex-col ">
          <div className="mb-12">
            <h1 className="font-bold pb-1 text-4xl">Bem-vindo de volta!</h1>
            <p className="font-normal text-xs">
              Informe seu email e senha para acessar a sua conta
            </p>
          </div>

          <label htmlFor="email" className="pl-2 text-sm font-bold">
            Digite seu email
          </label>
          <Input name="email" id="email" placeholder="Email" className="mb-4" />
          <label htmlFor="password" className="pl-2 text-sm font-bold">
            Digite sua senha
          </label>
          <Input name="password" id="password" placeholder="Senha" />
          <Link href="" className="text-right text-xs text-secondary-gray my-3">
            Esqueceu a senha?
          </Link>

          <Button className="bg-gradient-to-r from-[#006BF9] to-[#31E6FF] py-4">
            Acessar
          </Button>
          <p className="text-sm text-secondary-gray text-center pt-6 ">
            Você ainda não tem uma conta?{' '}
            <Link href="" className="font-bold underline">
              Criar conta
            </Link>
          </p>
        </form>
      </div>
      <div className="flex justify-end align-bottom w-full">
        <img
          src="/imgs/iphoneLogin.png"
          alt="Mockup"
          className="max-w-[46.8125em] absolute bottom-0 right-0"
        />

        <img
          src="/imgs/effect.png"
          alt="effect"
          className="max-h-[49.53125em]"
        />
      </div>
    </div>
  )
}

export default Login
