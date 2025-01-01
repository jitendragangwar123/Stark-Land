import InvestorPortfolio from "../components/InvestorPortfolio/InvestorPortfolio";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default async function Page() {
  return (
    <div className="">
      <Header />
      <InvestorPortfolio />
      <div className="relative z-0">
        <Footer />
      </div>
    </div>
  );
}