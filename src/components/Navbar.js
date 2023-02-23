// import { Container, Navbar as NavbarBs, Nav} from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faCartShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import Button from "./Button";
import { useState } from "react";


export function Navbar() {

    let Links = [
        { name: "HOME", link: '/' },
        { name: "ABOUT", link: '#about-us' },
        { name: "CATALOGUE", link: '#catalogue' },
        { name: "SERVICES", link: '/' },
        { name: "CONTACT", link: '#footer' },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div sticky='top' className='shadow-lg w-full sticky top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span>
                        <img src='./images/awesometransparent.png' alt='awesome fresh logo' className='h-[120px] w-[120px]' />
                    </span>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-30 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`} style={{ fontFamily: 'sans-serif' }}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <a href='/'><Button>Make order</Button></a>
                </ul>
            </div>
        </div>
    )
}