'use client'
import { Card } from '@/components/ui/card'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  TrendingDown,
  TrendingUp,
  Download,
  Book,
  DollarSign,
  CreditCard,
  ShieldAlert,
} from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'

import { NewAppointmentsAtTheClinic } from '../_components/newAppointmentsAtTheClinic'
import Link from 'next/link'

export default function FinanceiroPage() {
  return (
    <div className="fex flex-col w-full container">
      <div className="flex w-full justify-between ">
        <div className="flex gap-3">
          <Card className="flex items-center px-3 py-1 gap-1 shadow-xl">
            <div>
              <Card className="rounded-full p-2 flex items-center text-white bg-primary">
                <TrendingUp />
              </Card>
            </div>
            <div>
              <p className="text-sm text-secondary-gray">Lucro Bruto</p>
              <h1 className="font-bold text-lg">R$ 190.100,00</h1>
            </div>
          </Card>
          <Card className="flex items-center px-3 py-1 gap-1 shadow-xl">
            <div>
              <Card className="rounded-full p-2 flex items-center text-white bg-orange-400">
                <Book />
              </Card>
            </div>
            <div>
              <p className="text-sm text-secondary-gray">Folha salarial</p>
              <h1 className="font-bold text-lg">R$ 40.300,00</h1>
            </div>
          </Card>
          <Card className="flex items-center px-3 py-1 gap-1 shadow-xl">
            <div>
              <Card className="rounded-full p-2 flex items-center text-white  bg-green-500">
                <DollarSign />
              </Card>
            </div>
            <div>
              <p className="text-sm text-secondary-gray">Lucro da clinica</p>
              <h1 className="font-bold text-lg text-green-500">R$ 88.570,00</h1>
            </div>
          </Card>
          <Card className="flex items-center px-3 py-1 gap-1 shadow-xl">
            <div>
              <Card className="rounded-full p-2 flex items-center text-white bg-red-500">
                <TrendingDown />
              </Card>
            </div>
            <div>
              <p className="text-sm text-secondary-gray">Despesas da clinica</p>
              <h1 className="font-bold text-lg text-red-500">R$ 20.210</h1>
            </div>
          </Card>
        </div>
        <div className="flex  items-center justify-center">
          <div className="flex mr-2 items-center just">
            <Download width={16} height={16} />
            <p className="text-xs ml-1">Download</p>
          </div>

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
      </div>
      <div className="flex w-full mt-8 gap-3">
        <Card className=" gap-4 shadow-xl rounded-2xl ">
          <div className="flex justify-between mx-1 items-center">
            <h1 className="pl-5 py-3 font-semibold">Serviços Cadastrados</h1>
            <Link href="/transactions">
              <p className="text-primary font-semibold text-xs mr-4">
                Acessar gestão de recebimento
              </p>
            </Link>
          </div>
          <ScrollArea className="w-[400px]  h-[220px] max-xl:h-[300px] max-xl:w-[450px]  rounded-md bg-white  shadow-xl">
            {Array.from({ length: 15 }).map((_, index) => (
              <Card
                className="flex px-3 py-2 mx-5 justify-between items-center mb-2 border-none"
                key={index}
              >
                <div className="flex w-full  items-center gap-2">
                  <div>
                    <Card className="rounded-full p-2 text-white bg-primary flex items-center">
                      <CreditCard className="w-[24px] h-[24px]" />
                    </Card>
                  </div>
                  <div>
                    <h1 className="text-xs leading-none font-semibold">
                      Nome do client
                    </h1>
                    <p className="text-xs ">
                      Descritivo informativo sobre o produto
                    </p>
                    <p className="text-md font-bold">R$ 1.000,00</p>
                  </div>
                </div>
              </Card>
            ))}
          </ScrollArea>
        </Card>
        <Card className="gap-4 shadow-xl rounded-2xl ">
          <div className="flex justify-between mx-1 items-center">
            <h1 className="pl-5 py-3 font-semibold">Serviços Cadastrados</h1>
            <Link href="/transactions">
              <p className="text-primary font-semibold text-xs mr-4">
                Acessar gestão de pagamentos
              </p>
            </Link>
          </div>
          <ScrollArea className="w-[450px] h-[220px] max-xl:h-[300px] max-xl:w-[450px] rounded-b-md  bg-white shadow-xl ">
            {Array.from({ length: 15 }).map((_, index) => (
              <Card
                className="flex px-3 py-2 mx-5 justify-between items-center mb-2 border-none"
                key={index}
              >
                <div className="flex w-full  items-center gap-2">
                  <div>
                    <Card className="rounded-full p-2 text-white bg-red-500 flex items-center">
                      <ShieldAlert className="w-[24px] h-[24px]" />
                    </Card>
                  </div>
                  <div>
                    <h1 className="text-xs leading-none font-semibold">
                      Nome do fornecedor
                    </h1>
                    <p className="text-xs ">
                      Descritivo informativo sobre o produto
                    </p>
                    <p className="text-md font-bold">R$ 1.000,00</p>
                  </div>
                </div>
              </Card>
            ))}
          </ScrollArea>
        </Card>
        <Card className=" gap-4 shadow-xl rounded-2xl ">
          <div className="flex justify-between mx-1 items-center">
            <h1 className="pl-5 py-3 font-semibold">Extratos</h1>
            <Link href="/transactions">
              <p className="text-primary font-semibold text-xs mr-4">
                Ver extratos
              </p>
            </Link>
          </div>
          <ScrollArea className="w-[300px]  h-[220px] max-xl:h-[300px] max-xl:w-[450px] rounded-md   bg-white shadow-xl ">
            {Array.from({ length: 15 }).map((_, index) => (
              <>
                <Card
                  className="flex px-3 py-2 mx-5 justify-between items-center mb-2 border-none"
                  key={index}
                >
                  <div className="flex w-full  items-center ">
                    <div>
                      <h1 className="text-sm leading-none font-semibold">
                        Nome
                      </h1>
                      <p className="text-xs ">
                        Descritivo informativo sobre a transação
                      </p>
                      <p className="text-lg font-bold text-red-500">
                        R$ -1.000,00
                      </p>
                    </div>
                  </div>
                </Card>
                <Card
                  className="flex px-3 py-2 mx-5 justify-between items-center mb-2 border-none"
                  key={index}
                >
                  <div className="flex w-full  items-center ">
                    <div>
                      <h1 className="text-sm leading-none font-semibold">
                        Nome
                      </h1>
                      <p className="text-xs ">
                        Descritivo informativo sobre a transação
                      </p>
                      <p className="text-lg font-bold">R$ 3.000,00</p>
                    </div>
                  </div>
                </Card>
              </>
            ))}
          </ScrollArea>
        </Card>
      </div>
      <div className="flex  mt-3 w-full gap-2">
        <div>
          <Card className="shadow-xl px-2 py-2 h-72                                       ">
            <Carousel
              opts={{
                align: 'start',
              }}
              className=" max-w-[400px]"
            >
              <CarouselContent>
                <CarouselItem className=" lg:basis-1/2">
                  {' '}
                  <Card className="h-64 w-40 rounded-2xl p-4 flex flex-col justify-between max-xl:w-32 max-xl:h-40">
                    <p className="text-sm max-xl:text-[10px]">
                      Meta:{' '}
                      <span className="text-primary font-bold ">
                        Faturamento
                      </span>
                    </p>
                    <div>
                      <h1 className="font-bold text-3xl text-center pb-2 max-xl:text-xl">
                        56%
                      </h1>
                      <Progress value={56} />
                      <p className="font-bold text-xs text-end mt-1 max-xl:text-[10px]">
                        R$ 1500.000,00
                      </p>
                    </div>
                    <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
                      <img src="/imgs/arrow.svg" alt="" className="w-6" />
                      <p className="ml-2 text-xs font-bold max-xl:text-[10px] ">
                        Este ano
                      </p>
                    </Card>
                  </Card>
                </CarouselItem>

                <CarouselItem className="basis-1/2 ">
                  {' '}
                  <Card className="h-64 w-40 rounded-2xl p-4 flex flex-col justify-between max-xl:w-32 max-xl:h-40">
                    <p className="text-sm max-xl:text-[10px]">
                      Meta:{' '}
                      <span className="text-primary font-bold ">
                        Faturamento
                      </span>
                    </p>
                    <div>
                      <h1 className="font-bold text-3xl text-center pb-2 max-xl:text-xl">
                        56%
                      </h1>
                      <Progress value={56} />
                      <p className="font-bold text-xs text-end mt-1 max-xl:text-[10px]">
                        R$ 1500.000,00
                      </p>
                    </div>
                    <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
                      <img src="/imgs/arrow.svg" alt="" className="w-6" />
                      <p className="ml-2 text-xs font-bold max-xl:text-[10px] ">
                        Este ano
                      </p>
                    </Card>
                  </Card>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  {' '}
                  <Card className="h-64 w-40 rounded-2xl p-4 flex flex-col justify-between max-xl:w-32 max-xl:h-40">
                    <p className="text-sm max-xl:text-[10px]">
                      Meta:{' '}
                      <span className="text-primary font-bold ">
                        Faturamento
                      </span>
                    </p>
                    <div>
                      <h1 className="font-bold text-3xl text-center pb-2 max-xl:text-xl">
                        56%
                      </h1>
                      <Progress value={56} />
                      <p className="font-bold text-xs text-end mt-1 max-xl:text-[10px]">
                        R$ 1500.000,00
                      </p>
                    </div>
                    <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
                      <img src="/imgs/arrow.svg" alt="" className="w-6" />
                      <p className="ml-2 text-xs font-bold max-xl:text-[10px] ">
                        Este ano
                      </p>
                    </Card>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </Card>
        </div>
        <Card className="w-[770px] h-72 shadow-xl px-2 py-2">
          <NewAppointmentsAtTheClinic />
        </Card>
      </div>
    </div>
  )
}
