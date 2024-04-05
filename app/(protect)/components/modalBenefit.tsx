'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { CreateBenefit } from './modalCreateBenefit'

export function ModalSeeOrCreateBenefit() {
  const [open, setIsOpen] = useState(true)
  const close = () => setIsOpen(false)
  return (
    <div>
      <Dialog defaultOpen open={open}>
        <DialogContent className="w-[44em]">
          <DialogHeader>
            <DialogTitle>Benefícios</DialogTitle>
            <Separator />
            <DialogDescription>
              Olá, tudo bem? selecione uma das opções na qual você deseja
              prosseguir
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex flex-col items-center ">
              <div className="bg-[url('/imgs/negotiation-baner.png')] border-none bg-cover  h-96 w-72 bg-transparent flex items-end ">
                <div className="mb-3 px-3 ml-2">
                  <p className="font-semibold text-sm">
                    Criar um novo benefício
                  </p>
                  <p className="text-xs">
                    Ofereça um plano de benefício exclusivo para os seus
                    pacientes personalize o plano da sua maneira
                  </p>
                </div>
              </div>
              <CreateBenefit />
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="bg-[url('/imgs/orçamento-baner.png')] border-none bg-cover  h-96 w-64  bg-transparent flex items-end ">
                <div className="mb-3 px-2 ml-2">
                  <p className="font-semibold text-sm">
                    Conclua os respectivos orçamentos{' '}
                  </p>
                  <p className="text-xs">
                    Para concluir você deve marcar uma data para o agendamento e
                    informar mais alguns detalhes.
                  </p>
                </div>
              </div>

              <Button
                className="rounded-xl py-3 px-5 w-64 mt-3"
                onClick={close}
              >
                Benefícios existentes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
