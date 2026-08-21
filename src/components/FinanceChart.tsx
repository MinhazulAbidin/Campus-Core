"use client";

import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 3800 },
  { name: "Apr", income: 2780, expense: 2908 },
  { name: "May", income: 3890, expense: 2800 },
  { name: "Jun", income: 4390, expense: 3200 },
  { name: "Jul", income: 3490, expense: 3300 },
  { name: "Aug", income: 4290, expense: 3600 },
  { name: "Sep", income: 3890, expense: 3100 },
  { name: "Oct", income: 4490, expense: 3400 },
  { name: "Nov", income: 4690, expense: 3500 },
  { name: "Dec", income: 4990, expense: 3700 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
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

            <span className="text-[11px] capitalize text-gray-500">
              {item.dataKey}
            </span>
          </div>

          <span className="text-xs font-semibold text-gray-800">
            ৳{item.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

const FinanceChart = () => {
  const totalIncome = data.reduce(
    (total, item) => total + item.income,
    0
  );

  const totalExpense = data.reduce(
    (total, item) => total + item.expense,
    0
  );

  return (
    <div
      className="
        flex
        h-full
        min-h-[420px]
        w-full
        flex-col
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

      <div className="flex shrink-0 items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Finance
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Income & expense overview
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

      <div className="mt-5 flex shrink-0 gap-3">
        {/* Income */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#f1faff]
            px-3
            py-2
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#c3ebfa]" />

          <div>
            <p className="text-[10px] text-gray-400">
              Income
            </p>

            <p className="text-sm font-bold text-gray-800">
              ৳{totalIncome.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Expense */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#f5f3ff]
            px-3
            py-2
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#cfceff]" />

          <div>
            <p className="text-[10px] text-gray-400">
              Expense
            </p>

            <p className="text-sm font-bold text-gray-800">
              ৳{totalExpense.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CHART
      ===================================================== */}

      <div className="mt-4 min-h-[240px] w-full flex-1">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 8,
              left: -15,
              bottom: 5,
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
              width={40}
              tickFormatter={(value) =>
                `${value / 1000}k`
              }
            />

            {/* Tooltip */}

            <Tooltip
              cursor={{
                stroke: "#e5e7eb",
                strokeWidth: 1,
              }}
              content={<CustomTooltip />}
            />

            {/* Income */}

            <Line
              type="monotone"
              dataKey="income"
              name="Income"
              stroke="#9dddf2"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 3,
                stroke: "#ffffff",
              }}
            />

            {/* Expense */}

            <Line
              type="monotone"
              dataKey="expense"
              name="Expense"
              stroke="#b8b5f5"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 3,
                stroke: "#ffffff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* =====================================================
          LEGEND
      ===================================================== */}

      <div
        className="
          mt-4
          flex
          shrink-0
          items-center
          justify-center
          gap-6
          border-t
          border-gray-100
          pt-4
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#9dddf2]" />

          <span className="text-xs font-medium text-gray-500">
            Income
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#b8b5f5]" />

          <span className="text-xs font-medium text-gray-500">
            Expense
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinanceChart;