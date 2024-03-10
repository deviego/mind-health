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
            className=" gap-1 w-full flex items-center justify-center"
          >
            <div className="flex w-full gap-4 mb-2 flex-col">
              <FormField
                control={form.control}
                name="insuranceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Nome do convênio
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="nome" className="w-64" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="insuranceCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      custo do convênio
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="R$ 1.000,00"
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
                name="categoryInsurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Tipo de retorno
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Sem retorno" />
                      </SelectTrigger>
                      <SelectContent></SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-4 mb-2 flex-col">
              <FormField
                control={form.control}
                name="insuranceBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Aniversário do convênio
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="03/02/2024 "
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
                name="returnType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Categoria do convênio
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Tipo de convênio" />
                      </SelectTrigger>
                      <SelectContent></SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contractInsurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      contrato do convênio
                    </FormLabel>
                    <Input
                      placeholder="Arquivo PDF "
                      className="w-64"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter className="flex  items-center w-full flex-none mt-4">
          <Button className="px-7 py-3 rounded-xl text-white" type="submit">
            Cadastrar{' '}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
