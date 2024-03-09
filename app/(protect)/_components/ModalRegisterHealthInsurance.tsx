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
import { Pencil, X } from 'lucide-react'

import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const formSchema = z.object({
  insuranceName: z.string(),
  categoryInsurance: z.string(),
  insuranceCost: z.number(),
  insuranceBirth: z.string(),
  contractInsurance: z.string(),
  returnType: z.string(),
})
type RegisterHealthInsuranceProps = {
  isUpdate?: boolean
}

export const RegisterHealthInsurance = ({
  isUpdate,
}: RegisterHealthInsuranceProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isUpdate ? (
          <Card className="rounded-full p-2  bg-white cursor-pointer hover:bg-primary hover:text-white">
            <Pencil className="w-[24px] h-[24px]" />
          </Card>
        ) : (
          <Button className="px-3 py-1 rounded-xl text-white">
            Cadastrar convênio
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className=" w-[53em]">
        <DialogHeader>
          <DialogTitle className="font-bold text-sm leading-none ">
            Cadastro de convênio
          </DialogTitle>
          <Separator orientation="horizontal" className="my-1 " />
        </DialogHeader>

        <DialogDescription className="text-xs mb-3">
          Preencha os campos abaixo para cadastrar um convênio
        </DialogDescription>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" gap-2 w-full"
          >
            <div className="flex w-full gap-4 mb-2">
              <FormField
                control={form.control}
                name="productName"
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
                name="categoryProduct"
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
            <div className="flex w-full gap-4 mb-2">
              <FormField
                control={form.control}
                name="productInStock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Tempo para realizar o serviço
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="UNID" />
                      </SelectTrigger>
                      <SelectContent></SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="productCost"
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
                name="salesProductService"
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
            <div className="flex w-full gap-4 mb-2">
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
          </form>
        </Form>
        <DialogFooter className="flex  items-center w-full flex-none mt-4">
          <Button className="px-7 py-3 rounded-xl text-white" type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
