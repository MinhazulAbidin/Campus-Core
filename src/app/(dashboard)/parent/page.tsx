import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import React from "react";

const ParentsPage = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-4 p-4">
      {/* left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="bg-white rounded-md p-4 h-200">
          <h2 className="text-xl font-semibold">Schedule (John Doe)</h2>
          <BigCalender />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </section>
  );
};

export default ParentsPage;
