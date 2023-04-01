import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
        <Image src={'https:'+ data.current.condition.icon} alt='weather' width='100' height='100' />
        <p className="text-2xl">{data.current.condition.text}</p>
        </div>
        <p className="text-9xl">{data.current.temp_c.toFixed(0)}&#176;</p>
      </div>
      <div className="bg-black/25 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">{'Weather in ' + data.location.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">{data.current.feelslike_c.toFixed(0)}&#176;</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.current.humidity}</p>
            <p className="text-xl">Humidty</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.current.wind_mph.toFixed(0)} MPH</p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Weather;
