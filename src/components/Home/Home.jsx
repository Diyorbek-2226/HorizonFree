import React from 'react'
import col1 from '../images/col1.svg'
import col2 from '../images/col2.svg'
import col3 from '../images/col3.svg'
import col4 from '../images/col4.svg'
import './home.css'
import { back } from './lib'

export const Home = () => {
    console.log(back);
    return (
        <header>
            <div className="container mx-auto">
                <ul className="row flex items-center justify-between">
                    <li className="col">
                        <p className='text-slate-800'> Pages / Dashboard</p>
                        <h1 className='text-2xl font-bold'>Main Dashboard</h1>
                    </li>
                    <li className="col1 flex items-center gap-4">
                        <input className='inputElement' type="text" placeholder='Search' />
                        <img src={col1} alt="" />
                        <img src={col2} alt="" />
                        <img src={col3} alt="" />
                        <img src={col4} alt="" />
                    </li>
                </ul>
                <ul className="row flex items-center justify-between py-16 gap-5">
                    {
                        back.map((item , index)=>{
                            return(
                                <li className='col-2 flex items-center gap-2'>
                                    <img key={index} src={item.imUrl} alt="" />
                                    <span>
                                        <p className='text-sm text-slate-500'>{item.textitle}</p>
                                        <h1 className='text-2xl font-bold py-1 '>{item.title}</h1>
                                    </span>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}
