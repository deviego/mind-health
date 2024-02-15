import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '../../../components/ui/separator'

const Register = () => {
  return (
    <div className="w-full h-screen bg-white flex item-center justify-center overflow-hidden text-secondary">
      <div className="w-full flex items-center justify-center ">
        <form action="" className="flex flex-col  max-w-3xl pl-4  w-full">
          <div className="mb-9">
            <h1 className="font-bold pb-1 text-4xl">Criar</h1>
            <p className="font-normal text-xs">
              Informe seus dados e da sua empresa para criar sua conta
            </p>
          </div>
          <div className="flex w-full ">
            <div className="w-full">
              <label htmlFor="name" className="pl-2 text-sm font-bold">
                Nome completo
              </label>
              <Input
                name="name"
                id="name"
                placeholder="Nome"
                className="mb-4"
              />

              <label htmlFor="email" className="pl-2 text-sm font-bold">
                Digite seu email
              </label>
              <Input
                name="email"
                id="email"
                placeholder="Email"
                className="mb-4"
              />

              <label htmlFor="cpf" className="pl-2 text-sm font-bold">
                Digite seu CPF
              </label>
              <Input name="cpf" id="cpf" placeholder="CPF" className="mb-4" />

              <label htmlFor="bd" className="pl-2 text-sm font-bold">
                Data de nascimento
              </label>
              <Input
                name="bd"
                id="bd"
                placeholder="Data de nascimento"
                className="mb-4"
              />

              <label htmlFor="genero" className="pl-2 text-sm font-bold">
                Selecione seu gênero
              </label>
              <Select name="genero">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
              </Select>

              <label htmlFor="password" className="pl-2 text-sm font-bold">
                Sua senha
              </label>
              <Input
                name="password"
                id="password"
                placeholder="Senha"
                className="mb-4"
              />

              <label htmlFor="numberfone" className="pl-2 text-sm font-bold">
                Digite seu número de celular
              </label>
              <Input
                name="numberfone"
                id="numberfone"
                placeholder="+55"
                className="mb-4"
              />
            </div>
            <Separator orientation="vertical" />
            <div className="w-full">
              <label htmlFor="name" className="pl-2 text-sm font-bold">
                Nome da clinica
              </label>
              <Input
                name="clinicName"
                id="clinicName"
                placeholder="Nome fantasia"
                className="mb-4"
              />

              <label htmlFor="cnpj" className="pl-2 text-sm font-bold">
                CNPJ da clinica
              </label>
              <Input
                name="cnpj"
                id="cnpj"
                placeholder="12.345.678/0000-00"
                className="mb-4"
              />

              <label htmlFor="name" className="pl-2 text-sm font-bold">
                Como você nos encontrou?
              </label>
              <Select name="genero">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Instagram" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">Linkedin</SelectItem>
                  <SelectItem value="anucio">anúncio</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-[#006BF9] to-[#31E6FF] py-4 w-full">
                Cadastrar conta
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end  items-end">
        <img
          src="/imgs/effect.png"
          alt="effect"
          className="max-h-[40.53125em] "
        />
      </div>
    </div>
  )
}

export default Register
