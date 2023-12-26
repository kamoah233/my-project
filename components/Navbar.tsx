"use client" // this is a client-side component
import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill, RiSunLine } from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"
/* import { useTheme} */

interface NavItem {
    label:string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
    /* {
        label: "Contact",
        page: "contact"
    }, */
]

const Navbar = () => {
    const {systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
    <div className="justify-between md:items-center md:flex">
        <div>
        </div>

        <div>
            <div className="flex items-center justify-between py-3">
                <Link to="home"></Link>
            <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">Kofi Amoah</h2>
            </div>
            <div className="md:hidden">
                <button onClick={()=>setNavbar(!navbar)}>
                    {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
            </div>
            </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"}`}>

        
        {/* <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>
        })}
        {currentTheme === "dark" ? (
            <button onClick={()=>setTheme("Light")} 
            className="bg-slate-100 p-2 rounded-xl">
                <RiSunLine  size={25} color="black"/>
            </button >
        ): (
            <button onClick={()=>setTheme("Dark")}
             className="bg-slate-100 p-2 rounded-xl">
                <RiMoonFill  size={25} />
            </button>
        )}
        </div>   */}
        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:y-0" >
            {NAV_ITEMS.map((item, idx)=> {
                return (
                    <Link 
                    key={idx}
                    to={item.page}
                    className={
                        "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={()=>setNavbar(!navbar)}
                    style={{ margin: "0px 10px"}}
                    
                    >{item.label}</Link>
                )
})}
{/* dark mode button */}
        {currentTheme === "dark" ? (
            // <button onClick={()=>setTheme("Light")} 
            <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="bg-slate-100 p-2 rounded-xl ml-4">
                <RiSunLine  size={25} color="black"/>
            </button >
        ): (
            <button onClick={()=>setTheme("dark")}
             className="bg-slate-100 p-2 rounded-xl">
                <RiMoonFill  size={25} />
            </button>
        )
        }
        
        </div>
        </div>
    </div>
</header>
    )
}

export default Navbar;

//q: how do I make the home , about, projects areas on the navbar aligned on the same line?
//a: