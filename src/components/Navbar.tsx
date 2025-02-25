import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import search from './assets/icons8-search.svg'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className='530:h-20 py-4 530:py-0  bg-[#2B2B2B] font-roboto px-10 flex justify-between items-center z-20'>
      <div className='flex 530:flex-row  flex-col  lg:gap-[120px] 530:gap-[30px] gap-4'>
        <Link href="/"><div className='text-[24px] tracking-tight text-white font-tech font-bold'>
            TechVerse
        </div></Link>
        <nav className=''>
            {/* <ul className='flex gap-[60px] text-white text-[18px]'>
                <Link  onClick={()=>setActive('home')} className={`leading-[34px] ${active==='home' ?'border-b-2' : ''} border-white border-solid`} href="/"><li></li></Link>
                <Link  onClick={()=>setActive('blogs')} className={`leading-[34px] ${active==='blogs' ?'border-b-2' : ''} border-white border-solid`} href="/blogs-items"><li></li></Link>
                <Link  onClick={()=>setActive('about')} className={`leading-[34px] ${active==='about' ?'border-b-2' : ''} border-white border-solid`} href=""><li></li></Link>
                <Link  onClick={()=>setActive('contact')} className={`leading-[34px] ${active==='contact' ?'border-b-2' : ''} border-white border-solid`} href=""><li></li></Link>
            </ul> */}
        <NavigationMenu>
  <NavigationMenuList  className='flex lg:gap-[60px] 530:gap-[20px] gap-2 text-white text-[18px]'>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className='text-white'>
    Home
    </NavigationMenuLink>
  </Link>
  <Link href="/blogs" legacyBehavior passHref>
    <NavigationMenuLink className='text-white'>
    Blogs
    </NavigationMenuLink>
  </Link>
  {/* <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className='text-white'>
    About
    </NavigationMenuLink>
  </Link> */}
    <NavigationMenuItem>
      <NavigationMenuTrigger className='bg-[#2B2B2B] relative hover:text-white hover:bg-[#2B2B2B]  text-white'>Catagories</NavigationMenuTrigger>
      <NavigationMenuContent className='flex-col flex items-center bg-[#2b2b2b] justify-center gap-4 py-3 text-white rounded-none  shadow-none '>
        <Link href="/blogs-items/agentic-ai"><NavigationMenuLink className='bg-[#2b2b2b] w-full hover:bg-gray-400 px-4 py-3'>Agentic&nbsp;AI</NavigationMenuLink></Link>
        <Link href="/blogs-items/genrative-ai"><NavigationMenuLink className='bg-[#2b2b2b] w-full hover:bg-gray-400 px-4 py-3'>Generative&nbsp;AI</NavigationMenuLink></Link>
        <Link href="/blogs-items/programming"><NavigationMenuLink className='bg-[#2b2b2b] w-full hover:bg-gray-400 px-4 py-3'>Programming</NavigationMenuLink></Link>
        <Link href="/blogs-items/machine-learning"><NavigationMenuLink className='bg-[#2b2b2b] w-full hover:bg-gray-400 px-4 py-3'>Machine&nbsp;Learning</NavigationMenuLink></Link>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        </nav>
      </div>
        <div className='relative md:block hidden'>
            <input className='h-[38px] w-[200px]  rounded-full px-5 border-none' placeholder='Search' type="text" name="" id="" />
            <Image className='absolute top-[6px] right-4 h-6' src={search} alt="" />
        </div>
    </header>
  )
}

export default Navbar
