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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Scheduler } from '@/app/(protect)/_components/calendar'
import { ScrollArea } from '@/components/ui/scroll-area'

const horariosFixos = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
]

const profissionais = [
  { name: 'Dr. Fulano', photo: 'https://source.unsplash.com/200x200/?doctor' },
  {
    name: 'Dra. Ciclana',
    photo: 'https://source.unsplash.com/200x200/?physician',
  },
  {
    name: 'Dr. Beltrano',
    photo: 'https://source.unsplash.com/200x200/?physician',
  },
]
const appointments = [
  {
    client: 'João',
    startTime: '08:00',
    endTime: '09:00',
    professional: 'Dr. Fulano',
    serviceType: 'Consulta',
  },
  {
    client: 'Maria',
    startTime: '10:00',
    endTime: '11:00',
    professional: 'Dra. Ciclana',
    serviceType: 'Exame',
  },
  {
    client: 'Estevam',
    startTime: '13:00',
    endTime: '14:00',
    professional: 'Dra. Ciclana',
    serviceType: 'Exame',
  },
  {
    client: 'José',
    startTime: '09:00',
    endTime: '10:00',
    professional: 'Dr. Beltrano',
    serviceType: 'Cirurgia',
  },
  {
    client: 'José',
    startTime: '12:00',
    endTime: '13:00',
    professional: 'Dr. Beltrano',
    serviceType: 'Almoço',
  },
]

export default function AgendamentoPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const handleDayClick = () => console.log(date)

  return (
    <div className=" flex  items-center bg-auto bg-no-repeat bg-[url('/imgs/rouded-blue.svg')] container  h-[85vh]">
      <div className="flex items-center z-10 w-full gap-4 justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-white shadow-xl mt-9 mr-10"
          onDayClick={handleDayClick}
        />
        <div>
          <div className="w-[40.625rem] z-10 ">
            <Card className="w-full flex justify-between item-center py-4 px-3 rounded-2xl mb-6 shadow-xl">
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
          </div>
          <Card className="w-[40.625rem] h-96">
            <p className="font-bold pl-2 my-3 text-xs">
              Agenda de atendimento médico
            </p>
            <ScrollArea className="h-80">
              <Scheduler
                timeslots={horariosFixos}
                professionals={profissionais}
                appointments={appointments}
              />
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  )
}
