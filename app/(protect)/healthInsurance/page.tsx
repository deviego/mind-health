'use client'
import { Card } from '@/components/ui/card'
import { SquarePen } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { RegisterHealthInsurance } from '@/app/(protect)/_components/modalRegisterHealthInsurance'

export default function HealthInsurance() {
  return (
    <div className="flex gap-8 w-full h-full ">
      <div className="flex flex-col gap-2 w-[500px]">
        <div className="w-[500px]">
          <Card className="w-[500px] h-[300px] max-xl:h-[280px] max-xl:w-[450px] rounded-2xl max-xl:text-[10px] flex flex-col bg-[url('/imgs/convenio.png')] bg-cover bg-center justify-between shadow-md">
            <div className=" w-full px-3 pt-2 flex  justify-between items-center bg-gradient-to-b from-white to-transparent rounded-2xl">
              <img
                src="/imgs/MiND-logo.png"
                alt=""
                width={50}
                height={21}
                className="max-xl:hidden"
              />
              <div className="flex justify-end">
                <Card className="rounded-full p-2 text-white bg-orange-500">
                  <SquarePen className="w-[18px] h-[18px]" />
                </Card>
              </div>
            </div>

            <div className="flex justify-between px-3 pb-2 bg-gradient-to-t from-white to-transparent pt-5  rounded-2xl">
              <div className="w-[300px]">
                <p className="font-bold text-sm">
                  Cadastre diferentes{' '}
                  <span className="text-primary">convênio</span> no sistema
                </p>
                <p className="text-xs">
                  Apos realizar o cadastro o convênio sera adicionado
                </p>
              </div>
              <RegisterHealthInsurance />
            </div>
          </Card>
        </div>

        <ScrollArea className="w-[500px]  h-[250px] max-xl:h-[200px] max-xl:w-[450px] rounded-2xl  bg-white ">
          <h1 className="pl-5 py-3 font-semibold">Serviços Cadastrados</h1>
          {Array.from({ length: 15 }).map((_, index) => (
            <Card
              className="flex px-3 py-2 mx-5 justify-between items-center mb-4"
              key={index}
            >
              <div className="flex w-full gap-1 items-center">
                <div>
                  <Card className="rounded-full p-2 text-white bg-orange-500 flex items-center">
                    <SquarePen className="w-[24px] h-[24px]" />
                  </Card>
                </div>
                <div>
                  <h1 className="text-sm leading -none font-semibold">
                    Nome do convênio
                  </h1>
                  <p className="text-xs ">
                    Descritivo informativo sobre o convênio
                  </p>
                </div>
              </div>
              <div>
                <RegisterHealthInsurance isUpdate={true} />
              </div>
            </Card>
          ))}
        </ScrollArea>
      </div>
      <div className="w-[700px] ">
        <Card>
          <div className="w-full mt-4 ml-4">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden mb-2"
            />
            <p className="text-secondary-gray text-sm">
              Convênios destaques no mercado
            </p>
          </div>
          <ScrollArea className="flex flex-wrap justify-center container my-6 h-[450px] space-x-2">
            <div className="flex flex-wrap mx-3 gap-5 justify-center">
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/amil-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/bradesco-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/unimed-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/HDI-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/metlife.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/sulAmerica-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img
                  src="imgs/companies/portoSeguro-logo.svg"
                  alt="amil logo"
                />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/liberty-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/aliazzan-logo.png" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/amil-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md flex items-center">
                <img src="imgs/companies/amil-logo.svg" alt="amil logo" />
              </Card>
              <Card className="px-4 py-16 max-w-40 w-full md:w-1/2 shadow-md  flex items-center">
                <img src="imgs/companies/amil-logo.svg" alt="amil logo" />
              </Card>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  )
}
