'use client'

import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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

interface Props {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Silva',
    consultations: [
      {
        doctorName: 'Dr. Silva',
        patient: 'John Doe',
        startTime: '09:00',
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
  {
    name: 'Dr. Souza',
    consultations: [
      {
        doctorName: 'Dr. Souza',
        patient: 'John Does',
        startTime: '09:00',
        endTime: '10:00',
        typeService: 'Consulta',
      },
      {
        doctorName: 'Dr. Souza',
        patient: 'Jane Smitht',
        startTime: '11:30',
        endTime: '13:00',
        typeService: 'Operação',
      },
    ],
  },
]

export const ScheduleCalendar: React.FC<Props> = ({ date, setDate }) => {
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
  }, [doctors])

  return (
    <Card className="flex items-center justify-center overflow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-5"></TableHead>
            {hours.map((hour) => (
              <TableHead key={hour} className="">
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
                          Number(consultation.startTime.substring(0, 2)) ===
                            hour && consultation.doctorName === doctor.name,
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
  )
}
