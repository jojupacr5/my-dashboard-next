'use client'
import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"

const simpleWidget = [
  {
    subTitle: 'Shopping cart counter',
    label: 'Contador',
    icon: <IoCartOutline size={50} className="text-blue-500"/>,
    path: '/dashboard/counter',
  }
]

export const WidgetsGrid = () => {

  const isCart = useAppSelector( state => state.counter.count );

  return (
    <div className="flex flex-wrap p-2 gap-3 justify-center">
      {
        simpleWidget.map( widget => (
          <SimpleWidget 
            key={widget.path}
            title={`${isCart}`} 
            {...widget}
          />    
        ))
      }
      
    </div>
  )
}