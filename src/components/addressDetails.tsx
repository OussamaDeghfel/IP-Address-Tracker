import React from 'react'
import { addressType } from './addressTracker'

interface addressDetailsType {
    address: addressType | null
  }

const AddressDetails:React.FC<addressDetailsType> = ({address}) => {
  return (
    <>
        {address && (
          <>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">ip address</span>{" "}
              <span className="font-bold text-2xl">{address.ip}</span>
            </p>
            <span className="hidden lg:block lg:h-16 lg:w-0.5 lg:bg-gray-400"></span>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">Country</span>{" "}
              <span className="font-bold text-2xl">{address.country}</span>
            </p>
            <span className="hidden lg:block lg:h-16 lg:w-0.5 lg:bg-gray-400"></span>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">City</span>{" "}
              <span className="font-bold text-2xl">{address.city}</span>
            </p>
            <span className="hidden lg:block lg:h-16 lg:w-0.5 lg:bg-gray-400"></span>
            <p className="flex flex-col p-5 pr-8">
              <span className="text-md text-gray-400">timezone</span>{" "}
              <span className="font-bold text-2xl">{address.timezone}</span>
            </p>
          </>
        )}
    </>
  )
}

export default AddressDetails