"use client";

import Image from "next/image";
import React from "react";
import { Pie, PieChart } from "recharts";

const data = [
  { name: "Score", value: 92, fill: "#c3ebfa" },
  { name: "Remaining", value: 8, fill: "#fae27c" },
];

const Parformance = ({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) => {
  return (
    <div className="bg-white rounded-md p-5 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Performance</h2>

        <Image
          src="/moreDark.png"
          alt="More"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>

      {/* Chart */}
      <div className="relative w-full h-47.5 mt-2">
        <PieChart width={300} height={190} className="mx-auto">
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="100%"
            innerRadius={70}
            outerRadius={95}
            paddingAngle={2}
            isAnimationActive={isAnimationActive}
          />
        </PieChart>

        {/* Center Content */}
        <div
          className="
            absolute
            left-1/2
            -bottom-10
            -translate-x-1/2
            -translate-y-1/2
            text-center
            flex
            flex-col
            items-center
          "
        >
          <h3 className="text-xl font-bold text-gray-800 leading-none">
            9.2
          </h3>

          <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">
            out of 10
          </p>

          <span className="mt-1 px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-semibold">
            Excellent
          </span>
        </div>
      </div>

      {/* Semester */}
      <div className="text-center mt-5">
        <p className="text-sm font-medium text-gray-600">
          1st Semester{" "}
          <span className="text-gray-300 mx-1">—</span>{" "}
          2nd Semester
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Overall academic performance
        </p>
      </div>
    </div>
  );
};

export default Parformance;