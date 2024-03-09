import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 'Paciente novo',
    serieColor: '#006BF9',
    color: '#006BF9',
    borderColor: '#006BF9',
    data: [
      {
        x: '2024-02-01',
        y: 7,
      },
      {
        x: '2024-02-02',
        y: 5,
      },
      {
        x: '2024-02-03',
        y: 11,
      },
      {
        x: '2024-02-04',
        y: 9,
      },
      {
        x: '2024-02-05',
        y: 12,
      },
      {
        x: '2024-02-06',
        y: 16,
      },
      {
        x: '2024-02-07',
        y: 13,
      },
      {
        x: '2024-02-08',
        y: 13,
      },
    ],
  },
  {
    id: 'paciente Antigo',
    serieColor: '#000',
    color: '#4F535A',
    borderColor: '#000',

    data: [
      {
        x: '2024-02-04',
        y: 14,
      },
      {
        x: '2024-02-05',
        y: 14,
      },
      {
        x: '2024-02-06',
        y: 15,
      },
      {
        x: '2024-02-07',
        y: 11,
      },
      {
        x: '2024-02-08',
        y: 10,
      },
      {
        x: '2024-02-09',
        y: 12,
      },
      {
        x: '2024-02-10',
        y: 9,
      },
      {
        x: '2024-02-11',
        y: 7,
      },
    ],
  },
]

export const NewAppointmentsAtTheClinic = () => {
  return (
    <ResponsiveLine
      data={data}
      lineWidth={3}
      axisBottom={{
        format: '%b %d',
        legend: 'Últimos dias',
        legendOffset: -12,
        tickValues: 'every 2 days',
      }}
      axisLeft={{
        legend: 'Clientes',
        legendOffset: 12,
      }}
      curve="monotoneX"
      colors={data.map((c) => c.color)}
      margin={{
        bottom: 60,
        left: 80,
        right: 20,
        top: 20,
      }}
      pointBorderWidth={1}
      pointSize={10}
      useMesh
      xFormat="time:%Y-%m-%d"
      xScale={{
        format: '%Y-%m-%d',
        precision: 'day',
        type: 'time',
        min: 'auto',
        max: 'auto',
        useUTC: false,
      }}
      yScale={{
        type: 'linear',
      }}
    />
  )
}
