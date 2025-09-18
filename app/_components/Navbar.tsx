"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaDiscord, FaTwitter } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#101111]/95 backdrop-blur-md rounded-b-4xl">
      <div className="max-w-7xl mx-auto py-4 pb-6 px-8 flex justify-between items-center">
        {/* Logo */}
        <Image src="/landing-page/Icon.svg" width={40} height={30} alt="Icon" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center flex-row space-x-6 text-white">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <HiMenu className="text-white" size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-[#101111] z-50 flex flex-col"
          >
            <div className="flex justify-between items-center px-8 pt-6 bg-[#101111] backdrop-blur-md">
              <Image src="/landing-page/Icon.svg" width={40} height={30} alt="Icon" />
              <button onClick={() => setOpen(false)}>
                <HiX className="text-white" size={32} />
              </button>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center space-y-8 flex-1 text-white text-2xl bg-[#101111] backdrop-blur-md py-8 rounded-b-4xl"
            >
              <Link href="#about" onClick={() => setOpen(false)}>About</Link>
              <Link href="#collections" onClick={() => setOpen(false)}>Collection</Link>
              <Link href="#faq" onClick={() => setOpen(false)}>FAQs</Link>
              <Button
                className="bg-[#638596]/50 hover:bg-[#638596]/75 text-[#C4EBFF] rounded-full px-6 py-3"
                size="lg"
              >
                Connect Wallet
              </Button>
              <div className="flex gap-6">
                <FaTwitter size={28} className="cursor-pointer" />
                <FaDiscord size={28} className="cursor-pointer" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
