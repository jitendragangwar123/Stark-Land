"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";
import { useAccount,useContractRead } from "@starknet-react/core";

const ApproveAndDepositUSDC = () => {
  const [amount, setAmount] = useState("");
  const [isDepositing, setIsDepositing] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const { account, isConnected } = useAccount();


  const ApproveUSDCTokens = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet!");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      toast.error("Please enter a valid amount!");
      return;
    }

    try {
      setIsApproving(true);
     
    } catch (error) {
      toast.error("Tokens Approval failed!");
      setIsApproving(false);
    }
  };

  const DepositUSDCTokens = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet!");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      toast.error("Please enter a valid amount!");
      return;
    }

    try {
      setIsDepositing(true);
     
    } catch (error) {
      toast.error("Tokens Deposit failed!");
      setIsDepositing(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-blue-400 dark:from-purple-600 dark:to-blue-800">
       <div className="relative max-w-3xl w-full font-serif mx-auto p-8 mt-[100px] mb-[40px] bg-gray-300 dark:bg-gray-800 bg-opacity-95 rounded-xl shadow-xl">
        {isConnected ? (
          <>
            <h1 className="text-3xl font-semibold text-center dark:text-gray-300 text-gray-700 mb-6">
              Deposit StarkLand USDC Token
            </h1>
            <div className="w-full max-w-md mx-auto">
              <div className="flex items-center border border-gray-300 p-2 rounded-lg mb-4 bg-gray-50">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount to deposit"
                  className="flex-grow text-gray-800 bg-transparent p-2 rounded-lg focus:outline-none"
                />
              </div>

              <button
                onClick={ApproveUSDCTokens}
                className="w-full px-4 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none font-semibold text-lg"
                // disabled={
                //   isPendingApprove || isConfirmingApprove || isApproving
                // }
              >
                {/* {isPendingApprove
                  ? "Approving..."
                  : isConfirmingApprove
                  ? "Waiting for confirmation..."
                  : "Approve"} */}
              </button>
{/* 
              {isConfirmedApprove && (
                <div className="mt-4 text-center text-green-600">
                  Tokens Approved successfully! Transaction confirmed.
                </div>
              )}

              {isFailedApprove && (
                <div className="mt-4 text-center text-red-600">
                  Tokens Approval failed! Please try again.
                </div>
              )} */}

              <button
                onClick={DepositUSDCTokens}
                // className={`w-full px-4 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none font-semibold text-lg ${
                //   !isConfirmedApprove ? "opacity-50 cursor-not-allowed" : ""
                // }`}
                // disabled={
                //   !isConfirmedApprove ||
                //   isPendingDeposit ||
                //   isConfirmingDeposit ||
                //   isDepositing
                // }
              >
                {/* {isPendingDeposit
                  ? "Depositing..."
                  : isConfirmingDeposit
                  ? "Waiting for confirmation..."
                  : "Deposit"} */}
              </button>

              {/* {isConfirmedDeposit && (
                <div className="mt-4 text-center text-green-600">
                  Tokens Deposited successfully! Transaction confirmed.
                </div>
              )}

              {isFailedDeposit && (
                <div className="mt-4 text-center text-red-600">
                  Tokens Deposit failed! Please try again.
                </div>
              )} */}
            </div>
          </>
        ) : (
            <div className="text-center text-2xl font-bold text-purple-400 dark:text-purple-600">
            Please Connect Your Wallet To Approve and Deposit The StarkLand USDC
            Token
          </div>
        )}
      </div>
    </div>
  );
};

export default ApproveAndDepositUSDC;