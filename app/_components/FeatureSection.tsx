"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Mashable",
    desc: "This ethereum-based project could change how we think about digital art",
    link: "/",
  },
  {
    title: "Mashable",
    desc: "CryptoKitties, CryptoPunks and the birth of a cottage industry",
    link: "/",
  },
  {
    title: "Mashable",
    desc: "‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT",
    link: "/",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-full min-h-1/2 bg-[#101111] text-white flex flex-col items-center justify-center px-8 py-16">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured In
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 max-w-5xl">
        {articles.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="transition-transform"
          >
            <Card className="border h-full border-[#565656] bg-transparent text-white rounded-3xl shadow-lg hover:shadow-[#ffffff22] hover:border-white/40 transition-all duration-300">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                <CardDescription className="text-white/80">
                  {item.desc}
                </CardDescription>
              </CardContent>
              <CardFooter className="border-t border-[#565656]">
                <Link
                  className="w-full justify-between items-center flex group"
                  href={item.link}
                >
                  <p className="relative">
                    Read Article
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
                  </p>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
