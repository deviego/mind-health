import { Card } from '@/components/ui/card'
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface AgendaProps {
  timeslots: string[] // Renamed from 'horarios' to 'timeslots'
  professionals: { name: string; photo: string }[] // Renamed from 'profissionais' to 'professionals'
  appointments: {
    // Renamed from 'agendamentos' to 'appointments'
    client: string
    professional: string
    serviceType: string // Renamed from 'tipoServico' to 'serviceType'
    startTime: string // Renamed from 'horaInicial' to 'startTime'
    endTime: string // Renamed from 'horaFinal' to 'endTime'
  }[]
}
export function Scheduler({
  timeslots,
  professionals,
  appointments,
}: AgendaProps) {
  const [agenda] = useState<{
    [key: string]: {
      client: string
      serviceType: string
      startTime: string
      endTime: string
    }[]
  }>(() => {
    const initialAgenda: {
      [key: string]: {
        client: string
        serviceType: string
        startTime: string
        endTime: string
      }[]
    } = {}
    appointments.forEach((appointment) => {
      const startTime = parseInt(appointment.startTime.split(':')[0])
      const endTime = parseInt(appointment.endTime.split(':')[0])
      for (let i = startTime; i < endTime; i++) {
        const timeslot = `${i.toString().padStart(2, '0')}:00`

        if (!initialAgenda[`${appointment.professional}-${timeslot}`]) {
          initialAgenda[`${appointment.professional}-${timeslot}`] = []
        }
        initialAgenda[`${appointment.professional}-${timeslot}`].push({
          client: appointment.client,
          serviceType: appointment.serviceType,
          startTime: appointment.startTime,
          endTime: appointment.endTime,
        })
      }
    })

    return initialAgenda
  })

  return (
    <Card className="relative h-full">
      <Table className="w-full  overflow-x-auto h-8">
        <TableHeader
          style={{
            border: 'none',
          }}
        >
          <TableRow>
            <TableHead
              style={{
                borderRight: 'none',
              }}
            ></TableHead>
            {professionals.map((professional, index) => (
              <TableHead
                key={index}
                className="px-3   "
                style={{ border: 'none', borderBottom: '1px solid #e5e7eb' }}
              >
                <div className=" flex items-center gap-3 justify-center">
                  <div>
                    <img
                      src={professional.photo}
                      alt={professional.name}
                      className="w-9 h-9 rounded-full "
                    />
                  </div>
                  <p>{professional.name}</p>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {timeslots.map((timeslot, index) => (
            <TableRow
              key={index}
              style={{ border: 'none', borderRight: '1px solid #e5e7eb' }}
            >
              <td
                className="relative  text-center text-[10px] "
                style={{ borderRight: '1px solid #e5e7eb' }}
              >
                {timeslot}
              </td>
              {professionals.map((professional, index) => {
                const professionalAppointment =
                  agenda[`${professional.name}-${timeslot}`]

                if (
                  !professionalAppointment ||
                  professionalAppointment.length === 0
                ) {
                  return <td key={index} className="relative" />
                }

                const occupiedTimeslots: { start: number; end: number }[] = []
                let startTime = parseInt(
                  professionalAppointment[0].startTime.split(':')[0],
                )
                let endTime = parseInt(
                  professionalAppointment[0].endTime.split(':')[0],
                )
                for (let i = 1; i < professionalAppointment.length; i++) {
                  const current = parseInt(
                    professionalAppointment[i].startTime.split(':')[0],
                  )
                  if (current === endTime) {
                    endTime = parseInt(
                      professionalAppointment[i].endTime.split(':')[0],
                    )
                  } else {
                    occupiedTimeslots.push({ start: startTime, end: endTime })
                    startTime = current
                    endTime = parseInt(
                      professionalAppointment[i].endTime.split(':')[0],
                    )
                  }
                }
                occupiedTimeslots.push({ start: startTime, end: endTime })

                return (
                  <TableCell key={index} className="relative">
                    {occupiedTimeslots.map((interval, idx) => (
                      <div
                        key={idx}
                        className=" ml-2 p-2 absolute "
                        style={{
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          overflow: 'hidden',
                          borderLeft: '2px solid #006BF9',
                        }}
                      >
                        <div className="text-left pl-2 ">
                          <div>{professionalAppointment[0].serviceType}</div>
                        </div>
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
