"use client";

import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Saturday",
    present: 80,
    absent: 24,
  },
  {
    name: "Sunday",
    present: 30,
    absent: 13,
  },
  {
    name: "Monday",
    present: 20,
    absent: 12,
  },
  {
    name: "Tuesday",
    present: 27,
    absent: 39,
  },
  {
    name: "Wednesday",
    present: 18,
    absent: 48,
  },
  {
    name: "Thursday",
    present: 23,
    absent: 38,
  },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: any) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg">

      <p className="mb-2 text-xs font-semibold text-gray-700">
        {label}
      </p>

      {payload.map((item: any) => (
        <div
          key={item.dataKey}
          className="flex items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">

            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span className="text-[11px] text-gray-500 capitalize">
              {item.dataKey}
            </span>

          </div>

          <span className="text-xs font-semibold text-gray-800">
            {item.value}
          </span>

        </div>
      ))}

    </div>
  );
};

const AttendanceChart = () => {

  const totalPresent = data.reduce(
    (total, item) => total + item.present,
    0
  );

  const totalAbsent = data.reduce(
    (total, item) => total + item.absent,
    0
  );

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

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-lg font-semibold text-gray-900">
            Attendance
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Weekly attendance overview
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
          SUMMARY
      ===================================================== */}

      <div className="mt-5 flex items-center gap-3">

        {/* Present */}

        <div className="flex items-center gap-2 rounded-xl bg-[#f1faff] px-3 py-2">

          <span className="h-2.5 w-2.5 rounded-full bg-[#c3ebfa]" />

          <div>

            <p className="text-[10px] text-gray-400">
              Present
            </p>

            <p className="text-sm font-bold text-gray-800">
              {totalPresent}
            </p>

          </div>

        </div>


        {/* Absent */}

        <div className="flex items-center gap-2 rounded-xl bg-[#fffbea] px-3 py-2">

          <span className="h-2.5 w-2.5 rounded-full bg-[#fae27c]" />

          <div>

            <p className="text-[10px] text-gray-400">
              Absent
            </p>

            <p className="text-sm font-bold text-gray-800">
              {totalAbsent}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CHART
      ===================================================== */}

      <div className="mt-5 h-[280px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            barGap={5}
            barCategoryGap="28%"
            margin={{
              top: 5,
              right: 5,
              left: -15,
              bottom: 0,
            }}
          >

            {/* Grid */}

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#f1f1f1"
            />


            {/* X Axis */}

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9ca3af",
                fontSize: 10,
              }}
              tickFormatter={(value) =>
                value.substring(0, 3)
              }
              dy={8}
            />


            {/* Y Axis */}

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9ca3af",
                fontSize: 10,
              }}
              width={30}
            />


            {/* Tooltip */}

            <Tooltip
              cursor={{
                fill: "#f9fafb",
              }}
              content={<CustomTooltip />}
            />


            {/* Present */}

            <Bar
              dataKey="present"
              name="Present"
              fill="#c3ebfa"
              radius={[8, 8, 4, 4]}
              barSize={14}
            />


            {/* Absent */}

            <Bar
              dataKey="absent"
              name="Absent"
              fill="#fae27c"
              radius={[8, 8, 4, 4]}
              barSize={14}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-4">

        <div className="flex items-center gap-2">

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">

            <span className="h-2 w-2 rounded-full bg-emerald-500" />

          </div>

          <div>

            <p className="text-[10px] text-gray-400">
              Attendance status
            </p>

            <p className="text-xs font-semibold text-gray-700">
              Weekly overview
            </p>

          </div>

        </div>


        <button
          type="button"
          className="
            text-[10px]
            font-semibold
            text-indigo-500
            transition
            hover:text-indigo-600
          "
        >
          View details →
        </button>

      </div>

    </div>
  );
};

export default AttendanceChart;