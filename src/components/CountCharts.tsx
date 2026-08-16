"use client";
import Image from "next/image";
import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  {
    name: "Total",
    count: 108,
    fill: "#fff",
  },
  {
    name: "Boys",
    count: 45,
    fill: "#c3ebfa",
  },
  {
    name: "Girls",
    count: 42,
    fill: "#fae27c",
  },
];

// #endregion
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
const CountCharts = () => {
  return (
    <div className="rounded-xl bg-white p-4 w-full h-full">
      {/* top */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      {/* middle */}
      <div className="relative w-full">
        <RadialBarChart
          style={{
            width: "100%",
            height: "100%"
          }}
          responsive
          cx="50%"
          cy="50%"
          innerRadius="40%"
          barSize={32}
          outerRadius="100%"
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
        <Image
          src="/maleFemale.png"
          alt="Male Female"
          width={50}
          height={50}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16 mt-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-lamaSky rounded-full" />
            <div>
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300">Boys (55%)</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-lamaYellow rounded-full" />
            <div>
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300">Girls (45%)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountCharts;
