'use client'

import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Nfc } from 'lucide-react'

const formSchema = z.object({
  patientName: z.string(),
  dateOfBirth: z.string(),
  CPF: z.number(),
  numberFone: z.number(),
  gender: z.string(),
  state: z.string(),
  city: z.string(),
  country: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  houseNumber: z.string(),
  complement: z.string().optional(),
})

type stepProps = {
  onNext?: () => void
  onPrev?: () => void
}

const PatientAllCards = ({ onNext, onPrev }: stepProps) => {
  return (
    <div className="w-full">
      <DialogHeader className="mb-2">
        <DialogTitle>Todos os meus cartões </DialogTitle>
        <Separator orientation="horizontal" className="my-1 " />
        <DialogDescription className="">
          Aqui está todos os seus cartões
        </DialogDescription>
      </DialogHeader>
      <div className="w-[550px] flex flex-wrap my-6 h-[450px] gap-3 justify-center">
        <Card className="w-60 h-48 rounded-2xl">
          <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden"
            />
            <Nfc className="text-secondary-gray" width={32} height={32} />
          </div>
          <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
            <div className="px-4">
              <h1 className="">5022 3386 9820 1246</h1>
            </div>
            <div className="flex justify-between items-center px-4">
              <div>
                <p className="font-semibold leading-tight text-md">
                  Ana Belfort
                </p>
                <p className="text-xs">Paciente</p>
              </div>
              <img
                src="/imgs/Chip.png"
                alt=""
                width={32}
                height={32}
                className="max-xl:hidden"
              />
            </div>
          </div>
        </Card>
        <Card className="w-60 h-48 rounded-2xl">
          <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden"
            />
            <Nfc className="text-secondary-gray" width={32} height={32} />
          </div>
          <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
            <div className="px-4">
              <h1 className="">5022 3386 9820 1246</h1>
            </div>
            <div className="flex justify-between items-center px-4">
              <div>
                <p className="font-semibold leading-tight text-md">
                  Ana Belfort
                </p>
                <p className="text-xs">Paciente</p>
              </div>
              <img
                src="/imgs/Chip.png"
                alt=""
                width={32}
                height={32}
                className="max-xl:hidden"
              />
            </div>
          </div>
        </Card>
        <Card className="w-60 h-48 rounded-2xl">
          <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden"
            />
            <Nfc className="text-secondary-gray" width={32} height={32} />
          </div>
          <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
            <div className="px-4">
              <h1 className="">5022 3386 9820 1246</h1>
            </div>
            <div className="flex justify-between items-center px-4">
              <div>
                <p className="font-semibold leading-tight text-md">
                  Ana Belfort
                </p>
                <p className="text-xs">Paciente</p>
              </div>
              <img
                src="/imgs/Chip.png"
                alt=""
                width={32}
                height={32}
                className="max-xl:hidden"
              />
            </div>
          </div>
        </Card>
        <Card className="w-60 h-48 rounded-2xl">
          <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
            <img
              src="/imgs/MiND-logo.png"
              alt=""
              width={50}
              height={21}
              className="max-xl:hidden"
            />
            <Nfc className="text-secondary-gray" width={32} height={32} />
          </div>
          <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
            <div className="px-4">
              <h1 className="">5022 3386 9820 1246</h1>
            </div>
            <div className="flex justify-between items-center px-4">
              <div>
                <p className="font-semibold leading-tight text-md">
                  Ana Belfort
                </p>
                <p className="text-xs">Paciente</p>
              </div>
              <img
                src="/imgs/Chip.png"
                alt=""
                width={32}
                height={32}
                className="max-xl:hidden"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-between items-center px-2">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl"
        >
          Voltar
        </Button>
        <Button onClick={onNext} className=" py-3 px-8 rounded-xl">
          Salvar informação
        </Button>
      </div>
    </div>
  )
}

const MindCards = ({ onNext, onPrev }: stepProps) => {
  return (
    <div>
      <DialogHeader className="mb-2">
        <DialogTitle>Criar novo Paciente</DialogTitle>
        <Separator orientation="horizontal" className="my-1 " />
        <DialogDescription className="">
          Preencha os dados correspondente do paciente
        </DialogDescription>
      </DialogHeader>
      <div className="my-8">
        <Carousel
          className="w-[550px]"
          opts={{
            align: 'center',
          }}
        >
          <CarouselContent className="w-full">
            <CarouselItem className=" basis-3/5 ">
              <Card className="w-72 h-48 rounded-2xl">
                <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
                  <img
                    src="/imgs/MiND-logo.png"
                    alt=""
                    width={50}
                    height={21}
                    className="max-xl:hidden"
                  />
                  <Nfc className="text-secondary-gray" width={32} height={32} />
                </div>
                <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
                  <div className="px-4">
                    <h1 className="">5022 3386 9820 1246</h1>
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <div>
                      <p className="font-semibold leading-tight text-md">
                        Ana Belfort
                      </p>
                      <p className="text-xs">Paciente</p>
                    </div>
                    <img
                      src="/imgs/Chip.png"
                      alt=""
                      width={32}
                      height={32}
                      className="max-xl:hidden"
                    />
                  </div>
                </div>
              </Card>
            </CarouselItem>

            <CarouselItem className="  basis-3/5 ">
              <Card className="w-72 h-48 rounded-2xl">
                <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
                  <img
                    src="/imgs/MiND-logo.png"
                    alt=""
                    width={50}
                    height={21}
                    className="max-xl:hidden"
                  />
                  <Nfc className="text-secondary-gray" width={32} height={32} />
                </div>
                <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
                  <div className="px-4">
                    <h1 className="">5022 3386 9820 1246</h1>
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <div>
                      <p className="font-semibold leading-tight text-md">
                        Ana Belfort
                      </p>
                      <p className="text-xs">Paciente</p>
                    </div>
                    <img
                      src="/imgs/Chip.png"
                      alt=""
                      width={32}
                      height={32}
                      className="max-xl:hidden"
                    />
                  </div>
                </div>
              </Card>
            </CarouselItem>

            <CarouselItem className="  basis-3/5 ">
              <Card className="w-72 h-48 rounded-2xl">
                <div className="flex justify-between items-center  px-4 h-3/5 bg-secondary-white  rounded-t-2xl">
                  <img
                    src="/imgs/MiND-logo.png"
                    alt=""
                    width={50}
                    height={21}
                    className="max-xl:hidden"
                  />
                  <Nfc className="text-secondary-gray" width={32} height={32} />
                </div>
                <div className="w-full  bg-secondary-dark  rounded-b-2xl p-2 text-white ">
                  <div className="px-4">
                    <h1 className="">5022 3386 9820 1246</h1>
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <div>
                      <p className="font-semibold leading-tight text-md">
                        Ana Belfort
                      </p>
                      <p className="text-xs">Paciente</p>
                    </div>
                    <img
                      src="/imgs/Chip.png"
                      alt=""
                      width={32}
                      height={32}
                      className="max-xl:hidden"
                    />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-between items-center px-2">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl"
        >
          Voltar
        </Button>
        <Button onClick={onNext} className=" py-3 px-8 rounded-xl">
          Salvar informação
        </Button>
      </div>
    </div>
  )
}

const CreatePatientStep = ({ onNext }: stepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <DialogContent className="w-full">
      <DialogHeader className="mb-2">
        <DialogTitle>Criar novo Paciente</DialogTitle>
        <Separator orientation="horizontal" className="my-1 " />
        <DialogDescription className="">
          Preencha os dados correspondente do paciente
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-wrap w-full"
        >
          <div className="flex  w-full gap-4 items-center">
            <div>
              <FormField
                control={form.control}
                name="patientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Nome do paciente
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome completo"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="CPF"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">CPF</FormLabel>
                    <FormControl>
                      <Input placeholder="CPF" className="w-64" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Gênero</FormLabel>
                    <Select>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Gênero" />
                      </SelectTrigger>
                      <SelectContent>Masculino</SelectContent>
                      <SelectContent>Feminino</SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Estado</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="São Paulo"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Bairro</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Atualizar foto de perfil"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="houseNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Número da casa
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Atualizar foto de perfil"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Data de nascimento
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="01/02/2024"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberFone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Número de telefone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={`+55`} className="w-64" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      País nascido
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Brasil" className="w-64" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Cidade</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Rio de janeiro"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Nome da rua
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome da rua"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="CPF"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Nome completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Atualizar foto de perfil"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      <DialogFooter className="mt-4">
        <Button className="px-12 py-2 rounded-xl text-white" onClick={onNext}>
          Gerar Carteirinha do hospital
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export const CreatePatient = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
    console.log(currentStep)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="w-full">
      {currentStep === 1 && <CreatePatientStep onNext={handleNextStep} />}
      {currentStep === 2 && (
        <MindCards onNext={handleNextStep} onPrev={handlePrevStep} />
      )}
      {currentStep === 3 && (
        <PatientAllCards onNext={handleNextStep} onPrev={handlePrevStep} />
      )}
    </div>
  )
}
