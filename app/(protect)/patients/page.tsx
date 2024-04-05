'use client'
import { Card } from '@/components/ui/card'
import { PatientExpense } from '@/app/(protect)/_components/modalPatientExpense'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function Patients() {
  return (
    <div className="container ">
      <div className="flex items-center gap-3 w-full  justify-end  mt-1  ">
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
      <div className="flex items-center gap-5  flex-wrap justify-center my-8 pb-5">
        {Array.from({ length: 15 }).map((_, index) => (
          <Card key={index} className="px-3 py-2 w-80 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h1>Paciente</h1>
              </div>
              <PatientExpense />
            </div>
            <Separator orientation="horizontal" className="my-2" />
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Nome do paciente:</p>{' '}
                <p className="font-bold text-sm">Eduardo Santos</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Data de nascimento:</p>{' '}
                <p className=" text-sm">05/02/19878</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Número de celular:</p>{' '}
                <p className=" text-sm">+55 11 99282-8421</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">CPF:</p>{' '}
                <p className=" text-sm">000.000.000-00</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
