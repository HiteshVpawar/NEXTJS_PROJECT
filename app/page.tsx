'use client'
import Link from 'next/link'
import { Inter } from 'next/font/google';

// import Navb from './navbar/Navb'

 const inter=Inter({subsets:["latin"],weight:"900"})
const style=({style:"italic",weight:"900"})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between home">
    <div className=''>
         {/* <Navb/> */}
         {/* <Navb/> */}
  <div className={style.style}><div className='dash'> <Link href={"/register"}><h4>go To Dashboard</h4></Link></div></div>
  <div className={inter.className}><div > <Link href={"/register"}><h4>go To Dashboard</h4></Link></div></div>
      
    </div>
    </main>
  )
}
