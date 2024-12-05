
import Link from "next/link"
import { Button } from "../ui/button"
// import ProfileButton from "../ProfileButton"
// import NoticationButton from "../NoticationButton"
import { NavigationList } from "./NavigationMenu"
// import Image from "next/image"

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
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-[999999]">
        <div className="container">
            <div className="relative   flex h-16 items-center gap-2  w-full">

                <div className="">
                    <Link href="/">
                        
                            <img src="/logob.png" alt="logo" className="h-4 w-28" /> 
                            {/* <Image src="/logob.png" alt="logo" width={100} height={100} /> */}
                    </Link>
                </div>
               
               <div className=" w-full">
               <NavigationList />
               </div>

                <div className="flex items-center space-x-2 ml-auto">
                   

                    <Button size={'sm'} variant="ghost" asChild>
                        <Link href="/login" className=" font-cormoratGaramond  text-[20px]">Log in</Link>
                    </Button>
                    <Button size={'sm'} variant="secondary" asChild>
                        <Link href="/register" className=" text-white font-cormoratGaramond   text-[20px]">Get started</Link>
                    </Button>
                </div>
              
            </div>
        </div>
    </header>
  )
}

export default Navbar