import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CalendarDays } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <div>
          <p className="text-xs font-thin text-secondary-gray">Segunda</p>
          <p className="text-xs font-thin text-secondary-gray">30/01/2023</p>
          <p className="font-bold text-sm pt-1">
            Olá, Deviego. Desejo um ótimo dia!
          </p>
        </div>
        <div className="my-3 flex gap-3 ">
          <Card className="h-80 w-40 rounded-2xl p-4 flex flex-col justify-between">
            <p className="text-sm">
              Meta: <span className="text-primary font-bold ">Faturamento</span>
            </p>
            <div>
              <h1 className="font-bold text-3xl text-center pb-2">71%</h1>
              <Progress value={71} />
              <p className="font-bold text-xs text-end mt-1">R$ 1500.000,00</p>
            </div>
            <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
              <img src="/imgs/arrow.svg" alt="" className="w-6" />
              <p className="ml-2 text-xs font-bold">Este ano</p>
            </Card>
          </Card>
          <Card className="h-80 w-40 rounded-2xl p-4 flex flex-col justify-between">
            <p className="text-sm">
              Meta: <span className="text-primary font-bold ">Faturamento</span>
            </p>
            <div>
              <h1 className="font-bold text-3xl text-center pb-2">50%</h1>
              <Progress value={50} />
              <p className="font-bold text-xs text-end mt-1">R$ 1500.000,00</p>
            </div>
            <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
              <img src="/imgs/arrow.svg" alt="" className="w-6" />
              <p className="ml-2 text-xs font-bold">Este ano</p>
            </Card>
          </Card>
        </div>
        <Card className="flex flex-col py-4 rounded-3xl">
          <div className=" ml-3 flex pb-1">
            <img src="/imgs/dot.svg" alt="" />
            <h3 className="font-bold text-sm ml-1">
              Recomendações médicas card
            </h3>
          </div>
          <img src="/imgs/Group_72.svg" alt="image doctor" />
          <p className="text-xs text-secondary mt-3 ml-1">
            Quais são os melhores medicamentos da <br />
            atualidade para tratar a diabete?
          </p>
        </Card>
      </div>
      <div className="w-full flex flex-col items-end">
        <div className="flex ">
          <img src="/imgs/cardMedic.svg" alt="" className="w-[400px]" />
          <Card className="w-64 h-72 mt-5 rounded-2xl">
            <div className="flex justify-between p-4">
              <img src="/imgs/MiND-logo.png" alt="" width={50} height={21} />
              <p className="text-xs text-primary leading-none">
                Suas tarefas de hoje
              </p>
            </div>
            <Card className="bg-secondary-white rounded-2xl h-56 px-2 pt-2">
              <Card className="py-3 px-4">
                <div className="flex items-center">
                  <Card className="rounded-full px-2 py-2 w-full mr-2 bg-secondary-white ">
                    <p className="text-[10px] leading-none pl-1">
                      Você tem atendimento agendado com a doutora Marcela
                    </p>
                  </Card>

                  <div>
                    <img src="/imgs/calendar.svg" alt="" />
                  </div>
                </div>
                <p className="text-[10px] text-secondary-gray ml-4 mt-1">
                  Para hoje as{' '}
                  <span className="text-primary font-bold">14h 30min</span>
                </p>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default HomePage
