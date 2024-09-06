import axios from "axios";
import { useEffect, useMemo, useState } from "react";
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
  const [ipAddress, setIpAddress] = useState<string>("8.8.8.8");
  const fetchAddress = async (ipAddress: string) => {
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
    setAddress(response.data);
  };

  useEffect(() => {
    fetchAddress(ipAddress);
  },[])

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      fetchAddress(e.target.value);
      setIpAddress("");
    }
  };

  const location = address?.loc;
  const latitude = location?.split(",")[0];
  const longitude = location?.split(",")[1];

  console.log("lat", latitude, "lng", longitude);

  return (
    <div className="flex flex-col w-full">

      <div className="flex flex-col bg-pattern bg-repeat bg-center bg-cover w-full h-96 justify-between items-center">
        <h1 className="text-3xl m-5 font-bold text-white mt-20">
          IP Address Tracker
        </h1>
        <div className="w-fit justify-center flex rounded-lg shadow-lg">
          <input
            type="string"
            placeholder="Search for any IP address or domain"
            className="p-2 pl-4 w-80 h-14 rounded-l-md focus:outline-none font-medium text-xl overflow-x-scroll"
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

    
       
      {/* {address?.loc && (
        <div className="translate-x-[30%] z-[-10]">
          <MapPlace lat={latitude} lng={longitude} />
        </div>
      )}  */}
    </div>
  );
};

export default AddressTracker;
