import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const HowToGetPunkSection = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Get a crypto wallet",
      desc: "Download and install a Chrome browser plugin for your crypto wallet. This will allow websites (that you authorise) access to your Ethereum account.",
    },
    {
      step: "Step 2",
      title: "Buy some Ethereum",
      desc: "If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.",
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
          <div key={i} className="relative flex flex-row items-start">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
                <div className="z-10 w-8 h-8 flex items-center justify-center rounded-full bg-transparent border-white border text-white text-sm mt-2 -mb-px">
                    {i + 1}
                </div>
                {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white"></div>
                )}
            </div>


            {/* Step content */}
            <Card className="flex-1 border bg-transparent border-none shadow-sm py-0">
              <CardHeader className="pt-1">
                <CardTitle className="text-xl text-white">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToGetPunkSection;
