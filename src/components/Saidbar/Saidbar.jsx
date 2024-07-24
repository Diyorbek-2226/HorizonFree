import React from 'react'
import logo from '../images/Logo.svg';
import icon from '../images/Icon.svg'
import icon1 from '../images/Icon1.svg'
import icon3 from '../images/Icon3.svg'
import icon4 from '../images/Icon4.svg'
import icon5 from '../images/Icon5.svg'
import icon2 from '../images/Icon5.svg'
import '../Saidbar/Saidbar.css'

export const Saidbar = () => {
  
  return (
    <div className="Saidbar mx-auto">
        <div className="img ms-20">
          <img src={logo} alt="" />
        </div>
        <ul className="lists ">
          <li className="list_item flex items-center gap-2 py-4 text-xl hover:font-bold">
<img src={icon} alt="" /> <h3>Dashboard</h3>
          </li>
          <li className="list_item flex items-center gap-2 py-4 text-xl hover:font-bold">
          <img src={icon1} alt="" /> <h3>NFT Marketplace</h3>
          </li>
          <li className="list_item flex items-center gap-2 py-4 text-xl hover:font-bold">
          <img src={icon2} alt="" /> <h3>Tables</h3>
          </li>
          <li className="list_item flex items-center gap-2 py-4 text-xl hover:font-bold">
          <img src={icon3} alt="" /> <h3>Kanban</h3>
          </li>
          <li className="list_item flex items-center gap-2 py-4 text-xl hover:font-bold">
          <img src={icon4} alt="" /> <h3>Profile</h3>
          </li>
          <li className="list_item flex items-center gap-2 py-2 text-xl  hover:font-bold">
            <img src={icon5} alt="" /><h3>Sign In</h3>
          </li>
        </ul>
    </div>
  )
}
