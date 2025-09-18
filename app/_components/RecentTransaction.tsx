import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentTransactionSection = () => {
  const recentTransactions = [
    {
      id: "#5822",
      text: "New bid of Ξ 4200 ETH",
      date: "Jan 23, 2021",
      src: "/sales/Frame (1).png",
    },
    {
      id: "#3100",
      text: "New bid of Ξ 3800 ETH",
      date: "Mar 11, 2021",
      src: "/sales/Frame (2).png",
    },
    {
      id: "#7804",
      text: "New bid of Ξ 5000 ETH",
      date: "Mar 15, 2021",
      src: "/sales/Frame (3).png",
    },
    {
      id: "#9421",
      text: "New bid of Ξ 2100 ETH",
      date: "Apr 02, 2021",
      src: "/sales/Frame (4).png",
    },
    {
      id: "#1132",
      text: "New bid of Ξ 2750 ETH",
      date: "May 19, 2021",
      src: "/sales/Frame (5).png",
    },
    {
      id: "#6750",
      text: "New bid of Ξ 1950 ETH",
      date: "Jun 05, 2021",
      src: "/sales/Frame (6).png",
    },
    {
      id: "#8899",
      text: "New bid of Ξ 3200 ETH",
      date: "Jul 12, 2021",
      src: "/sales/Frame (7).png",
    },
    {
      id: "#4207",
      text: "New bid of Ξ 2800 ETH",
      date: "Aug 01, 2021",
      src: "/sales/Frame (8).png",
    },
  ];

  return (
    <div className="min-h-1/2 w-full text-[#101111] px-8 py-16 bg-white flex flex-col gap-10 items-start justify-center">
      {/* Header */}
      <div className='w-full flex flex-col gap-5'>
        <div className="flex flex-row w-full justify-between items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl">Recent Transactions</h2>
            <Button
            asChild
            className="bg-white rounded-full border border-[#565656] text-[#101111] hover:bg-white/75"
            size="lg"
            >
            <Link href={"/"}>
                View all
            </Link>
            </Button>
        </div>
        <div>
            <p>Updated 25 seconds ago</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="pt-4 md:pt-8 lg:pt-12 w-full">
        <Carousel className="w-full mx-auto">
          <CarouselContent>
            {recentTransactions.map((sale, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <Card className="p-0 flex flex-col border-none shadow-none">
                  <CardContent className="p-0 flex justify-center">
                    <Image
                      src={sale.src}
                      alt={`Sale ${sale.id}`}
                      width={430}
                      height={430}
                      className="object-contain"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start justify-start text-sm gap-1 px-2">
                    <p className="font-semibold">{sale.id}</p>
                    <p className='text-xs'>{sale.text}</p>
                    <p className="text-xs text-[#8c8c8c]">{sale.date}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom tombol di bawah */}
          <div className="flex justify-start items-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0 left-0 border border-[#565656] rounded-full w-10 h-10" />
            <CarouselNext className="static translate-y-0 left-0 border border-[#565656] rounded-full w-10 h-10" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default RecentTransactionSection
