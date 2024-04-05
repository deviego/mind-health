'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { EditProfile } from '@/app/(protect)/components/modalEditProfile'

type Consultation = {
  doctorName: string
  patient: string
  startTime: string
  endTime: string
  typeService: string
}

type Doctor = {
  name: string
  consultations: Consultation[]
}

// interface Props {
//   date?: Date | undefined
//   setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>
//   className?: string
// }

const doctors: Doctor[] = [
  {
    name: 'Dr. Silva',
    consultations: [
      {
        doctorName: 'Dr. Silva',
        patient: 'John Doe',
        startTime: '08:00',
        endTime: '10:00',
        typeService: 'Consulta',
      },
      {
        doctorName: 'Dr. Silva',
        patient: 'Jane Smith',
        startTime: '11:00',
        endTime: '12:00',
        typeService: 'Operação',
      },
      {
        doctorName: 'Dr. Silva',
        patient: 'Jane Smith',
        startTime: '14:00',
        endTime: '16:00',
        typeService: 'Ocupado',
      },
    ],
  },
]

export default function Profile() {
  const hours = Array.from({ length: 16 }, (_, index) => index + 7)
  const [consultations, setConsultations] = useState<Consultation[]>([])

  function calculateWidth(startTime: string, endTime: string): number {
    const start = new Date(`2000-01-01T${startTime}`)
    const end = new Date(`2000-01-01T${endTime}`)
    const diffInMinutes = (end.getTime() - start.getTime()) / (1000 * 60) // Diferença em minutos
    return diffInMinutes * 1 // Multiplicamos por um fator para ajustar a largura
  }

  function calculateMarginLeft(hour: number, startTime: string): number {
    const startHour = parseInt(startTime.split(':')[0])
    const startMinute = parseInt(startTime.split(':')[1])
    const totalMinutes = startHour * 60 + startMinute // Total de minutos desde a meia-noite
    const minutesFromHour = totalMinutes % 60
    return (hour - startHour) * 180 + (minutesFromHour / 60) * 180 // Calcula o marginLeft
  }

  useEffect(() => {
    if (!doctors) return

    const consultations = doctors.flatMap((doctor) => doctor.consultations)
    setConsultations(consultations)
  }, [])

  return (
    <div className="h-full flex w-full justify-center items-center ">
      <Card className="w-[800px] p-3 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-24 w-24 mr-2">
              <AvatarImage
                src="https://github.com/deviego.png"
                className="h-full w-full"
              />
              <AvatarFallback>Dev</AvatarFallback>
            </Avatar>
            <div className="pr-12 leading-none pt-1">
              <p className="text-xl font-normal ">Diego Domingues</p>
              <p className="text-sm text-start text-secondary-gray">Médico</p>
            </div>
          </div>
          <EditProfile />
        </div>
        <Separator className="my-4" orientation="horizontal" />
        <div>
          <Card className={cn('flex items-center justify-center overflow')}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-2"></TableHead>
                  {hours.map((hour) => (
                    <TableHead key={hour} className="px-1">
                      {hour}:00
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Loop pelos médicos */}
                {doctors.map((doctor, doctorIndex) => (
                  <TableRow key={doctorIndex}>
                    <TableCell className="font-medium">
                      <div className="flex pr-2">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage
                            src="https://github.com/deviego.png"
                            className="h-full w-full"
                          />
                          <AvatarFallback>Dev</AvatarFallback>
                        </Avatar>
                        {doctor.name}
                      </div>
                    </TableCell>
                    {hours.map((hour, hourIndex) => {
                      return (
                        <TableCell key={hourIndex}>
                          {consultations
                            .filter(
                              (consultation) =>
                                Number(
                                  consultation.startTime.substring(0, 2),
                                ) === hour &&
                                consultation.doctorName === doctor.name,
                            )
                            .map((consultation, consultationIndex) => (
                              <div key={consultationIndex} className="relative">
                                <Card
                                  className="absolute -top-4 left-0 font-semibold bg-primary text-white text-start text-xs rounded-2xl py-2 pl-1"
                                  style={{
                                    width: `${calculateWidth(
                                      consultation.startTime,
                                      consultation.endTime,
                                    )}px`,
                                    marginLeft: `${calculateMarginLeft(
                                      hour,
                                      consultation.startTime,
                                    )}px`,
                                  }}
                                >
                                  {consultation.typeService}
                                </Card>
                              </div>
                            ))}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </Card>
    </div>
  )
}
