import axios from "axios";
import { useState } from "react";
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
  const [ipAddress, setIpAddress] = useState<string>();

  const fetchAddress = async (ipAddress: string) => {
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
    setAddress(response.data);
  };

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
      </div>
      {/* <div className="z-10 flex absolute top-0 translate-x-[30%] justify-center items-center m-auto"> */}
      <div className="z-10 flex absolute translate-y-[300%] translate-x-[30%] justify-center items-center m-auto">
        {address && <AddressDetails address={address} />}
      </div>
      {address?.loc && (
        <div className="absolute translate-x-[30%] z-[-10]">
          <MapPlace lat={latitude} lng={longitude} />
        </div>
      )}
    </div>
  );
};

export default AddressTracker;
