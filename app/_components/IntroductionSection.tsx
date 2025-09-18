"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -50, 
    transition: { duration: 0.4, ease: "easeIn" } 
  }
}

const IntroductionSection = () => {
  return (
    <AnimatePresence mode="wait">
      <div
        className="w-full px-6 sm:px-8 py-16 flex flex-col items-center bg-[#101111] rounded-b-4xl"
      >
        {/* container max-w */}
        <div className="w-full max-w-7xl flex flex-col gap-16">
          {/* Header */}
          <motion.div
            className="w-full flex flex-col lg:flex-row items-start justify-between gap-8"
            variants={fadeUp}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-7xl"
              variants={fadeUp}
            >
              Meet the Punks
            </motion.h2>
            <motion.div
              className="flex flex-col max-w-xl"
              variants={fadeUp}
            >
              <p className="text-sm md:text-base lg:text-xl">
                The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are
                punky-looking guys and girls, but there are a few rarer types mixed in: Apes,
                Zombies and even the odd Alien. Every punk has their own profile page that shows
                their attributes as well as their ownership/for-sale status.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="rounded-full bg-white text-[#101111] hover:bg-white/75" size="lg">
                  Buy a Punk
                </Button>
                <Button
                  className="border-[#565656] rounded-full border bg-transparent"
                  size="lg"
                >
                  View full collection
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Cards + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 w-full">
            <motion.div
              className="flex flex-col gap-3 w-full"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              <Card className="bg-[#638596] border-none">
                <CardContent>
                  <CardDescription className="text-white lg:text-lg">
                    Punks with a blue background are not for sale and have no current bids. 
                    <span className="hidden lg:block">
                      {" "}This means the owner has chosen to hold them, making them rarer in circulation.
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-transparent border-[#565656] border w-full">
                <CardContent>
                  <CardDescription className="text-white lg:text-lg">
                    Punks with a red background are available for sale by their owner. 
                    <span className="hidden lg:block">
                      {" "}You can directly purchase these punks at the listed price in the marketplace.
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-transparent border-[#565656] border w-full">
                <CardContent>
                  <CardDescription className="text-white lg:text-lg">
                    Punks with a purple background have an active bid on them. 
                    <span className="hidden lg:block">
                      {" "}This indicates that buyers are actively competing to acquire them.
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/intro/Image.png"
                alt="Image"
                width={634}
                height={634}
                className="w-full h-auto max-w-md md:max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default IntroductionSection
