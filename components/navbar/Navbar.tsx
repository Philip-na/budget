"use client"

import { url } from "inspector"
import Link from "next/link"
import { Button } from "../ui/button"
import ProfileButton from "../ProfileButton"
import NoticationButton from "../NoticationButton"
import { use, useEffect } from "react"

const routes =[
    {
        name: 'Home',
        url: '/'
    },

    {
        name: 'Services',
        url: '/services'
    },

    {
        name: 'Vendor',
        url: '/vendor'
    },
    {
        name: 'Venue',
        url: '/venue'
    },
    {
        name: 'About Us',
        url: '/about'
    },
    {
        name: 'Contact Us',
        url: '/contact'
    },
  
 
  
  
    
]

const Navbar = () => {

  return (
    <header className="   fixed top-0 left-0 w-full z-[999999]">
        <div className="container">
            <div className="relative   flex h-16 items-center justify-between w-full">
               
                <div className="hidden md:flex items-center space-x-6">
                    {routes.map((route) => (
                        <Button size={'sm'} variant="link" key={route.name + route.url } asChild>
                            <Link  href={route.url}  className=" text-white font-cormoratGaramond text-[20px] font-normal  ">{route.name}</Link>
                        </Button>
                    ))}

                </div>

                <div className="flex items-center space-x-2">
                    {/* <NoticationButton />
                    <ProfileButton /> */}

                    <Button size={'sm'} variant="ghost" asChild>
                        <Link href="/login" className=" text-white font-cormoratGaramond  text-[20px]">Log in</Link>
                    </Button>
                    <Button size={'sm'} variant="default" asChild>
                        <Link href="/register" className=" text-white font-cormoratGaramond   text-[20px]">Sign up</Link>
                    </Button>
                </div>
              
            </div>
        </div>
    </header>
  )
}

export default Navbar