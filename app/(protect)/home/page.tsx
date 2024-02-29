'use client'
import { ScheduleCalendar } from '@/components/scheduleCalendar'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { Crown } from 'lucide-react'

const HomePage = () => {
  const today = new Date()

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }

  const dateTimeFormatOptions = Object.assign({}, options, {
    weekday: 'short', // Converte 'weekday' para o formato curto
  })

  const formattedDate = today.toLocaleDateString('pt-BR', dateTimeFormatOptions)
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }),
  )

  return (
    <div className="flex justify-between w-full">
      <div>
        <div>
          <p className="text-xs font-thin text-secondary-gray">
            {formattedDate}
          </p>
          <p className="font-bold text-sm pt-1">
            Olá, Deviego. Desejo um ótimo dia!
          </p>
        </div>
        <div className="my-3 flex gap-3 ">
          <Card className="h-64 w-40 rounded-2xl p-4 flex flex-col justify-between max-xl:w-32 max-xl:h-40">
            <p className="text-sm max-xl:text-[10px]">
              Meta: <span className="text-primary font-bold ">Faturamento</span>
            </p>
            <div>
              <h1 className="font-bold text-3xl text-center pb-2 max-xl:text-xl">
                71%
              </h1>
              <Progress value={71} />
              <p className="font-bold text-xs text-end mt-1 max-xl:text-[10px]">
                R$ 1500.000,00
              </p>
            </div>
            <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
              <img src="/imgs/arrow.svg" alt="" className="w-6" />
              <p className="ml-2 text-xs font-bold max-xl:text-[10px] ">
                Este ano
              </p>
            </Card>
          </Card>
          <Card className="h-64 w-40 rounded-2xl p-4 flex flex-col justify-between max-xl:w-32 max-xl:h-40">
            <p className="text-sm max-xl:text-[10px]">
              Meta: <span className="text-primary font-bold ">Faturamento</span>
            </p>
            <div>
              <h1 className="font-bold text-3xl text-center pb-2 max-xl:text-xl">
                71%
              </h1>
              <Progress value={71} />
              <p className="font-bold text-xs text-end mt-1 max-xl:text-[10px]">
                R$ 1500.000,00
              </p>
            </div>
            <Card className="rounded-full bg-secondary-white py-1 px-2 flex items-center">
              <img src="/imgs/arrow.svg" alt="" className="w-6" />
              <p className="ml-2 text-xs font-bold max-xl:text-[10px] ">
                Este ano
              </p>
            </Card>
          </Card>
        </div>
        <Card className="flex flex-col py-4 rounded-3xl">
          <div className=" ml-3 flex pb-1">
            <img src="/imgs/dot.svg" alt="" />
            <h3 className="font-bold text-sm ml-1 max-xl:text-xs">
              Recomendações médicas card
            </h3>
          </div>
          <img src="/imgs/Group_72.svg" alt="image doctor" className="w-full" />
          <p className="text-xs text-secondary mt-3 ml-1">
            Quais são os melhores medicamentos da <br />
            atualidade para tratar a diabete?
          </p>
        </Card>
      </div>
      <div className="w-full h-full">
        <img src="/imgs/body-home.png" alt="corpo-humano" />
      </div>
      <div className="w-full flex flex-col items-end mr-4">
        <div className="flex gap-3">
          <Card className="w-56 mx-xl:w-40 max-xl:h-72 rounded-2xl max-xl:text-[10px] ">
            <div className="flex justify-between p-4 items-center">
              <img
                src="/imgs/MiND-logo.png"
                alt=""
                width={50}
                className="h-3 max-xl:hidden"
              />
              <Crown className="text-yellow-500" />
            </div>
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/imgs/medicodestaque.webp"
                    alt="Medico destaque"
                    className="h-48"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/imgs/medicodestaque.webp"
                    alt="Medico destaque"
                    className="h-48"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/imgs/medicodestaque.webp"
                    alt="Medico destaque"
                    className="h-48"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </Card>
          <Card className="w-56 mx-xl:w-40 max-xl:h-72 rounded-2xl max-xl:text-[10px]">
            <div className="flex justify-between p-4 items-center">
              <img
                src="/imgs/MiND-logo.png"
                alt=""
                width={50}
                height={21}
                className="max-xl:hidden"
              />
              <p className="text-xs text-primary leading-none max-xl:text-[10px] ">
                Suas tarefas de hoje
              </p>
            </div>
            <Card className="bg-secondary-white rounded-2xl h-56 px-2 pt-2">
              <Card className="py-3 px-4">
                <div className="flex items-center">
                  <Card className="rounded-full px-2 py-2 w-full mr-2 bg-secondary-white ">
                    <p className="text-[10px] leading-none pl-1">
                      atendimento com a doutora Marcela
                    </p>
                  </Card>

                  <div className="max-xl:hidden">
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
        <ScheduleCalendar className="w-[458px] mt-3" date={today} />
      </div>
    </div>
  )
}
export default HomePage
