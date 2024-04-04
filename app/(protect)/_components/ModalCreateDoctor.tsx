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

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
const formSchema = z.object({
  professionalName: z.string(),
  dateOfBirth: z.string(),
  CPF: z.string(), // Alterado de z.number() para z.string()
  numberFone: z.string(), // Alterado de z.number() para z.string()
  houseNumber: z.string(), // Alterado de z.number() para z.string()
  gender: z.string(),
  state: z.string(),
  city: z.string(),
  country: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  job: z.string(),
  complement: z.string().optional(),
  procedimento: z.string(), // Novo campo adicionado
  procedimentoName: z.string(), // Novo campo adicionado
  methodPayment: z.string(), // Novo campo adicionado
  payment: z.string(), // Novo campo adicionado
})

type stepProps = {
  onNext?: () => void
  onPrev?: () => void
  onSubmit?: () => void
}

const SecondInfo = ({ onPrev }: stepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
  return (
    <DialogContent className="w-[53.125rem]">
      <DialogHeader className="mb-2">
        <DialogTitle>Cadastro de profissional</DialogTitle>
        <Separator orientation="horizontal" className="my-1 " />
        <DialogDescription className="">
          Preencha com os procedimentos que o profissional pode realizar
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form className=" w-full">
          <div className="mb-5">
            <FormField
              control={form.control}
              name="procedimento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold">
                    Adicionar procedimento
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Adicionar novo procedimento     +"
                      className="w-64"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex  w-full gap-4 ">
            <FormField
              control={form.control}
              name="procedimentoName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold">
                    Nome do procedimento
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome do procedimento"
                      className="w-48"
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
                    <Input
                      placeholder="01/03/2024"
                      className="w-48"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="methodPayment"
              render={() => (
                <FormItem>
                  <FormLabel className="text-sm font-bold">
                    Forma de pagamento
                  </FormLabel>
                  <Select>
                    s
                    <SelectTrigger className="w-44">
                      <SelectValue placeholder="Selecionar" />
                    </SelectTrigger>
                    <SelectContent>Porcentagem</SelectContent>
                    <SelectContent>Valor fixo</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold">Pagamento</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="R$ 00,00"
                      className="w-48 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      <DialogFooter className="flex justify-between items-center px-2 w-full">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl"
        >
          Voltar
        </Button>
        <Button className=" py-3 px-8 rounded-xl">Cadastrar</Button>
      </DialogFooter>
    </DialogContent>
  )
}

const BasicInfo = ({ onNext }: stepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
  return (
    <DialogContent className="w-[37.5rem] ">
      <DialogHeader className="mb-2">
        <DialogTitle>Criar novo profissional</DialogTitle>
        <Separator orientation="horizontal" className="my-1 " />
        <DialogDescription className="">
          Preencha os dados correspondente do profissional
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form className="flex flex-wrap w-full">
          <div className="flex  w-full gap-4 items-start">
            <div>
              <FormField
                control={form.control}
                name="professionalName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Nome do profissional
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
                      <Input
                        placeholder="000.000.000-00"
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
                      <Input placeholder="Bairro" className="w-64" {...field} />
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
                        placeholder="Número da sua casa"
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
                name="job"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Seleciona a profissão
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Médico" />
                      </SelectTrigger>
                      <SelectContent>Médico</SelectContent>
                      <SelectContent>Infermeiro</SelectContent>
                      <SelectContent>Limpeza</SelectContent>
                      <SelectContent>Atendente</SelectContent>
                    </Select>
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
                name="complement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Complemento
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Complemento"
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
      <DialogFooter className="mt-2">
        <Button className="px-12 py-2 rounded-xl text-white" onClick={onNext}>
          Continuar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export const CreateDoctor = () => {
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values)
  // }
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
    console.log(currentStep)
  }

  // const handlePrevStep = () => {
  //   setCurrentStep(currentStep - 1)
  // }
  // const handleSend = () => {
  //   setCurrentStep(currentStep - 1)
  // }
  return (
    <>
      {currentStep === 1 && <BasicInfo onNext={handleNextStep} />}
      {currentStep === 2 && <SecondInfo />}
    </>
  )
}
