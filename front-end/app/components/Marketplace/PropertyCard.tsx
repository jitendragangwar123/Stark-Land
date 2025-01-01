"use client";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
  status: string;
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
  status,
  property_type,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);



  const handleViewDetails = async (title: string) => {
    if (status === "sold out") {
      toast.error("This property is sold out and cannot be viewed.");
      return;
    }

    setLoading(true);
    try {
      // Navigate to the details page
      await router.push(`/market-place/${encodeURIComponent(title)}`);
    } catch (error) {
      console.error("Navigation error:", error);
      toast.error("Failed to navigate to property details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm rounded-lg mt-5 mb-10 ml-5 font-serif overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-xl border-2 border-gray-300 ">
      {images.length > 0 && (
        <img
          className="w-full h-48 object-cover"
          src={images[0]}
          alt="Property"
        />
      )}
      <div className="p-2">
        <div className="flex items-center mb-2">
          <span className="font-bold text-2xl">{title}</span>
        </div>
        <div className="flex items-center mb-4 text-gray-400">
          <FaMapMarkerAlt className="mr-2" />
          <span>{`${location.address}, ${location.city}, ${location.state}, ${location.country}`}</span>
        </div>
        <p className="text-gray-500 text-base mb-4">{desc}</p>
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-gray-400">Price</span>
          </div>
          <div>
            <span className="text-gray-400">Total Supply</span>
          </div>
          <div>
            <span className="text-gray-400">APY</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center justify-between">
            <FaDollarSign className="text-green-600" />
            <span className="font-bold text-xl">{total_price}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-xl">{no_of_tokens}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-xl">{apy}%</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => handleViewDetails(title)}
            className={`px-4 py-2 w-full rounded-md font-medium ${loading ? "bg-gray-400 cursor-not-allowed" : "dark:bg-blue-500 dark:hover:bg-blue-600 bg-blue-500 hover:bg-blue-600"
              } text-white`}
            disabled={loading}
          >
            {loading ? "Loading..." : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

const PropertyGallery: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>("");
  const [properties, setProperties] = useState<PropertyCardProps[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/get-property-details"
        );
        if (!response.ok) throw new Error("Failed to fetch property data");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  const filteredProperties = properties.filter((property) => {
    return !selectedRadio || property.status === selectedRadio;
  });

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-start mt-10 mb-5 space-y-4 md:space-y-0 md:space-x-10">
        <div className="flex flex-row ml-10 gap-4">
          <div className="flex items-center z-0">
            <input
              type="radio"
              id="available"
              name="radioGroup"
              value="available"
              checked={selectedRadio === "available"}
              onChange={handleRadioChange}
              className="mr-2 accent-blue-500"
            />
            <label
              htmlFor="available"
              className="text-gray-700 text-lg font-serif dark:text-gray-300"
            >
              Available
            </label>
          </div>
          <div className="flex items-center z-0">
            <input
              type="radio"
              id="sold-out"
              name="radioGroup"
              value="sold out"
              checked={selectedRadio === "sold out"}
              onChange={handleRadioChange}
              className="mr-2 accent-blue-500"
            />
            <label
              htmlFor="sold-out"
              className="text-gray-700 text-lg font-serif dark:text-gray-300"
            >
              Sold Out
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-4">
        {filteredProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;