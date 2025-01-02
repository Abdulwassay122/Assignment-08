import React from 'react'
import facebool from './assets/facebook-svgrepo-com.svg'
import instagram from './assets/instagram-svgrepo-com.svg'
import linkdun from './assets/linkedin-svgrepo-com.svg'
import github from './assets/github-142-svgrepo-com.svg'
import portfolio from './assets/portfolio-svgrepo-com.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-[#2B2B2B] pt-10 text-white flex flex-col gap-6 items-center justify-between font-poppins'>
      <div className='flex flex-row  '>
            <a target='_balnk' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-12 mx-2' src={facebool.src} alt="" /></a>
            <a target='_balnk' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-12 mx-2' src={linkdun.src} alt="" /></a>
            <a target='_balnk' href="https://www.instagram.com/wassay122/"><img className='h-12 mx-2' src={instagram.src} alt="" /></a>
            <a target='_balnk' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-12 mx-2' src={github.src} alt="" /></a>
            <a target='_balnk' href="https://porfolio-lac-seven.vercel.app/"><img className='h-12 mx-2' src={portfolio.src} alt="" /></a>
        </div>
      <div className='flex flex-col gap-6'>
        <p className='text-[22px] font-semibold text-center font-tech'>TechVerse</p>
        <div className='flex gap-4'>
          <Link href="/blogs-items"><p className='text-[20px] font-[500]'>Blogs</p></Link>
          <Link href="/"><p className='text-[20px] font-[500]'>Contact</p></Link>
          <Link href="/generative-ai"><p className='text-[20px] font-[500]'>Generative AI</p></Link>
          <Link href="/agentic-ai"><p className='text-[20px] font-[500]'>Agengic AI</p></Link>
          <Link href="/programming"><p className='text-[20px] font-[500]'>Machine Learning</p></Link>
          <Link href="/machine-learning"><p className='text-[20px] font-[500]'>Programming</p></Link>
        </div>
      </div>
      <div>
      </div>
      <div className='bg-[#1b1b1b] w-full flex justify-center py-4'>
        <p className=''>Copyright © 2024 Abdul Wassay</p>
      </div>
      
    </footer>
  )
}
