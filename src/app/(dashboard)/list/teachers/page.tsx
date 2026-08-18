import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const TeachersListPage = () => {
  return (
    <section className="bg-white flex-1 p-4 m-4 mt-0 rounded-md">
      {/* top  */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold hidden md:block">All Teachers</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end ">
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/filter.png" alt="filter" width={20} height={20} />
            </button>
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/sort.png" alt="sort" width={20} height={20} />
            </button>
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/plus.png" alt="plus" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      {/* list  */}
      <div>
        <Table columns={columns} />
      </div>
      {/* pagination  */}
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default TeachersListPage;
