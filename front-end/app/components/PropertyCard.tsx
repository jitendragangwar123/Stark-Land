"use client";

import Link from "next/link";

interface PropertyCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  comingSoon?: boolean;
  isActive?: boolean;
  onClick: () => void;
  link?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  description,
  buttonLabel,
  imageUrl,
  comingSoon = false,
  isActive = false,
  onClick,
  link = "#",
}) => {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-10 cursor-pointer transition-transform duration-300 ${
        isActive ? "scale-100" : "scale-95"
      } hover:scale-100`}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg object-cover w-full h-40 mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <Link href={link}>
        <button
          className={`py-2 px-4 rounded ${
            comingSoon
              ? "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-200 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-800 text-white"
          }`}
          disabled={comingSoon}
        >
          {buttonLabel}
        </button>
      </Link>
    </div>
  );
};

export default PropertyCard;
