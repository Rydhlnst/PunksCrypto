import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import FeatureSection from "./_components/FeatureSection";
import IntroductionSection from "./_components/IntroductionSection";

export default function Home() {
  const nftImages = Array.from({ length: 8 }, (_, i) => `/landing-page/nft/Image (${i + 1}).png`);
  return (
    <div className=" min-h-screen text-white">
      <main className="min-h-screen flex flex-col items-center justify- px-4 relative overflow-hidden bg-[#101111]">
        <div className="h-[80vh] flex items-center justify-center ">
          <div className="text-center flex flex-col gap-4.5 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl">The Project that inspired the modern <span className="font-medium">CryptoArt Movement</span></h1>
            <div className="max-w-md md:max-w-xl lg:max-w-2xl">
              <p className="text-lg lg:text-xl">
                10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.
              </p>
            </div>
            <Button className="bg-white rounded-full text-lg py-6 px-8 text-[#101111] hover:bg-white/75" size={"lg"}>
              Mint <span className="font-bold">now</span>
            </Button>
          </div>
        </div>
        <div className="w-full absolute bottom-10 overflow-hidden">
            <Marquee pauseOnHover className="gap-6">
              {nftImages.map((src, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`NFT ${i + 1}`}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
      </main>
      <FeatureSection/>
      <IntroductionSection/>
    </div>
  );
}
