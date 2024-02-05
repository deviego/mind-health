import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { LineChart } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      <div>
        <p className="text-xs font-thin text-secondary-gray">Segunda</p>
        <p className="text-xs font-thin text-secondary-gray">30/01/2023</p>
        <p className="font-bold text-sm pt-1">
          Olá, Deviego. Desejo um ótimo dia!
        </p>
      </div>
      <div className="my-3 flex gap-3 ">
        <Card className="h-80 w-40 rounded-3xl p-4 flex flex-col justify-between">
          <p className="text-sm">
            Meta: <span className="text-primary font-bold ">Faturamento</span>
          </p>
          <div>
            <h1 className="font-bold text-3xl text-center pb-2">71%</h1>
            <Progress value={71} />
            <p className="font-bold text-sm text-end">R$ 1500.000,00</p>
          </div>
          <Card className="rounde-3xl bg-secondary-white py-1 px-2">
            <Card className="rounded-full  bg-white p-2 w-[15px]">
              <LineChart className="w-[12px]" />
            </Card>
          </Card>
        </Card>
        <Card className="h-80 w-36"></Card>
      </div>
      <Card className="flex flex-col py-4 rounded-3xl">
        <div className=" ml-3 flex pb-1">
          <img src="/imgs/dot.svg" alt="" />
          <h3 className="font-bold text-sm ml-1">Recomendações médicas card</h3>
        </div>
        <img src="/imgs/Group_72.svg" alt="image doctor" />
        <p className="text-xs text-secondary mt-3 ml-1">
          Quais são os melhores medicamentos da <br />
          atualidade para tratar a diabete?
        </p>
      </Card>
    </div>
  )
}
export default HomePage
