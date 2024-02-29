'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Pencil, Stethoscope, Syringe } from 'lucide-react'
import { CreateService } from '../_components/createService'
import { CreateProduct } from '../_components/createProduct'

export default function CadastroProdutosEServico() {
  return (
    <div className="fex flex-col w-full ">
      <div className="w-full gap-4 flex pb-5">
        <Card className="w-[500px] h-[300px] max-xl:h-[280px] max-xl:w-[450px] rounded-2xl max-xl:text-[10px] flex flex-col bg-[url('/imgs/lab2.webp')] justify-between">
          <div className=" w-full px-3 pt-2 flex  justify-between items-center bg-gradient-to-b from-white to-transparent rounded-2xl">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden"
            />
            <div className="flex justify-end">
              <Card className="rounded-full p-2 text-white bg-secondary-gray">
                <Stethoscope className="w-[18px] h-[18px]" />
              </Card>
            </div>
          </div>

          <div className="flex justify-between px-3 pb-2 bg-gradient-to-t from-white to-transparent pt-5  rounded-2xl">
            <div className="w-[300px]">
              <p className="font-bold text-sm">
                Cadastre diferentes{' '}
                <span className="text-primary">serviços</span> no sistema
              </p>
              <p className="text-xs">
                Apos realizar o cadastro o serviço sera adicionado
              </p>
            </div>
            <CreateService />
          </div>
        </Card>
        <Card className="w-[500px] h-[300px] max-xl:h-[280px] max-xl:w-[450px] rounded-2xl max-xl:text-[10px] flex flex-col bg-[url('/imgs/lab.webp')] justify-between ">
          <div className=" w-full px-3 pt-2 flex  justify-between items-center bg-gradient-to-b from-white to-transparent pb-5 rounded-2xl">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden"
            />
            <div className="flex justify-end">
              <Card className="rounded-full p-2 text-white bg-secondary-gray">
                <Stethoscope className="w-[18px] h-[18px]" />
              </Card>
            </div>
          </div>

          <div className=" flex justify-between px-3 pb-2 pt-5 bg-gradient-to-t from-white to-transparent rounded-2xl">
            <div className="w-[300px]">
              <p className="font-bold text-sm">
                Cadastre diferentes{' '}
                <span className="text-primary">produtos </span> no sistema
              </p>
              <p className="text-xs">
                Apos realizar o cadastro o serviço sera adicionado
              </p>
            </div>
            <CreateProduct />
          </div>
        </Card>
      </div>
      <div className="w-full flex gap-4">
        <ScrollArea className="w-[500px]  h-[250px] max-xl:h-[200px] max-xl:w-[450px] rounded-2xl  bg-white ">
          <h1 className="pl-5 py-3 font-semibold">Serviços Cadastrados</h1>
          {Array.from({ length: 15 }).map((_, index) => (
            <Card
              className="flex px-3 py-2 mx-5 justify-between items-center mb-4"
              key={index}
            >
              <div className="flex w-full gap-1 items-center">
                <div>
                  <Card className="rounded-full p-2 text-white bg-ellipse flex items-center">
                    <Stethoscope className="w-[24px] h-[24px]" />
                  </Card>
                </div>
                <div>
                  <h1 className="text-sm leading-none font-semibold">
                    Nome do Serviço
                  </h1>
                  <p className="text-xs ">
                    Descritivo informativo sobre o serviço
                  </p>
                </div>
              </div>
              <div>
                <Card className="rounded-full p-2  bg-white">
                  <Pencil className="w-[24px] h-[24px]" />
                </Card>
              </div>
            </Card>
          ))}
        </ScrollArea>

        <ScrollArea className="w-[500px] mx-xl:w-40 h-[250px] max-xl:h-[200px] max-xl:w-[450px] rounded-2xl  bg-white pr-3 ">
          <h1 className="pl-5 py-3 font-semibold">Produtos Cadastrados</h1>
          {Array.from({ length: 15 }).map((_, index) => (
            <Card
              className="flex px-3 py-2 mx-5 justify-between items-center mb-4"
              key={index}
            >
              <div className="flex w-full gap-1 items-center">
                <div>
                  <Card className="rounded-full p-2 text-white bg-pink flex items-center">
                    <Syringe className="w-[24px] h-[24px]" />
                  </Card>
                </div>
                <div>
                  <h1 className="text-sm leading-none font-semibold">
                    Nome do Produto
                  </h1>
                  <p className="text-xs ">
                    Descritivo informativo sobre o Produto
                  </p>
                </div>
              </div>
              <div>
                <Card className="rounded-full p-2  bg-white">
                  <Pencil className="w-[24px] h-[24px]" />
                </Card>
              </div>
            </Card>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}
