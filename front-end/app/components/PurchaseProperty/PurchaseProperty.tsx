"use client";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

type Location = {
  address: string;
  city: string;
  state: string;
  country: string;
};

type PropertyCardProps = {
  title: string;
  desc: string;
  total_price: string;
  images: string[];
  location: Location;
  token_name: string;
  no_of_tokens: string;
  apy: string;
  property_type: string;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  desc,
  total_price,
  images,
  location,
  token_name,
  no_of_tokens,
  apy,
  property_type,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 0 && setQuantity(quantity - 1);

  const handleInvestment = async () => {
    try {
      setIsLoading(true);

      if (quantity <= 0) {
        toast.error("Amount should be greater than Zero!");
        setIsLoading(false);
        return;
      }

      toast.loading("Wait for Transactions...");

      const status = 200;
      if (status === 200) {
        const storedTransactionsData = await fetch(
          "https://stark-lands-back-end.vercel.app/store-transactions-data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              txnHash: "txnHash",
              investorAddress: "receiverPublicKey",
              tokenAmount: quantity,
              diamAmount: (quantity * Number(total_price)).toString(),
              action: "Asset Bought",
              url: `https://sepolia.etherscan.io/tx/${"txnHash"}`,
            }),
          }
        );

        await storedTransactionsData.json();
        toast.dismiss();
        toast.success("Investment successful!");
        setQuantity(0);
      } else {
        toast.dismiss();
        toast.error("Payment transaction failed");
      }
      setIsLoading(false);
    } catch (error) {
      toast.dismiss();
      toast.error("Error funding account.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row font-serif items-stretch gap-4 p-12 mt-14 text-white rounded-lg">
      <div className="lg:w-2/3 flex-shrink-0 flex items-center justify-center z-0">
        <Image
          src={images[0]}
          alt="Property"
          width={800}
          height={600}
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>

      <div className="lg:w-1/3 flex flex-col gap-4 border-2 border-gray-300 dark:bg-gray-800 bg-white p-4 rounded-lg z-0">
        <h1 className="text-3xl font-bold dark:text-gray-200 text-gray-600">{title}</h1>
        <p className="text-xl dark:text-gray-200 text-gray-600">{desc}</p>
        <div className="flex items-center dark:text-gray-200 text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          <span>{`${location.address}, ${location.city}, ${location.state}, ${location.country}`}</span>
        </div>
        <hr className="my-2 border-gray-600" />

        <div className="text-lg">
          <div className="flex justify-between">
            <span className="font-semibold dark:text-gray-200 text-gray-600">Property Type:</span>
            <span className="dark:text-gray-200 text-gray-600">{property_type}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold dark:text-gray-200 text-gray-600">Token Name:</span>
            <span className="dark:text-gray-200 text-gray-600">{token_name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold dark:text-gray-200 text-gray-600">Token Price:</span>
            <span className="dark:text-gray-200 text-gray-600">${total_price}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold dark:text-gray-200 text-gray-600">Total Supply:</span>
            <span className="dark:text-gray-200 text-gray-600">{no_of_tokens}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold dark:text-gray-200 text-gray-600">APY:</span>
            <span className="dark:text-gray-200 text-gray-600">{apy}%</span>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="flex justify-between text-lg items-center">
          <span className="font-semibold dark:text-gray-200 text-gray-600">Token Quantity:</span>
          <div className="flex items-center">
            <button
              className="px-2 py-1 bg-red-500 text-white rounded-l-lg hover:bg-red-700"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="px-4 py-1 dark:text-gray-200 text-gray-600">{quantity}</span>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded-r-lg hover:bg-green-700"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold dark:text-gray-200 text-gray-600">Total Cost:</span>
          <span className="dark:text-gray-200 text-gray-600">{quantity * Number(total_price)} USDC</span>
        </div>
        <div className="mt-4">
          <button
            className="w-full  text-white font-bold py-2 rounded-lg bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
            onClick={handleInvestment}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Invest Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

const PropertyDetails: React.FC = () => {
  const { title } = useParams();
  const [property, setProperty] = useState<PropertyCardProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      if (title) {
        try {
          const response = await fetch(
            `https://stark-lands-back-end.vercel.app/get-property-details-by-title?title=${title}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setProperty(data[0]);
          }
        } catch (error) {
          console.error("Failed to fetch property details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>No property details found.</div>;
  }

  return <PropertyCard {...property} />;
};

export default PropertyDetails;