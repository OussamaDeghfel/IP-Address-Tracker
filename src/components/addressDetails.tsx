import React from 'react'

interface addressDetailsType {
    address?: string[]
    ip: string;
    country: string;
    city: string;
    timezone: string;
    loc: string
    lat: string 
    lng: string
  }

const AddressDetails:React.FC<addressDetailsType> = ({address}) => {
  return (
    <div>
        <div className="flex bottom-10 translate-y-[-350%]  justify-center items-center m-auto shadow-xl  bg-white rounded-lg w-[80vh] h-32">
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
  )
}

export default AddressDetails