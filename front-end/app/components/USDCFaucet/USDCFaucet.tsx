"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";
import { useAccount,useContractRead } from "@starknet-react/core";

const MintAuraUSDC = () => {
  const [addressUSDC, setAddressUSDC] = useState(
    "0xf30717833D5EEBba378eC9cb2907de263F6C71d7"
  );
  const [copied, setCopied] = useState(false);
  const { account, isConnected } = useAccount();

  const handleCopy = () => {
    navigator.clipboard.writeText(addressUSDC);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    toast.success(
      "StarkLand USDC token address copied, Please import this token in your wallet!"
    );
  };

  const mintToken = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet!");
      return;
    }

    try {
     
    } catch (error) {
      toast.error("Minting failed!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-blue-400 dark:from-purple-600 dark:to-blue-800">
     <div className="relative max-w-3xl w-full font-serif mx-auto p-8 mt-[100px] mb-[40px] bg-gray-300 dark:bg-gray-800 bg-opacity-95 rounded-xl shadow-xl">
        {isConnected ? (
          <>
            <h1 className="text-3xl font-semibold text-center dark:text-gray-300 text-gray-700 mb-6">
              Mint StarkLand USDC Token
            </h1>
            <div className="w-full max-w-md mx-auto">
              <div className="flex items-center border border-gray-300 p-2 rounded-lg mb-4 bg-gray-50">
                <input
                  type="text"
                  value={addressUSDC}
                  readOnly
                  className="flex-grow text-gray-800 bg-transparent p-2 rounded-lg focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className="ml-2 px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none flex items-center"
                >
                  {copied ? "Copied!" : <FiCopy className="text-white" />}
                </button>
              </div>

              <button
                onClick={mintToken}
                className="w-full px-4 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none font-semibold text-lg"
            //     disabled={isMinting || isConfirming}
             >
            {/* //     {isMinting
            //       ? "Minting..."
            //       : isConfirming
            //       ? "Waiting for confirmation..."
            //       : "Mint Token"} */}
              </button>

              {/* {isConfirmed && (
                <div className="mt-4 text-center text-green-600">
                  Minting successful! Transaction confirmed.
                </div>
              )} */}

              {/* {isFailed && (
                <div className="mt-4 text-center text-red-600">
                  Minting failed! Please try again.
                </div>
              )} */}
            </div>
          </>
        ) : (
          <div className="text-center text-2xl font-bold text-purple-400 dark:text-purple-600">
            Please Connect Your Wallet To Mint The StarkLand USDC Token
          </div>
        )}
      </div>
    </div>
  );
};

export default MintAuraUSDC;