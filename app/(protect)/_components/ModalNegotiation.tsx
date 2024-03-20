'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { CreateBudget } from './ModalCreateBudget'

export function ModalNegotiationOrCreate() {
  const [open, setIsOpen] = useState(true)
  const close = () => setIsOpen(false)
  return (
    <div>
      <Dialog defaultOpen open={open}>
        <DialogContent className="w-[44em]">
          <DialogHeader>
            <DialogTitle>Orçamentos</DialogTitle>
            <Separator />
            <DialogDescription>
              Olá, tudo bem? selecione uma das opções na qual você deseja
              prosseguir
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Card className="bg-[url('/imgs/negotiation-baner.png')] border-none bg-cover  h-96 w-72 bg-transparent flex items-end text-center">
                <div className="mb-3 px-3">
                  <p className="font-semibold text-sm">
                    Criar um novo orçamento
                  </p>
                  <p className="text-xs">
                    O nosso sistema vai gerar uma cotação de preço e após
                    concluído após você informar os detalhes.
                  </p>
                </div>
              </Card>
              <CreateBudget />
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Card className="bg-[url('/imgs/orçamento-baner.png')] border-none bg-cover  h-96 w-72 text-center bg-transparent flex items-end ">
                <div className="mb-3 px-2">
                  <p className="font-semibold text-sm">
                    Conclua os respectivos orçamentos{' '}
                  </p>
                  <p className="text-xs">
                    Para concluir você deve marcar uma data para o agendamento e
                    informar mais alguns detalhes.
                  </p>
                </div>
              </Card>

              <Button
                className="rounded-xl py-3 px-5 w-64 mt-3"
                onClick={close}
              >
                Negociações pendentes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
