"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

const FAQSection = () => {
  const faqs = [
    {
      id: "reui-1",
      q: "Where are the images for the punks stored?",
      a: "When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash ...",
    },
    {
      id: "reui-2",
      q: "Are the punks an ERC-721 token?",
      a: "No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract ...",
    },
    {
      id: "reui-3",
      q: "Where does the market data on this site come from?",
      a: "The prices, bids and sales you see on this site are loaded from the Cryptopunks contract ...",
    },
    {
      id: "reui-4",
      q: "Do you charge any fees for transactions?",
      a: "No. We charge no fees for Cryptopunks transacted through the built-in market ...",
    },
  ]

  return (
    <div className="min-h-1/2 w-full text-white px-8 py-16 bg-[#101111] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-7xl">Details and FAQ</h2>

      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-[#565656]"
            >
              {/* trigger */}
              <AccordionTrigger className="flex items-center justify-between text-white text-xl text-start hover:bg-white/5 rounded-lg px-3 py-6 transition">
                {faq.q}
              </AccordionTrigger>

              {/* content + animasi */}
              <AccordionContent asChild>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="px-3 pb-4 text-white/80 text-base"
                  >
                    {faq.a}
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQSection
