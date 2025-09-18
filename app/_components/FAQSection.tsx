import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FAQSection = () => {
  return (
    <div className='min-h-1/2 w-full text-white px-8 py-16 bg-[#101111] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-center'>
      <h2 className="text-4xl md:text-5xl lg:text-7xl">
        Details and FAQ
      </h2>
      <div className='w-full'>
         <Accordion type="single" collapsible indicator="plus" className="w-full">
            <AccordionItem value="reui-1" className='border-y-[#565656] border-y'>
                <AccordionTrigger className='text-white text-xl text-start'>Where are the images for the punks stored?</AccordionTrigger>
                <AccordionContent className='text-white/80 text-base'>When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the composite image of all the punks and embeded it into the contract. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract.Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the announcement blog post.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="reui-2" className='border-b-[#565656]'>
                <AccordionTrigger className='text-white text-xl text-start'>Are the punks an ERC-721 token?</AccordionTrigger>
                <AccordionContent className='text-white/80 text-base'>No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn&apos;t comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since you&apos;re not transferring a simple balance, but need to reference which specific Punk you want to work with.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="reui-3" className='border-b-[#565656]'>
                <AccordionTrigger className='text-white text-xl text-start'>Where does the market data on this site come from?</AccordionTrigger>
                <AccordionContent className='text-white/80 text-base'>The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="reui-4" className='border-b-[#565656]'>
                <AccordionTrigger className='text-white text-xl text-start'>Do you charge any fees for transactions?</AccordionTrigger>
                <AccordionContent className='text-white/80 text-base'>No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas).The contract source and more technical details are available on Github.</AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQSection
