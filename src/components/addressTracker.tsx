import axios from "axios"
import { useEffect, useState } from "react"

const AddressTracker = () => {
    const [address, setAddress] = useState('')

    useEffect(() => {
        const fetchAddress = async () => {
            const response = await axios.get("https://api.ipify.org?format=json", {
                // params: {
                //     access_key: import.meta.env.IP_API_KEY,
                // },
            });
            setAddress(response.data.ip);
        };
        fetchAddress()
    }, []);

    console.log("Address: ", address)
  return (
    <div>hello this where you the address</div>
  )
}

export default AddressTracker