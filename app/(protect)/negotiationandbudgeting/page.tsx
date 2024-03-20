'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Stethoscope } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CreateBudget } from '../_components/ModalCreateBudget'
import { ModalNegotiationOrCreate } from '../_components/ModalNegotiation'

export default function NegotiationAndBudgeting() {
  return (
    <div className="container">
      <ModalNegotiationOrCreate />
      <div className="flex items-center justify-between mb-2 w-full z">
        <h1 className="font-semibold w-full">Negociações pendentes</h1>
        <div>
          <CreateBudget />
        </div>
      </div>
      <Separator orientation="horizontal" className="my-2" />
      <div className="flex items-center gap-3 w-full  justify-end  mt-1">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="w-full">
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl shadow-xl">
                Filtrar por:
                <span className="font-bold text-[10px]">Categoria</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <NavigationMenuLink className="w-full">
                  <span className="font-bold text-sm">Data</span>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full">
                  <span className="font-bold text-sm">Catalogo</span>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="w-full">
          <NavigationMenuList className="w-full">
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl shadow-xl ">
                visualizar:
                <span className="font-bold text-[10px]">Último 30 dias</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <NavigationMenuLink className="w-full">
                  visualizar:{' '}
                  <span className="font-bold text-sm">Último 30 dias</span>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full">
                  visualizar:{' '}
                  <span className="font-bold text-sm">Último 15 dias</span>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full">
                  visualizar:{' '}
                  <span className="font-bold text-sm">Último 7 dias</span>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full">
                  visualizar: <span className="font-bold text-sm">Hoje</span>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-start gap-3 mt-8">
        <div>
          <Card className="bg-[url('/imgs/bgNeo.svg')] bg-center bg-cover shadow-xl rounded-2xl h-96 w-[300px]">
            <div className="w-full flex items-start justify-start  bg-gradient-to-b from-white to-transparent py-6 px-2">
              <img
                src="/imgs/MiND-logo.png"
                alt=""
                width={50}
                height={21}
                className="max-xl:hidden"
              />
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-[500px]  rounded-2xl shadow-xl px-2">
            <div className="flex justify-between items-center py-3">
              <p className="font-semibold text-sm"> nome do procedimento</p>
              <div className="flex items-center text-primary text-xs gap-2 font-semibold">
                <Link href="">Ver divisão de valores</Link>
                <Link href="">Marcar agendamento </Link>
              </div>
            </div>
            <div className="w-full ">
              <Separator orientation="horizontal" />
            </div>
            <div className="flex justify-between items-center my-4 ">
              <div className=" text-sm leading-6 ">
                <p>Nome do paciente:</p>
                <p>Data de nascimento:</p>
                <p>Número de celular:</p>
                <p>CPF:</p>
              </div>
              <div className=" text-sm leading-6">
                <p className="font-bold">Eduardo Santos</p>
                <p>05/02/1987</p>
                <p>+55 21 99234-6628</p>
                <p>000.000.000-00</p>
              </div>
            </div>
            <Card className="flex px-3 py-2  justify-between items-center mb-2 shadow-md">
              <div className="flex w-full gap-1 items-center">
                <div>
                  <Card className="rounded-full p-2 text-white bg-ellipse flex items-center">
                    <Stethoscope className="w-[24px] h-[24px]" />
                  </Card>
                </div>
                <div>
                  <h1 className="text-sm leading-none font-semibold">
                    Nome do serviço
                  </h1>
                  <p className="text-xs text-secondary-gray">
                    Descritivo informativo sobre o serviço
                  </p>
                </div>
              </div>
            </Card>
            <Card className="px-3 py-2  flex w-full gap-1 items-center shadow-md">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage
                  src="https://github.com/deviego.png"
                  className="h-full w-full"
                />
                <AvatarFallback>Dev</AvatarFallback>
              </Avatar>
              <div>
                <p className="leading">Vicent</p>
                <p className="text-xs text-secondary-gray">Médico</p>
              </div>
            </Card>
            <Card className="flex px-3 py-2  justify-between items-center mb-2 shadow-md bg-[#F2F4F5] rounded-2xl mt-2">
              <div className="text-sm">
                <p>Preço:</p>
                <p>Desconto:</p>
                <p className="font-bold mt-1">Total:</p>
              </div>

              <div className="text-sm">
                <p>R$ 250,00</p>
                <p>-R$ 50,00</p>
                <p className="font-bold mt-1">R$ 200,00</p>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  )
}
