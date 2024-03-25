'use client'

import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useState } from 'react'

interface Consultation {
  patient: string
  startTime: string
  endTime: string
  typeService: string
}

interface Doctor {
  name: string
  consultations: Consultation[]
}

export const Scheduler = () => {
  const hours = Array.from({ length: 16 }, (_, index) => index + 7)
  const doctors: Doctor[] = [
    {
      name: 'Dr. Silva',
      consultations: [
        {
          patient: 'John Doe',
          startTime: '09:00',
          endTime: '10:00',
          typeService: 'Consulta',
        },
        {
          patient: 'Jane Smith',
          startTime: '11:00',
          endTime: '12:00',
          typeService: 'Operação',
        },
        {
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
          patient: 'John Does',
          startTime: '09:00',
          endTime: '10:00',
          typeService: 'Consulta',
        },
        {
          patient: 'Jane Smitht',
          startTime: '11:30',
          endTime: '13:00',
          typeService: 'Operação',
        },
      ],
    },
  ]

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

  function isConsultationActive(
    consultation: Consultation,
    hour: number,
  ): boolean {
    const startHour = parseInt(consultation.startTime.split(':')[0])
    const endHour = parseInt(consultation.endTime.split(':')[0])
    const startMinute = parseInt(consultation.startTime.split(':')[1])
    const endMinute = parseInt(consultation.endTime.split(':')[1])

    return (
      (hour >= startHour && hour < endHour) ||
      (hour === startHour && startMinute <= 15) ||
      (hour === endHour && endMinute > 0)
    )
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
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
                <TableCell className="font-medium">{doctor.name}</TableCell>
                {hours.map((hour, hourIndex) => {
                  // Filtra as consultas ativas para o médico e hora atuais
                  const activeConsultations = doctor.consultations.filter((c) =>
                    isConsultationActive(c, hour),
                  )

                  // Renderiza os cards para cada consulta ativa
                  return (
                    <TableCell key={hourIndex}>
                      {activeConsultations.map(
                        (consultation, consultationIndex) => (
                          <div key={consultationIndex} className="relative">
                            <Card
                              className="absolute -top-4 left-0 font-semibold bg-blue-500 text-white text-start text-xs rounded-2xl py-2 pl-1"
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
                        ),
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
