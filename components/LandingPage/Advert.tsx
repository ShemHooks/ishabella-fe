import React from "react";
import { Store } from "lucide-react";
import { Users } from "lucide-react";
import { Truck } from "lucide-react";
import { Shield } from "lucide-react";

const Advert = () => {
  return (
    <div className=" p-3 mb-6 mt-10">
      <div className="text-center mb-4">
        <h1 className="font-extrabold text-gray-800  text-3xl">
          Why Choose Ishabella?
        </h1>
        <h6 className="text-sm text-gray-600">
          Industry-leading products backed by cutting-edge technology and
          exceptional support.
        </h6>
      </div>
      <div className=" grid grid-cols-2 gap-2 lg:flex">
        <div className="bg-white border  shadow-2xl h-38 lg:w-1/4 rounded-lg text-black flex flex-col justify-center items-center gap-2">
          <Store size={40} color="gray" />
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl">15</h3>
            <h5 className="text-sm">Branched Nationwide</h5>
          </div>
        </div>

        <div className="bg-white border  shadow-2xl h-38 lg:w-1/4 rounded-lg text-black flex flex-col justify-center items-center gap-2">
          <Users size={40} color="gray" />
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl">30+</h3>
            <h5 className="text-sm">Major Clients</h5>
          </div>
        </div>

        <div className="bg-white border  shadow-2xl h-38 lg:w-1/4 rounded-lg text-black flex flex-col justify-center items-center gap-2">
          <Truck size={40} color="gray" />
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl">24/7</h3>
            <h5 className="text-sm">Nationwide</h5>
          </div>
        </div>

        <div className="bg-white border  shadow-2xl h-38 lg:w-1/4 rounded-lg text-black flex flex-col justify-center items-center gap-2">
          <Shield size={40} color="gray" />
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl">Protected</h3>
            <h5 className="text-sm">Warranty</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
