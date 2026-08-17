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
  Legend,
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
const AttendanceChart = () => {
  return (
    <div className="rounded-xl bg-white p-4 w-full h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      <BarChart
        style={{
          width: "100%",
          maxHeight: "90%",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        barSize={12}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} />
        <YAxis width="auto" axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }}/>
        <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
        />
        <Bar dataKey="present" fill="#c3ebfa" radius={[10, 10, 0, 0]} legendType="circle" />
        <Bar dataKey="absent" fill="#fae27c" radius={[10, 10, 0, 0]} legendType="circle" />
      </BarChart>
    </div>
  );
};

export default AttendanceChart;
