import PropertyListing from "~/PropertyListing/PropertyListing";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function Page() {
  return (
    <div className="">
      <Header/>
      <PropertyListing />
      <Footer/>
    </div> 
  );
}