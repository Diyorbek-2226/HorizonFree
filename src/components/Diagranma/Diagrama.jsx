import React from 'react';
import BarChart from './BarChart';
import Diagram from './diagram'; // Ensure the correct import path
import LineChart from './LineChart';
import './Diagrama.css';
import { Back } from './data';

export const Diagrama = () => {
    const sortedBack = [...Back].sort((a, b) => b.text.localeCompare(a.text));

    return (
        <header>
            <div className="container flex items-center gap-12">
                <ul className="diagramma">
                    <li className="col-6 my-4">
                        <BarChart className="w-full"/>
                    </li>
                    <li className="col-6 my-4">
                        <Diagram />
                    </li>
                    <li className="col-6 my-4">
                        <LineChart />
                    </li>
                </ul>
                <ul className="diagramma">
                    <li className="col-1 my-4 flex items-center gap-8 justify-between py-5 px-4">
                        {Back.map((element, id) => (
                            <div className="diagrama_list" key={id}>
                                <img src={element.img} alt="" />
                                <h3 className='my-1'>{element.text}</h3>
                                <small className='my-1'>{element.textItem}</small>
                                <h3 className='my-1'>{element.bluetext}</h3>
                                <button className='my-2 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                    {element.btnContent}
                                </button>
                            </div>
                        ))}
                    </li>
                    <li className="col-1 my-4 flex items-center gap-8 justify-between py-5 px-4">
                        {sortedBack.map((item, id) => (
                            <div className="diagrama_list" key={id}>
                                <img src={item.img} alt="" />
                                <h3 className='my-1'>{item.text}</h3>
                                <small className='my-1'>{item.textItem}</small>
                                <h3 className='my-1'>{item.bluetext}</h3>
                                <button className='my-2 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                    {item.btnContent}
                                </button>
                            </div>
                        ))}
                    </li>
                    <li className="col-6 my-4">
                        <BarChart className="w-full"/>
                    </li>
                </ul>
            </div>
        </header>
    );
}
