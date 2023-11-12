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
            bg-slate-300 text-blue-500 gap-4`}
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
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="text-base font-medium whitespace-normal">
              {item.details}
            </p>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl font-medium">Uzaklık:</h3>
              <h3 className="text-xl font-bold">{item.distance}</h3>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl font-medium">Çap:</h3>
              <h3 className="text-xl font-bold">{item.diameter}</h3>
            </div>
            {item.temperature_range ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Sıcaklık Aralığı:</h3>
                <h3 className="text-xl font-bold">{item.temperature_range}</h3>
              </div>
            ) : null}
            {item.temperature ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Sıcaklık:</h3>
                <h3 className="text-xl font-bold">{item.temperature}</h3>
              </div>
            ) : null}
            {item.satellites ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Uydular:</h3>
                <h3 className="text-xl font-bold">{item.satellites}</h3>
              </div>
            ) : null}
            {item.atmosphere ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Atmosfer:</h3>
                <h3 className="text-xl font-bold">{item.atmosphere}</h3>
              </div>
            ) : null}
            {item.surface ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Yüzey:</h3>
                <h3 className="text-xl font-bold">{item.surface}</h3>
              </div>
            ) : null}
            {item.magnetic_field ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Manyetik Alan:</h3>
                <h3 className="text-xl font-bold">{item.magnetic_field}</h3>
              </div>
            ) : null}
            {item.rings ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Halkalar:</h3>
                <h3 className="text-xl font-bold">{item.rings}</h3>
              </div>
            ) : null}
            {item.winds ? (
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium">Rüzgarlar:</h3>
                <h3 className="text-xl font-bold">{item.winds}</h3>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default HoroscopeDetail;
