import React from 'react'
import { NavLink } from "react-router-dom";
import { CgMenuRight } from 'react-icons/cg'
import { MdOutlineStarRate } from 'react-icons/md'
import { GiEmeraldNecklace } from'react-icons/gi'
import { VscAccount } from 'react-icons/vsc'
import { BsGenderMale, BsGenderFemale, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react';
const Navbar = () => {
    const menus =[
        {name:"MEN", link:'/', icon: BsGenderMale},
        {name:"WOMEN", link:'/', icon: BsGenderFemale},
        {name:"ACCESSORIES", link:'/', icon: GiEmeraldNecklace },
        {name:"CART", link:'/', icon: AiOutlineShoppingCart, margin: true },
        {name:"WISHLIST", link:'/', icon: AiOutlineHeart},
        {name:"ACCOUNT", link:'/', icon: VscAccount},
        {name:"HELP", link:'/', icon: BsQuestionCircle, margin: true},
        {name:"RATE US", link:'/', icon: MdOutlineStarRate}

    ]
    const [open,setOpen] = useState(true);
  return (
    <section className='flex gap-6'>
    <div className={`bg-gray-400 min-h-screen ${open ? 'w-72':'w-16'} text-[#15191d] px-4 duration-500`}>
        <div className='py-3 flex justify-end'>
        <CgMenuRight size={26} className='cursor-pointer' onClick={()=>setOpen(!open)}/>
        </div>
        <div className='mt-4 flex flex-col gap-4 realtive'>
            {
menus?.map((menu,i)=>(
    <NavLink to={menu?.link} 
    key={i} 
    className={`${menu?.margin && "mt-5"} 
    group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-500 rounded-md`}>
        <div>{React.createElement(menu?.icon, {size: "20"})}</div>
        <h2 
            style={{
                transitionDelay: `${i + 3}00ms`
            }}
            className={` whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}
        </h2>
        <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
            {menu?.name}
        </h2>
    </NavLink >
))

            }

        </div>
    </div>
    </section>
  )
}

export default Navbar