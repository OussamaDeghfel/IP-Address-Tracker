import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchAddress(ipAddress);
  }, [ipAddress]);

  console.log("Address: ", address);
  return (
    <div>
      <h1>Track IP ADDRESS</h1>
      <input
        type="string"
        placeholder="type the address you want to track"
        className="border-2 border-black rounded-md p-2 w-1/2"
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button
        onClick={() => fetchAddress(ipAddress)}
        className="bg-blue-700 text-white rounded-md p-2 m-2"
      >
        Search
      </button>
      <div>
        {address && (
            <>
            <p>ip address: {address.ip}</p>
            <p>Country: {address.country}</p>
            <p>City: {address.city}</p>
            <p>timezone: {address.timezone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AddressTracker;
