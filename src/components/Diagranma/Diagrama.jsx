import React from 'react'
import BarChart from './BarChart'
import Diagram from './diagram'
import LineChart from './LineChart'
import './Diagrama.css'

export const Diagrama = () => {
  return (
   <header>
    <div className="container">
        <ul className="diagramma">
            <li className="col-6 my-4 ">
                <BarChart className="w-full"/>
            </li>
            <li className="col-6 my-4">
            <Diagram/>
            </li>
            <li className="col-6 my-4">
            <LineChart/>
            </li>
        </ul>
    </div>
   </header>
  )
}
