import FromModal from "@/components/FromModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Classes = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const TeachersListPage = () => {
  const renderRow = (item: Classes) => (
    <tr
      key={item?.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurpleLight duration-150 text-sm"
    >
      <td className="flex items-center gap-4 px-6 py-3">
        <div className="flext flex-col gap-2">
          <h2 className="font-semibold ">{item?.name}</h2>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3">{item?.capacity}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.grade}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.supervisor}</td>
      <td className="px-6 py-3">
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FromModal table="class" type="update" data={item} />
              <FromModal table="class" type="delete" id={item?.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <section className="bg-white flex-1 p-4 m-4 mt-0 rounded-md">
      {/* top  */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold hidden md:block">Classes</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end ">
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/filter.png" alt="filter" width={20} height={20} />
            </button>
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/sort.png" alt="sort" width={20} height={20} />
            </button>
            {role === "admin" && <FromModal table="class" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <div>
        <Table columns={columns} randerRow={renderRow} data={classesData} />
      </div>
      {/* pagination  */}
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default TeachersListPage;
