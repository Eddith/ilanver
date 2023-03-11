/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

//Settings
import horoscope from "../../settings/horoscope";

const HoroscopeDetail: NextPage = () => {
  const router = useRouter();

  const horoscopeDetail = horoscope.filter(
    (item: any) => item.id.toString() === router.query.id
  );

  useEffect(() => {
    console.log("horoscopeDetail", horoscopeDetail);
  });

  return (
    <div className="w-full">
      {horoscopeDetail.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className={`w-full h-screen flex flex-col justify-center px-6 
                 ${
                   item.name === "Kova"
                     ? "bg-red-500 text-white"
                     : "bg-slate-300 text-blue-500"
                 } gap-4`}
          >
            <div className="w-full flex items-center justify-between">
              <img
                className="flex items-center justify-center"
                src={item.image}
                alt=""
                width={100}
                height={100}
              />
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-600 text-white active:bg-slate-300 active:text-slate-600"
                onClick={() => router.push("/")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
            </div>
            <h3 className="text-2xl font-semibold">
              {item.name === "Kova" ? "♥️" : ""} {item.name}{" "}
              {item.name === "Kova" ? "♥️" : ""}
            </h3>
            <h3 className="text-xl font-bold">{item.date}</h3>
            <p className="text-base font-medium whitespace-normal">
              {item.description}
            </p>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl font-medium">Şanslı Gün:</h3>
              <h3 className="text-xl font-bold">{item.luckyDay}</h3>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl font-medium">Şanslı Taş:</h3>
              <h3 className="text-xl font-bold">{item.luckyStone}</h3>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl font-medium">Mod:</h3>
              <h3 className="text-xl font-bold">{item.mood}</h3>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl font-medium">Uyumluluk:</h3>
              <h3 className="text-xl font-bold">{item.compatibility}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HoroscopeDetail;
