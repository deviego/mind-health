'use client'
import React, { useState, useEffect } from 'react'
import { DayPilotCalendar } from '@daypilot/daypilot-lite-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

// Interface para o objeto de coluna
interface Column {
  name: string
  id: string
  description: string
}

// Interface para o objeto de evento
interface Event {
  id: number
  text: string
  start: string
  end: string
  barColor: string
  resource: string
  backColor: string
}

export function Scheduler() {
  const [columns, setColumns] = useState<Column[]>([])

  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setColumns([
      { name: ' Diego', id: 'R1', description: 'medico' },
      { name: 'Raidan', id: 'R2', description: 'medico' },
      { name: 'Gusta ', id: 'R3', description: 'medico' },
    ])

    setEvents([
      {
        id: 1,
        text: 'Evento 1',
        start: dayjs('2024-04-01T11:00:00').locale('pt-br').format(),
        end: dayjs('2024-04-01T13:30:00').locale('pt-br').format(),
        barColor: '#006BF9',
        resource: 'R1',
        backColor: '#fff',
      },
      {
        id: 2,
        text: 'Evento 2',
        start: dayjs('2024-04-01T10:00:00').locale('pt-br').format(),
        end: dayjs('2024-04-01T12:00:00').locale('pt-br').format(),
        barColor: '#006BF9',
        resource: 'R2',
        backColor: '#fff',
      },
    ])
  }, [])

  return (
    <DayPilotCalendar
      viewType={'Resources'}
      startDate={dayjs().locale('pt-br').format()} // Corrigido o formato da data de início
      columns={columns}
      events={events}
    />
  )
}
