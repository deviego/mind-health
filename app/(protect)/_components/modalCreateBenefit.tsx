'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { CircleCheckBig } from 'lucide-react'

import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  professionalName: z.string(),
  dateOfBirth: z.string(),
  CPF: z.number(),
  numberFone: z.number(),
  houseNumber: z.number(),
  gender: z.string(),
  state: z.string(),
  city: z.string(),
  country: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  job: z.string(),
  complement: z.string().optional(),
})

type stepProps = {
  onNext?: () => void
  onPrev?: () => void
  onSent?: () => void
}

function Step1({ onNext }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Criação de benefício </DialogTitle>
        <Separator />
        <DialogDescription>Escreva um nome para o benefício</DialogDescription>
      </DialogHeader>

      <div className="w-full mb-2">
        <FormField
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do plano</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome do plano"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Button onClick={onNext}> Continuar</Button>
    </DialogContent>
  )
}
function Step2({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-[32rem]">
      <DialogHeader>
        <DialogTitle>Benefício </DialogTitle>
        <Separator />
        <DialogDescription>
          Agora, selecione o serviço que fará parte do plano{' '}
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2 flex px-3 gap-5 ">
          <FormField
            name=""
            render={() => (
              <FormItem>
                <FormLabel>selecione o Serviço </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-64 rounded-xl">
                      <SelectValue placeholder="Serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Cirurgia</SelectItem>
                      <SelectItem value="dark">Consulta</SelectItem>
                      <SelectItem value="system">Exames</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor do Serviço </FormLabel>
                <FormControl>
                  <Input placeholder="R$ 0,00" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="ml-3 mt-4">Adicionar mais serviço</Button>
      </div>
      <div className="flex justify-between items-center px-2">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl "
        >
          Voltar
        </Button>
        <Button onClick={onNext} className=" py-3 px-8 rounded-xl">
          {' '}
          Continuar
        </Button>
      </div>
    </DialogContent>
  )
}
function Step3({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Benefício </DialogTitle>
        <Separator />
        <DialogDescription>
          Agora, defina o valor do plano de benefício
        </DialogDescription>
      </DialogHeader>

      <div className="w-full mb-2">
        <FormField
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor da assinatura do plano </FormLabel>
              <FormControl>
                <Input placeholder="R$ 0,00" className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-between items-center px-2">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl"
        >
          Voltar
        </Button>
        <Button onClick={onNext} className=" py-3 px-8 rounded-xl">
          {' '}
          Continuar
        </Button>
      </div>
    </DialogContent>
  )
}
function Step4({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Benefício </DialogTitle>
        <Separator />
        <DialogDescription>Adicionar imagem no seu cartão</DialogDescription>
      </DialogHeader>
      <div>
        <FormField
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adicionar foto</FormLabel>
              <FormControl>
                <Input
                  placeholder="Adicionar foto"
                  className="w-full border-primary"
                  type="file"
                  accept="image/*"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-between items-center px-2">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl"
        >
          Voltar
        </Button>
        <Button onClick={onNext} className=" py-3 px-8 rounded-xl">
          {' '}
          Continuar
        </Button>
      </div>
    </DialogContent>
  )
}
function Step5({ onSent }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Parabéns </DialogTitle>
        <Separator />
        <DialogDescription>Você acabou de criar um orçamento</DialogDescription>
      </DialogHeader>

      <div className="w-full mb-2 flex items-center justify-center">
        <CircleCheckBig className="text-green-500 " width={64} height={64} />
      </div>
      <Button onClick={onSent}> Fechar</Button>
    </DialogContent>
  )
}
export function CreateBenefit() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }
  const handleSent = () => {
    setCurrentStep(1)
    setIsOpen(false)
  }

  // const onSubmit = (data: FormData) => {
  //   // Lógica de envio do formulário aqui
  //   console.log(data)
  // }

  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button
          className="rounded-xl py-3 px-5 w-64 mt-3"
          onClick={() => setIsOpen(true)}
        >
          Criar benefício
        </Button>
      </DialogTrigger>
      <Form {...form}>
        <form className="flex flex-wrap w-full">
          {currentStep === 1 && <Step1 onNext={handleNextStep} />}
          {currentStep === 2 && (
            <Step2 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 3 && (
            <Step3 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 4 && (
            <Step4 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 5 && <Step5 onSent={handleSent} />}
        </form>
      </Form>
    </Dialog>
  )
}
