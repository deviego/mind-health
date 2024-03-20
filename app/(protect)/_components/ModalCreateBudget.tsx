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
import { CircleCheckBig, X } from 'lucide-react'

import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Card } from '@/components/ui/card'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
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
  const [disable, setIsDisable] = useState(false)

  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Convênio ou Particular </DialogTitle>
        <Separator />
        <DialogDescription>
          O agendamento vai ser via convênio ou particular?
        </DialogDescription>
      </DialogHeader>
      <div>
        <Select disabled={disable}>
          <SelectTrigger className="w-full rounded-xl">
            <SelectValue placeholder="Convênio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="items-top flex space-x-2">
          <Checkbox onClick={() => setIsDisable(!disable)} id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Particular
            </label>
            <p className="text-sm text-muted-foreground">
              O agendamento será particular
            </p>
          </div>
        </div>
      </div>
      <Button onClick={onNext}> Continuar</Button>
    </DialogContent>
  )
}
function Step2({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Profissional </DialogTitle>
        <Separator />
        <DialogDescription>Agora, selecione o médico</DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <FormField
            name=""
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Adicionar profissional"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
function Step3({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Procedimento </DialogTitle>
        <Separator />
        <DialogDescription>Agora, selecione o procedimento</DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <Select>
            <SelectTrigger className="w-full rounded-xl">
              <SelectValue placeholder="selecionar procedimento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Cirurgia</SelectItem>
              <SelectItem value="dark">Consulta</SelectItem>
              <SelectItem value="system">Exames</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
        <DialogTitle>Agenda </DialogTitle>
        <Separator />
        <DialogDescription>
          Visualizar os horários disponíveis na agenda do profissional
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <h1>Parte sendo refeita com as alterações pedidas</h1>
        </div>
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
function Step5({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Agenda </DialogTitle>
        <Separator />
        <DialogDescription>
          Visualisar os horários dos médicos selecionado
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <h1>Parte sendo refeita com as alterações pedidas</h1>
        </div>
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
function Step6({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Agendamento </DialogTitle>
        <Separator />
        <DialogDescription>
          Marque o horário na agenda do médico
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <FormField
            name=""
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Adicionar profissional"
                    className="w-full mb-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="01/01/2024" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">02/01/2024</SelectItem>
              <SelectItem value="dark">03/01/2024</SelectItem>
              <SelectItem value="system">04/01/2024</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="13h30Min" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">13h00min</SelectItem>
              <SelectItem value="dark">13h30min</SelectItem>
              <SelectItem value="system">14h00min</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
          Agendar
        </Button>
      </div>
    </DialogContent>
  )
}
function Step7({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-4/5">
      <DialogHeader>
        <DialogTitle>Nome do procedimento </DialogTitle>
        <Separator className="my-2\" />
        <DialogDescription>
          Divisão de valores entre profissionais e a clinica
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <div className="w-96">
            <Card className="flex items-center justify-between my-3 p-2 ">
              <div className="flex gap-3 items-center">
                <div>avatar</div>
                <div>
                  <p className="text-sm font-semibold leading-none">Vicent</p>
                  <p className="text-xs">Médico</p>
                </div>
              </div>
              <div className="flex items-center gap-2  ">
                <X className="text-red-500 w-4" />
                <Button className="bg-transparent border text-xs text-secondary border-primary px-2 py3">
                  {' '}
                  Relatório de recebimento
                </Button>
              </div>
            </Card>
            <Card className="bg-secondary-white px-3 py-2 text-sm">
              <div className="flex justify-between items-center ">
                <p>Preço</p> <p>R$ 250,00</p>
              </div>
              <div className="flex justify-between items-center ">
                <p>Porcentagem da clinica</p> <p>- R$ 50,00</p>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <p>Total</p> <p>R$ 200,00</p>
              </div>
            </Card>
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold">Valor final do procedimento</p>
            <Separator
              orientation="horizontal"
              className="bg-secondary-white my-2"
            />
            <div className="w-96">
              <Card className="bg-secondary-white px-3 py-2 shadow-xl">
                <div className="flex justify-between items-center text-sm ">
                  <p>Preço</p> <p>R$ 250,00</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p>Porcentagem da clinica</p> <p>- R$ 50,00</p>
                </div>
                <div className="flex justify-between items-center text-sm font-semibold">
                  <p>Total</p> <p>R$ 200,00</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
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
function Step8({ onNext, onPrev }: stepProps) {
  return (
    <DialogContent className="w-80">
      <DialogHeader>
        <DialogTitle>Paciente </DialogTitle>
        <Separator />
        <DialogDescription>Agora, selecione o paciente</DialogDescription>
      </DialogHeader>
      <div>
        <div className="w-full mb-2">
          <FormField
            name=""
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Adicionar paciente"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-2">
        <Button
          onClick={onPrev}
          className="bg-secondary-white text-secondary py-3 px-8 rounded-xl"
        >
          Voltar
        </Button>
        <Button className=" py-3 px-8 rounded-xl" onClick={onNext}>
          Continuar
        </Button>
      </div>
    </DialogContent>
  )
}

function Step9({ onSent }: stepProps) {
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
export function CreateBudget() {
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
          Criar orçamento
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
          {currentStep === 5 && (
            <Step5 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 6 && (
            <Step6 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 7 && (
            <Step7 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 8 && (
            <Step8 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep === 9 && <Step9 onSent={handleSent} />}
        </form>
      </Form>
    </Dialog>
  )
}
