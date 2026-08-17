"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import React from "react";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];
const FinanceChart = () => {
  return (
    <div className="rounded-xl bg-white p-4 w-full h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Finance</h2>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>

      <LineChart
        style={{
          width: "100%",
          height: "90%",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#d1d5db" }}
        />
        <YAxis
          width="auto"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#d1d5db" }}
        />
        <Tooltip
          cursor={{
            stroke: "#e0e0e0",
          }}
          contentStyle={{
            backgroundColor: "var(--color-surface-raised)",
            borderColor: "var(--color-border-2)",
          }}
        />
        <Legend
          align="center"
          verticalAlign="top"
          wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#C3EBFA"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#CFCEFF"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default FinanceChart;
