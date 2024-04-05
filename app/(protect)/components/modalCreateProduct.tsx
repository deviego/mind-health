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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Pencil } from 'lucide-react'

type createProps = {
  isUpdate?: boolean
}
const formSchema = z.object({
  productName: z.string(),
  categoryProduct: z.string(),
  SKUProduct: z.number(),
  productInStock: z.number(),
  productCost: z.number(),
  salesProductService: z.number(),
  obsToProfessional: z.string(),
  obsToPatient: z.string(),
  serviceDescription: z.string(),
})
export const CreateProduct = ({ isUpdate }: createProps) => {
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
            Cadastrar produto
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className=" w-[53em]">
        <DialogHeader>
          <DialogTitle className="font-bold text-sm leading-none ">
            Cadastro de Produto
          </DialogTitle>
          <Separator orientation="horizontal" className="my-1 " />
        </DialogHeader>
        <Tabs defaultValue="singleRegistration" className="w-full">
          <TabsList>
            <TabsTrigger value="singleRegistration">
              Cadastro de produto único
            </TabsTrigger>
            <TabsTrigger value="listAndEditProduct">
              Listagem e edição de produto
            </TabsTrigger>
          </TabsList>
          <TabsContent value="singleRegistration">
            <DialogDescription className="text-xs mb-3">
              Preencha os campos abaixo para cadastrar um produto
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
                          Nome do Produto
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="nome "
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
                    name="categoryProduct"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold">
                          Categoria do Produto
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Categoria do Produto "
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
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold">
                          Tempo para realizar o Produto
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
                          Preço custo do Produto
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
                          Preço de venda do Produto
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
                          Descrição do Produto
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
          </TabsContent>
          <TabsContent value="listAndEditProduct">
            <DialogDescription className="text-xs mb-3">
              Pesquise por produtos e edite as informações ou adicione mais
              unidades
            </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" gap-2 w-full"
              >
                <div className="w-full mb-2">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Procurar por nome ou SKU do produto "
                            className="w-full"
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
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold">
                          Nome do Produto
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="nome "
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
                    name="categoryProduct"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold">
                          Categoria do Produto
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Categoria do Produto "
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
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold">
                          Tempo para realizar o Produto
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
                          Preço custo do Produto
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
                          Preço de venda do Produto
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
                          Descrição do Produto
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
            <DialogFooter className="flex sm:justify-between items-center w-full flex-none">
              <Button
                className="px-5 py-2 rounded-xl text-red-500 bg-transparent hover:bg-transparent hover:text-red-900 "
                type="submit"
              >
                Excluir produto do banco de dados
              </Button>
              <Button className="px-7 py-3 rounded-xl text-white" type="submit">
                Salvar
              </Button>{' '}
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
