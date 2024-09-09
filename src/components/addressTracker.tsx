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
  lat: number;
  lng: number;
}

const AddressTracker = () => {
  const [addressData, setAddressData] = useState<addressType | null>(null);
  const [inputValue, setInputValue] = useState("");

  const fetchAddressData = async (ipAddress: string) => {
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
    setAddressData(response.data);
  };

  useEffect(() => {
    fetchAddressData(inputValue);
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      fetchAddressData((e.target as HTMLInputElement).value);
      setInputValue("");
    }
  };

  const location = addressData?.loc;
  const [latitude, longitude] = location
    ? location.split(",").map((coord) => Number(coord))
    : [0, 0];

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
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={() => fetchAddressData(inputValue)}
            className="bg-black text-white rounded-r-md p-2"
          >
            <FaAngleRight />
          </button>
        </div>

        <AddressDetails address={addressData} />

      </div>

      {addressData?.loc && (
        <MapPlace lat={latitude} lng={longitude} />
      )}
    </div>
  );
};

export default AddressTracker;
