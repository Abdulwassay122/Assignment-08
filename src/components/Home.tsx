import React from 'react'

const Home = () => {
  return (
    <section className='px-[400px] flex-col gap-16 bg-[url(https://cdn.pixabay.com/photo/2024/05/16/20/20/digital-8766937_960_720.png)] flex items-center justify-center bg-opacity-90 h-[500px] bg-no-repeat bg-cover bg-center'>
        <h1 className='text-white text-center text-[60px] font-[900] font-roboto tracking-wide'>Stay Ahead with Smarter Tech Insights.</h1>
        <input className='w-full h-16 rounded-full px-11 ' type="text" placeholder='Search for articles, guides, blogs, or news.' name="" id="" />
    </section>
  )
}

export default Home
