import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 p-4 ">
      {/* left */}
      <div className="w-full lg:w-2/3">
        <div>
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3"></div>
    </section>
  );
};

export default AdminPage;
