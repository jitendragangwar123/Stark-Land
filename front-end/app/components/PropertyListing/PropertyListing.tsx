"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAccount,useContractRead } from "@starknet-react/core";

type Location = {
  address: string;
  city: string;
  state: string;
  country: string;
};

type PropertyData = {
  title: string;
  desc: string;
  total_price: string;
  images: File[];
  location: Location;
  token_name: string;
  no_of_tokens: string;
  apy: string;
  property_type: string;
};

const ListingProject: React.FC = () => {
  const { account, isConnected } = useAccount();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState<Location>({
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const [tokenName, setTokenName] = useState<string>("");
  const [noOfTokens, setNoOfTokens] = useState<string>("");
  const [apy, setApy] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");

  const router = useRouter();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length !== 1) {
      toast.error("You must upload exactly one image.");
      return;
    }

    setImages(files);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("total_price", totalPrice);
    formData.append("location", JSON.stringify(location));
    formData.append("token_name", tokenName);
    formData.append("no_of_tokens", noOfTokens);
    formData.append("apy", apy);
    formData.append("property_type", propertyType);

    images.forEach((image) => {
      formData.append("images", image);
    });

   
    try {
      const response = await fetch(
        "http://localhost:8000/list-property",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        toast.success("Property listed successfully");
        router.push("/market-place");
      } else {
        toast.error("Error listing property");
        console.error("Error listing property:", await response.json());
      }
    } catch (error) {
      toast.error("Error listing property");
      console.error("Error listing property:", error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-blue-400 dark:from-purple-600 dark:to-blue-800">
      <div className="relative max-w-3xl w-full font-serif mx-auto p-8 mt-[100px] mb-[40px] bg-gray-300 dark:bg-gray-800 bg-opacity-95 rounded-xl shadow-xl">
        {isConnected ? (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-400 dark:text-purple-600">
              List a New Property
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    Property Name
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    Token Price
                  </label>
                  <input
                    type="number"
                    value={totalPrice}
                    onChange={(e) => setTotalPrice(e.target.value)}
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    Token Name
                  </label>
                  <input
                    type="text"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    Number of Tokens
                  </label>
                  <input
                    type="number"
                    value={noOfTokens}
                    onChange={(e) => {
                      const value = Math.max(0, Number(e.target.value));
                      setNoOfTokens(value.toString());
                    }}
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                    min={1}
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    APY
                  </label>
                  <input
                    type="number"
                    value={apy}
                    onChange={(e) => setApy(e.target.value)}
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    Property Type
                  </label>
                  <input
                    type="text"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="mt-1 block w-full h-[100px] bg-gray-100 text-gray-900 rounded-md px-3 py-2 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                  required
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                  Image
                </label>
                <input
                  type="file"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md"
                  required
                />
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Property Image ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg shadow-md"
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 focus:outline-none hover:bg-red-600 transition duration-200 ease-in-out"
                        onClick={() =>
                          setImages(images.filter((_, i) => i !== index))
                        }
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md font-medium ttext-gray-800 dark:text-gray-300">
                    Address
                  </label>
                  <input
                    type="text"
                    value={location.address}
                    onChange={(e) =>
                      setLocation({ ...location, address: e.target.value })
                    }
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    City
                  </label>
                  <input
                    type="text"
                    value={location.city}
                    onChange={(e) =>
                      setLocation({ ...location, city: e.target.value })
                    }
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    State
                  </label>
                  <input
                    type="text"
                    value={location.state}
                    onChange={(e) =>
                      setLocation({ ...location, state: e.target.value })
                    }
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-800 dark:text-gray-300">
                    Country
                  </label>
                  <input
                    type="text"
                    value={location.country}
                    onChange={(e) =>
                      setLocation({ ...location, country: e.target.value })
                    }
                    className="mt-1 block w-full h-[40px] bg-gray-100 text-gray-900 rounded-md px-3 border border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-md transition duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-6 py-3 text-lg font-medium leading-6 text-white bg-blue-400 dark:bg-blue-600 rounded-md shadow-sm dark:hover:bg-blue-800 hover:bg-blue-600 focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                >
                  List Property
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center text-2xl font-bold text-purple-400 dark:text-purple-600">
            Please Connect Your Wallet To List A New Property
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingProject;