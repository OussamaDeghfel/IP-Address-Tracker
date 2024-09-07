import React from "react";
import { addressType } from "./addressTracker";

interface addressDetailsType {
  address: addressType | null;
}

const AddressDetails: React.FC<addressDetailsType> = ({ address }) => {
  return (
    <>
    <div className="z-10 lg:flex lg:h-32 py-18 space-x-4 translate-y-10 border-2 border-red-600 bg-white mt-16 text-center shadow-2xl rounded-3xl justify-center items-center m-auto">
      <p className="flex flex-col p-5 pr-8">
        <span className="text-md text-gray-400">ip address</span>{" "}
        <span className="font-bold text-2xl">{address?.ip}</span>
      </p>
      <span className="hidden lg:block lg:h-16 lg:w-0.5 lg:bg-gray-400"></span>
      <p className="flex flex-col p-5 pr-8">
        <span className="text-md text-gray-400">City</span>{" "}
        <span className="font-bold text-2xl">{address?.city}</span>
      </p>
      <span className="hidden lg:block lg:h-16 lg:w-0.5 lg:bg-gray-400"></span>
      
      <p className="flex flex-col p-5 pr-8">
        <span className="text-md text-gray-400">Country</span>{" "}
        <span className="font-bold text-2xl">{address?.country}</span>
      </p>
      <span className="hidden lg:block lg:h-16 lg:w-0.5 lg:bg-gray-400"></span>
      <p className="flex flex-col p-5 pr-8">
        <span className="text-md text-gray-400">timezone</span>{" "}
        <span className="font-bold text-2xl">{address?.timezone}</span>
      </p>
      </div>
    </>
  );
};

export default AddressDetails;
