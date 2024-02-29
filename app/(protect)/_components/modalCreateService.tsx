'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Separator } from '@/components/ui/separator'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Pencil } from 'lucide-react'

import { Textarea } from '@/components/ui/textarea'

type createProps = {
  isUpdate?: boolean
}
const formSchema = z.object({
  nameService: z.string(),
  categoryService: z.string(),
  timeToService: z.string(),
  obsToProfessional: z.string(),
  obsToPatient: z.string(),
  serviceDescription: z.string(),
  ToolsToServices: z.array(z.string()),
  examsNecessary: z.array(z.string()),
  serviceCost: z.number(),
  salesPriceService: z.number(),
})

export const CreateService = ({ isUpdate }: createProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  function generateTimeOptions(
    startMinute: number,
    endMinute: number,
    interval: number,
  ) {
    const options = []

    for (let i = startMinute; i <= endMinute; i += interval) {
      const hour = Math.floor(i / 60)
        .toString()
        .padStart(2, '0')
      const minute = (i % 60).toString().padStart(2, '0')
      const time = `${hour}h${minute}`

      options.push({
        value: i,
        label: time, // Exibe o tempo formatado como hh:mm
      })
    }

    return options
  }

  // Gera opções de tempo de 00h30 a 23h30, de 30 em 30 minutos
  const options = generateTimeOptions(30, 1410, 30)

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isUpdate ? (
          <Card className="rounded-full p-2  bg-white cursor-pointer hover:bg-primary hover:text-white">
            <Pencil className="w-[24px] h-[24px]" />
          </Card>
        ) : (
          <Button className="px-3 py-1 rounded-xl text-white">
            Cadastrar serviço
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className=" w-[53em]">
        <DialogHeader>
          <DialogTitle className="font-bold text-sm leading-none ">
            Cadastro de Serviço
          </DialogTitle>
          <Separator orientation="horizontal" className="my-1 " />
          <DialogDescription className="text-xs ">
            Preencha os campos abaixo para cadastrar o serviço
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" gap-2 w-full"
          >
            <div className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="nameService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Nome do serviço
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="nome " className="w-64" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Categoria do serviço
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Categoria do serviço "
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="timeToService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Tempo para realizar o serviço
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="01h30" />
                      </SelectTrigger>
                      <SelectContent></SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Preço custo do serviço
                    </FormLabel>
                    <Input
                      placeholder="R$ 0.000,00 "
                      className="w-64"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salesPriceService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Preço de venda do serviço
                    </FormLabel>
                    <Input
                      placeholder="R$ 0.000,00 "
                      className="w-64"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="obsToProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Observação para os profissionais
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva a observação"
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
                name="obsToPatient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Observação para os pacientes
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva a observação"
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
                name="serviceDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Descrição do serviço
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva a observação"
                        className="w-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-4 ">
              <FormField
                control={form.control}
                name="ToolsToServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Instrumentos para o serviço
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pesquisar instrumentos"
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
                name="examsNecessary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Exames necessários
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pesquisar por nome exame"
                        {...field}
                        className="w-64"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button className="px-5 py-2 rounded-xl text-white" type="submit">
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
