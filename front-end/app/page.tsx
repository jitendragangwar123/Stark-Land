"use client";
import Image from "next/image";
import Header from "~/Header";
import Footer from "~/Footer";
import Link from "next/link";
import GithubIcon from "./svg/GithubIcon";
import UpRightArrowIcon from "./svg/UpRightArrowIcon";
import { useAccount } from "@starknet-react/core";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Features from "./components/Features/Features";
import PropertyCard from "./components/PropertyCard";
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Home() {
  const { account, isConnected } = useAccount();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (!isConnected || !account) {
      toast.error("Connect Your Wallet!");
      return;
    }
    if (isConnected && account) {
      toast.success("Wallet Connected!");
      return;
    }
  }, [isConnected]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="flex min-h-screen flex-col font-serif items-center justify-center pt-12 px-4 bg-gradient-to-b from-purple-200 to-blue-400 dark:from-purple-600 dark:to-blue-800 ">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-16 text-center lg:text-left">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400  dark:from-green-600 dark:to-green-400  animate-bounce transition duration-700 ease-in-out transform hover:scale-105">
              StarkLand
            </h2>
            <p className="text-lg md:text-2xl lg:text-2xl">
              Empowering Investments Through Tokenization of Real World Assets
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/rajeebkm/starklands" legacyBehavior>
                <a className="flex justify-center items-center gap-2 px-4 py-2 text-sm bg-green-600 text-white rounded-md font-medium border-2 border-green-300 shadow-md hover:bg-green-700 hover:shadow-lg active:bg-green-700 active:shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-700 ease-in-out">
                  <span>Welcome to SLS </span>
                  <span>
                    <GithubIcon />
                  </span>
                </a>
              </Link>
              <Link href="/market-place" legacyBehavior>
                <a className="flex justify-center items-center gap-2 px-4 py-2 text-sm bg-white text-black rounded-md font-medium border-2 border-purple-300 shadow-md hover:bg-purple-500 hover:shadow-lg active:bg-white active:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-700 ease-in-out">
                  <span>Start Exploring</span>
                  <span><UpRightArrowIcon /></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center lg:justify-end">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] transition duration-700 ease-in-out transform hover:scale-105"
              src="/stark-lands.png"
              alt="Starknet logo"
              width={600}
              height={150}
              priority
            />
          </div>
        </div>

        <div className="mb-32 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left lg:max-w-8xl group">
          <a
            href="/market-place"
            className="group rounded-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:text-gray-500 dark:hover:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-gray-700 group-hover:animate-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex justify-center items-center gap-2 mb-3 text-2xl font-semibold">Marketplace <UpRightArrowIcon /></h2>
            <p className="text-sm-2 opacity-75 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-200">
              By leveraging the power of blockchain technology, our platform
              enables the fractional ownership of properties, making real estate
              investment more accessible and liquid than ever before.
            </p>
          </a>

          <a
            href="/property-listing"
            className="group rounded-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:text-gray-500 dark:hover:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-gray-700 group-hover:animate-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex justify-center items-center gap-2 mb-3 text-2xl font-semibold">Property Owner <UpRightArrowIcon /></h2>
            <p className="text-sm-2 opacity-75 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-200">
              As a property owner, our platform offers you a unique opportunity
              to list and tokenize your real-estate assets, unlocking new
              revenue streams and expanding your investor base.
            </p>
          </a>

          <a
            href="/market-place"
            className="group rounded-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:text-gray-500 dark:hover:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-gray-700 group-hover:animate-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex justify-center items-center gap-2 mb-3 text-2xl font-semibold">Investor <UpRightArrowIcon /></h2>
            <p className="text-sm-2 opacity-75 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-200">
              Investors can easily buy, sell, and trade property tokens,
              enjoying unparalleled transparency, robust security, and enhanced
              efficiency throughout the entire process.
            </p>
          </a>

          <a
            href="/investor-portfolio"
            className="group rounded-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:text-gray-500 dark:hover:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-gray-700 group-hover:animate-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex justify-center items-center gap-2 mb-3 text-2xl font-semibold">Portfolio <UpRightArrowIcon /></h2>
            <p className="text-sm-2 opacity-75 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-200">
              Investors can effortlessly manage and track their real estate
              investments. Simply tap the portfolio icon on the top bar to
              quickly access the current value of your holdings.
            </p>
          </a>
        </div>

      </div>
      <Features />


      <div className="min-h-screen font-serif items-center justify-center bg-gradient-to-b from-purple-200 to-blue-400 dark:from-purple-600 dark:to-blue-800">
        <div className="container mx-auto pt-20">
          <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
            Invest Across Diverse Asset Classes
          </h1>
          <p className="text-center text-gray-600 text-xl dark:text-gray-300 mb-12">
            StarkLands is your comprehensive investment solution, uniting a spectrum of asset classes within a singular marketplace.
          </p>

          <Slider {...settings}>
            <div>
              <PropertyCard
                title="Real Estate"
                description="Explore a diverse selection of tokenized apartments, villas, and standalone homes, designed to enable effortless and secure transactions."
                buttonLabel="Explore Marketplace"
                imageUrl="/gallery1.jpg"
                comingSoon={false}
                isActive={activeIndex === 0}
                onClick={() => handleCardClick(0)}
                link="/market-place"
              />
            </div>
            <div>
              <PropertyCard
                title="Financial Instruments"
                description="Access a wide range of tokenized financial instruments, including bonds, stocks, and other traditional securities, for seamless and efficient trading."
                buttonLabel="Coming Soon"
                imageUrl="/financial.png"
                comingSoon={true}
                isActive={activeIndex === 1}
                onClick={() => handleCardClick(1)}
                link="#"
              />
            </div>
            <div>
              <PropertyCard
                title="Renewable Energy Infrastructure"
                description="Invest in tokenized renewable energy infrastructure, including solar panels, wind turbines, and hydropower facilities, for a sustainable future."
                buttonLabel="Coming Soon"
                imageUrl="/re-energy.png"
                comingSoon={true}
                isActive={activeIndex === 2}
                onClick={() => handleCardClick(2)}
                link="#"
              />
            </div>
            <div>
              <PropertyCard
                title="Art and Collectibles"
                description="Discover a curated collection of tokenized digital art, paintings, sculptures, and rare collectibles, making art investment accessible and secure."
                buttonLabel="Coming Soon"
                imageUrl="/art-work.png"
                comingSoon={true}
                isActive={activeIndex === 3}
                onClick={() => handleCardClick(3)}
                link="#"
              />
            </div>
          </Slider>
        </div>
      </div>

      <Footer />
    </main>
  );
}
