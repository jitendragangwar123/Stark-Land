import DepositAuraUSDC from "../components/DepositUSDC/DepositUSDC";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default async function Page() {
  return (
    <div className="">
      <Header />
      <DepositAuraUSDC />
      <div className="relative z-0">
        <Footer />
      </div>
    </div>
  );
}