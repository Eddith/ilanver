/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

//Settings
import horoscope from "../settings/horoscope";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("horoscope", horoscope);
  });

  return (
    <div className="w-full p-4">
      <div className="w-full grid gap-[10px]">
        <div className="w-full grid grid-cols-1 gap-[10px]">
          {horoscope.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`w-full flex flex-col justify-center rounded-lg p-6 
                bg-slate-300 text-blue-500 active:bg-slate-600 active:text-white gap-2`}
                onClick={() => router.push(`/horoscope-detail/${item.id}`)}
              >
                <img
                  className="flex items-center justify-center"
                  src={item.image}
                  alt=""
                  width={100}
                  height={100}
                />
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <h3 className="text-base font-bold">
                  Güneşe olan uzaklık {item.distance}
                </h3>
                <p className="text-md font-normal whitespace-normal h-[70px] text-clip overflow-hidden">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
