'use client'
import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ScheduleCalendar } from '@/components/scheduleCalendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function AgendamentoPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const handleDayClick = () => console.log(date)

  return (
    <div className="w-full flex overflow-y-hidden">
      <div className="flex items-center z-10">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-white"
          onDayClick={handleDayClick}
        />
      </div>
      <div className="w-full flex item-center justify-center">
        <div className="w-[642px] z-10">
          <Card className="w-full flex justify-between item-center py-4 px-3 rounded-2xl mb-6">
            <div>
              <p className="text-sm font-bold">
                Agendar atendimento médico para pacientes
              </p>
              <p className="text-sm text-secondary-gray">
                Verifique a agenda do médico e agende o atendimento
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button>Agendar</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="mb-2">
                    Agendar atendimento
                  </DialogTitle>
                  <Separator />

                  <DialogDescription>
                    Selecione o profissional e verifique a disponibilidade
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-1 grid-cols-2">
                  <div className=" items-center ">
                    <Label htmlFor="name" className="text-right">
                      Profissional
                    </Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="profissional" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Marcos</SelectItem>
                        <SelectItem value="dark">Danilo</SelectItem>
                        <SelectItem value="system">Ruan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className=" items-center ">
                    <Label htmlFor="name" className="text-right">
                      Data
                    </Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="01/01/2024" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Marcos</SelectItem>
                        <SelectItem value="dark">Danilo</SelectItem>
                        <SelectItem value="system">Ruan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className=" items-center ">
                    <Label htmlFor="name" className="text-right">
                      Horário
                    </Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="13h 30min" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Marcos</SelectItem>
                        <SelectItem value="dark">Danilo</SelectItem>
                        <SelectItem value="system">Ruan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className=" items-center ">
                    <Label htmlFor="name" className="text-right">
                      Consulta
                    </Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Marcos</SelectItem>
                        <SelectItem value="dark">Danilo</SelectItem>
                        <SelectItem value="system">Ruan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Agendar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card>
          <ScheduleCalendar />
        </div>
        <img
          src="/imgs/rouded-blue.svg"
          alt=""
          className="absolute z-0 h-[700px]"
        />
      </div>
    </div>
  )
}
