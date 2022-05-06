import React from "react";

// TODO: next imports
import Image from "next/image";

// TODO: import components
import Card from "./Card";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
