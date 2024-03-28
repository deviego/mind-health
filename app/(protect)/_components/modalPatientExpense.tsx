import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

export function PatientExpense() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-transparent border-none text-primary hover:bg-transparent hover:text-secondary-gray">
          Ver inadimplência
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[700px]">
        <DialogHeader>
          <DialogTitle>
            <span className="font-bold">Inadimplência:</span> nome do paciente
          </DialogTitle>
          <Separator orientation="horizontal" className="my-2" />
          <DialogDescription>Editar dados do perfil</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
