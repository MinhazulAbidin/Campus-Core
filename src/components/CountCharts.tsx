"use client";

import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 108,
    fill: "#ffffff",
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

const CountCharts = () => {
  const boys = data.find((item) => item.name === "Boys")?.count ?? 0;
  const girls = data.find((item) => item.name === "Girls")?.count ?? 0;
  const total = data.find((item) => item.name === "Total")?.count ?? 0;

  const boysPercentage = Math.round((boys / (boys + girls)) * 100);
  const girlsPercentage = Math.round((girls / (boys + girls)) * 100);

  return (
    <div
      className="
        w-full
        h-full
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-[0_2px_12px_rgba(0,0,0,0.03)]
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Students
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Student distribution
          </p>
        </div>

        <button
          type="button"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            bg-gray-50
            transition
            hover:bg-gray-100
          "
        >
          <Image
            src="/moreDark.png"
            alt="More"
            width={18}
            height={18}
          />
        </button>

      </div>


      {/* =====================================================
          CHART
      ===================================================== */}

      <div className="relative mt-2 h-[230px] w-full">

        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="48%"
            outerRadius="88%"
            barSize={22}
            data={data}
            startAngle={90}
            endAngle={-270}
          >

            <RadialBar
              background={{
                fill: "#f7f7f8",
              }}
              dataKey="count"
              cornerRadius={10}
            />

          </RadialBarChart>
        </ResponsiveContainer>


        {/* =================================================
            CENTER CONTENT
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            flex-col
            items-center
            justify-center
          "
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7faff]">

            <Image
              src="/maleFemale.png"
              alt="Students"
              width={28}
              height={28}
            />

          </div>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {total}
          </h1>

          <span className="text-[10px] font-medium text-gray-400">
            Total Students
          </span>

        </div>

      </div>


      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="grid grid-cols-2 gap-3 mt-1">

        {/* =================================================
            BOYS
        ================================================= */}

        <div
          className="
            rounded-xl
            bg-[#f1faff]
            p-3
            transition
            hover:shadow-sm
          "
        >

          <div className="flex items-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-[#c3ebfa]" />

            <span className="text-xs font-medium text-gray-500">
              Boys
            </span>

          </div>

          <div className="mt-2 flex items-end justify-between">

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {boys}
              </h3>

              <p className="text-[10px] text-gray-400">
                Students
              </p>
            </div>

            <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-sky-500">
              {boysPercentage}%
            </span>

          </div>

        </div>


        {/* =================================================
            GIRLS
        ================================================= */}

        <div
          className="
            rounded-xl
            bg-[#fffbea]
            p-3
            transition
            hover:shadow-sm
          "
        >

          <div className="flex items-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-[#fae27c]" />

            <span className="text-xs font-medium text-gray-500">
              Girls
            </span>

          </div>

          <div className="mt-2 flex items-end justify-between">

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {girls}
              </h3>

              <p className="text-[10px] text-gray-400">
                Students
              </p>
            </div>

            <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-amber-500">
              {girlsPercentage}%
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CountCharts;