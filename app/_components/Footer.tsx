import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full text-white bg-[#101111] px-8 py-6 flex flex-col items-center  bottom-0'>
        <div className='justify-between flex flex-col md:flex-row w-full items-center py-16 border-b border-[#565656]'>
            <h2 className='text-xl'>CryptoPunks</h2>
            <div className='flex flex-col items-center justify-center h-full text-center md:flex-row gap-4 my-8 md:my-0'>
                <Link href={"/buy-a-punk"} className='text-white/80 text-sm flex items-center justify-center'>
                    Buy a Punk
                </Link>
                <Link href={"/collection"} className='text-white/80 text-sm flex items-center justify-center'>
                    View Full Collection
                </Link>
            </div>
            <div className='flex flex-row gap-4 mt-4 md:mt-0 text-lg'>
                <FaTwitter/>
                <FaDiscord/>
            </div>
        </div>
        <div className='pt-8 pb-16 flex flex-col-reverse md:flex-row gap-8 items-center justify-center'>
            <p className='text-sm text-white/50 md:mt-0'>&copy; 2025 CryptoPunks. All rights reserved.</p>
            <p className='text-sm text-white/50 md:mt-0'>Privacy Policy</p>
            <p className='text-sm text-white/50 md:mt-0'>Terms of Service</p>
            <p className='text-sm text-white/50 md:mt-0'>Cookie Settings</p>
        </div>
    </footer>
  )
}

export default Footer
