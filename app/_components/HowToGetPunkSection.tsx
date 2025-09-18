"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HowToGetPunkSection = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Get a crypto wallet",
      desc: "Download and install a Chrome browser plugin for your crypto wallet. This will allow websites (that you authorise) access to your Ethereum account.",
      image: "/icons/MetaMask.svg"
    },
    {
      step: "Step 2",
      title: "Buy some Ethereum",
      desc: "If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.",
      image: "/icons/ETH.svg"
    },
    {
      step: "Step 3",
      title: "Start bidding, buying and selling",
      desc: "Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.",
    },
  ];

  return (
    <div className="min-h-1/2 w-full text-white bg-[#101111] rounded-t-4xl px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-7xl">
        How do I get a punk?
      </h2>

      <div className="grid grid-rows-3 gap-6 w-full">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="relative flex flex-row items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <motion.div
                className="z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white text-white text-sm mt-2 -mb-px"
                whileHover={{ scale: 1.2, backgroundColor: "#ffffff20" }}
              >
                {i + 1}
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  className="w-px flex-1 bg-white"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.3 }}
                />
              )}
            </div>

            {/* Step content */}
            <Card className="flex-1 border bg-transparent border-none shadow-sm py-0">
              <CardHeader className="pt-1 flex flex-col gap-3">
                {s.image && (
                  <Image 
                    src={s.image} 
                    width={56} 
                    height={56} 
                    alt={s.title} 
                    className="" 
                  />
                )}
                <CardTitle className="text-xl text-white ">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                <p className="text-white/75">{s.desc}</p>

                {i === 0 && (
                  <Button
                    className="mt-4 rounded-full bg-transparent border-[#565656] border text-white hover:bg-white/10"
                    size="lg"
                  >
                    Download MetaMask
                  </Button>
                )}
              </CardContent>
            </Card>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowToGetPunkSection;
