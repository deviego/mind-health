import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
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

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const formSchema = z.object({
  avatar: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    ),
  doctorsName: z.string(),
  jobTitle: z.string(),
})

export const EditProfile = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="rounded-xl py-2 px-8 bg-gradient-to-r from-[#006BF9] to-[#31E6FF]">
          Editar perfil
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[700px]">
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <Separator orientation="horizontal" className="my-2" />
          <DialogDescription>Editar dados do perfil</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap w-full"
          >
            <div className="flex flex-wrap w-full gap-4">
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Foto de perfil
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
              <FormField
                control={form.control}
                name="doctorsName"
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
              <FormField
                control={form.control}
                name="jobTitle"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">
                      Cargo profissonal
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
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button className="px-12 py-2 rounded-xl text-white" type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
