import axios from "axios";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface addressType {
  ip: string;
  country: string;
  city: string;
  timezone: string;
}

const AddressTracker = () => {
  const [address, setAddress] = useState<addressType | null>(null);
  const [ipAddress, setIpAddress] = useState("");

  const fetchAddress = async (ipAddress: string) => {
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
    setAddress(response.data);
  };

  return (
    <div>
      <div className="bg-pattern h-[40vh] justify-center items-center m-auto flex flex-col">
        <h1 className="text-3xl m-5 font-bold  text-white">
          IP Address Tracker
        </h1>
        <div className="w-[600px] justify-center flex shadow-lg rounded-md">
          <input
            type="string"
            placeholder="Search for any IP address or domain"
            className="p-2 pl-4 w-full rounded-l-md"
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button
            onClick={() => fetchAddress(ipAddress)}
            className="bg-black text-white rounded-r-md p-2"
          >
            <FaAngleRight />
          </button>
        </div>

        <div className="flex absolute bottom-10 translate-y-[-350%]  justify-center items-center m-auto shadow-xl  bg-white rounded-lg w-[80vh] h-32">
        {address && (
          <>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">ip address</span>{" "}
              <span className="font-bold text-2xl">{address.ip}</span>
            </p>
            <span className="h-16 w-0.5 bg-gray-400"></span>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">Country</span>{" "}
              <span className="font-bold text-2xl">{address.country}</span>
            </p>
            <span className="h-16 w-0.5 bg-gray-400"></span>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">City</span>{" "}
              <span className="font-bold text-2xl">{address.city}</span>
            </p>
            <span className="h-16 w-0.5 bg-gray-400"></span>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">timezone</span>{" "}
              <span className="font-bold text-2xl">{address.timezone}</span>
            </p>
          </>
        )}
        </div>
      </div>
      
      
    </div>
  );
};

export default AddressTracker;
