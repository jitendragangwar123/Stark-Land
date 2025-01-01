import PropertyCard from "../components/Marketplace/PropertyCard";
import PropertyBanner from "../components/Marketplace/PropertyBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default async function Page() {
 return (
   <div className="bg-gradient-to-b from-purple-200 to-blue-400 dark:from-purple-600 dark:to-blue-800">
     <Header />
     <PropertyBanner />
     <PropertyCard />
     <div className="relative z-0">
       <Footer />
     </div>
   </div>
 );
}