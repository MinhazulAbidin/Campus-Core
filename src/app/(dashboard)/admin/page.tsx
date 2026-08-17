import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountCharts from "@/components/CountCharts";
import EventCalander from "@/components/EventCalander";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 p-4 ">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="staff" />
        </div>
        <div className="flex flex-col gap-8">
          {/* middle chart */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* count chart */}
            <div className="w-full lg:w-1/3 h-112.5">
              <CountCharts />
            </div>
            {/* attendance chart */}
            <div className="w-full lg:w-2/3 h-112.5">
              <AttendanceChart />
            </div>
          </div>
          {/* bottom chart */}
          <div className="w-full h-125">
            <FinanceChart />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalander />
        <Announcements />
      </div>
    </section>
  );
};

export default AdminPage;
