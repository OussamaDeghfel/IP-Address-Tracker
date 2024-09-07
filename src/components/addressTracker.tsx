import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import MapPlace from "./mapPlace";
import AddressDetails from "./addressDetails";

export interface addressType {
  ip: string;
  country: string;
  city: string;
  timezone: string;
  loc: string;
  lat: string;
  lng: string;
}

const AddressTracker = () => {
  const [address, setAddress] = useState<addressType | null>(null);
  const [ipAddress, setIpAddress] = useState("");
  const fetchAddress = async (ipAddress: string) => {
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
    setAddress(response.data);
  };

  useEffect(() => {
    fetchAddress(ipAddress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const input = e.target as HTMLInputElement;
      fetchAddress(input.value);
      setIpAddress("");
    }
  };

  const location = address?.loc;
  const latitude = location?.split(",")[0];
  const longitude = location?.split(",")[1];

  console.log("lat", latitude, "lng", longitude);

  return (
    <div className="flex flex-col w-full">

      <div className="flex shadow-inner h-72 flex-col bg-pattern bg-repeat bg-center bg-cover w-full justify-center items-center">
        <h1 className="text-3xl m-5 font-bold text-white mt-32">
          IP Address Tracker
        </h1>
        <div className="justify-center lg:w-1/3 flex rounded-lg shadow-lg">
          <input
            type="string"
            placeholder="Search for any IP address or domain"
            className="p-2 py-3 w-full rounded-l-md focus:outline-none font-medium overflow-x-scroll"
            // onChange={(e) => setIpAddress(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button
            onClick={() => fetchAddress(ipAddress)}
            className="bg-black text-white rounded-r-md p-2"
          >
            <FaAngleRight />
          </button>
        </div>
        
        <AddressDetails address={address} />

      </div>

      {address?.loc && (
          <MapPlace lat={latitude} lng={longitude} />
      )} 
    </div>
  );
};

export default AddressTracker;
