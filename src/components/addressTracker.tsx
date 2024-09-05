import axios from "axios";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import MapPlace from "./mapPlace";

interface addressType {
  ip: string;
  country: string;
  city: string;
  timezone: string;
  loc: string
  lat: string 
  lng: string
}

const AddressTracker = () => {
  const [address, setAddress] = useState<addressType | null>(null);
  const [ipAddress, setIpAddress] = useState<string>('198.53.26.53');

  const fetchAddress = async (ipAddress: string) => {
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
    setAddress(response.data);
  };

  const handleKeyDown = (e:any) => {
    if (e.key === "Enter") {
      fetchAddress(e.target.value);
      setIpAddress("")
    }
  }

  const location = address?.loc
  const latitude = location?.split(",")[0]   
  const longitude = location?.split(",")[1]

  console.log("lat",latitude,"lng",longitude)

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

      <div>
        {address?.loc && <MapPlace lat={latitude} lng={longitude} />}
      </div>
      
    </div>
  );
};

export default AddressTracker;
