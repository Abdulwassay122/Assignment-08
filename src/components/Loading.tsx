import React from 'react'
import loading from './assets/three-11928_256.gif'
import Image from 'next/image'
export default function Loading() {
  return (
    <div className='flex items-center justify-center'>
      <Image src={loading} alt="" />
    </div>
  )
}
