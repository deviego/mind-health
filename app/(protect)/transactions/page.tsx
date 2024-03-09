'use client'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Book,
  Check,
  CreditCard,
  Search,
  ShieldAlert,
  TrendingUp,
} from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Transactions(tab: string) {
  return (
    <div className="container">
      <Tabs defaultValue={'accountsReceivable'}>
        <TabsList>
          <TabsTrigger value="accountsReceivable">Contas a receber</TabsTrigger>
          <TabsTrigger value="accountsPayableToSupplier">
            Contas a pagar para o fornecedor
          </TabsTrigger>
          <TabsTrigger value="Statement">Extrato</TabsTrigger>
        </TabsList>

        <TabsContent value="accountsReceivable" className="mt-3">
          <div className="flex justify-between items-center">
            <div>
              <Card className="flex items-center px-3 py-1 gap-1">
                <div>
                  <Card className="rounded-full p-2 flex items-center text-white bg-primary">
                    <TrendingUp />
                  </Card>
                </div>
                <div>
                  <p className="text-sm text-secondary-gray">
                    Contas a receber
                  </p>
                  <h1 className="font-bold text-lg">R$ 90.100,00</h1>
                </div>
              </Card>
            </div>
            <div className="flex items-center gap-2">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl ">
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
                    <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl ">
                      visualizar:
                      <span className="font-bold text-[10px]">
                        Último 30 dias
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">
                          Último 30 dias
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">
                          Último 15 dias
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">Último 7 dias</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">Hoje</span>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-between items-center my-4">
              <p className="text-sm text-secondary-gray">
                Contas que você tem a receber
              </p>
              <div className="flex item-center justify-center border rounded-xl px-2">
                <Input
                  className="outline-none border-none bg-transparent"
                  placeholder="Procurar por conta"
                />
                <div className="flex items-center">
                  <Search className="text-primary" />
                </div>
              </div>
            </div>
            <ScrollArea className="w-full rounded-2xl h-[50vh]">
              {Array.from({ length: 15 }).map((_, index) => (
                <Card
                  className="flex px-3 py-2  justify-between items-center mb-2 border bg-transparent"
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

                  <Button className=" flex items-center gap-2  ">
                    <Check />
                    Confirmar recebimento
                  </Button>
                </Card>
              ))}
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent value="accountsPayableToSupplier" className="mt-3">
          <div className="flex justify-between items-center">
            <div>
              <Card className="flex items-center px-3 py-1 gap-1">
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
            </div>
            <div className="flex items-center gap-2">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl ">
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
                    <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl ">
                      visualizar:
                      <span className="font-bold text-[10px]">
                        Último 30 dias
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">
                          Último 30 dias
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">
                          Último 15 dias
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">Último 7 dias</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">Hoje</span>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-between items-center my-4">
              <p className="text-sm text-secondary-gray">
                Contas que você tem a receber
              </p>
              <div className="flex item-center justify-center border rounded-xl px-2">
                <Input
                  className="outline-none border-none bg-transparent"
                  placeholder="Procurar por conta"
                />
                <div className="flex items-center">
                  <Search className="text-primary" />
                </div>
              </div>
            </div>
            <ScrollArea className="w-full rounded-2xl h-[50vh]">
              {Array.from({ length: 15 }).map((_, index) => (
                <Card
                  className="flex px-3 py-2  justify-between items-center mb-2 border bg-transparent"
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

                  <Button className=" flex items-center gap-2  ">
                    <Check />
                    Confirmar recebimento
                  </Button>
                </Card>
              ))}
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent value="Statement" className="mt-3">
          <div className="flex justify-end items-center">
            <div className="flex items-center gap-2">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl ">
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
                    <NavigationMenuTrigger className="bg-white w-full flex gap-1 items-center  rounded-3xl ">
                      visualizar:
                      <span className="font-bold text-[10px]">
                        Último 30 dias
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">
                          Último 30 dias
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">
                          Último 15 dias
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">Último 7 dias</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-full">
                        visualizar:{' '}
                        <span className="font-bold text-sm">Hoje</span>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-between items-center my-4">
              <p className="text-sm text-secondary-gray">Extratos</p>
              <div className="flex item-center justify-center border rounded-xl px-2">
                <Input
                  className="outline-none border-none bg-transparent"
                  placeholder="Procurar extrato"
                />
                <div className="flex items-center">
                  <Search className="text-primary" />
                </div>
              </div>
            </div>
            <ScrollArea className="w-full rounded-2xl h-[50vh]">
              {Array.from({ length: 15 }).map((_, index) => (
                <Card
                  className="flex px-3 py-2  justify-between items-center mb-2 border bg-transparent"
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
              ))}
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
