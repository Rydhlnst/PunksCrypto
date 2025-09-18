import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaTwitter  } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference backdrop-blur-xs">
        <div className="max-w-7xl mx-auto py-4 pb-6 px-8 flex justify-between items-center">
            <Image src="/landing-page/Icon.svg" width={40} height={30} alt="Icon" />
            <div className="flex items-center flex-row space-x-6 text-white">
            <Link href="#about">About</Link>
            <Link href="#collections">Collection</Link>
            <Link href="#faq">FAQs</Link>
            <Button className="bg-[#638596]/50 hover:bg-[#638596]/75 text-[#C4EBFF] rounded-full" size="lg">
                Connect Wallet
            </Button>
            <div className="flex flex-row gap-3">
                <FaTwitter size={20} className="cursor-pointer" />
                <FaDiscord size={20} className="cursor-pointer" />
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
