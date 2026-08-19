import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Parent = {
  id: number;
  students: string[];
  phone: string;
  address: string;
  email?: string;
  name: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Students Name",
    accessor: "students",
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
const ParentsListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item?.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurpleLight duration-150 text-sm"
    >
      <td className="flex items-center gap-4 px-6 py-3">
        <div className="flext flex-col gap-2">
          <h2 className="font-semibold ">{item?.name}</h2>
          <p className="text-sm text-gray-400">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3">{item?.students.join(", ")}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.phone}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.address}</td>
      <td className="px-6 py-3">
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item?.id}`}>
            <button className="w-7 h-7 rounded-full bg-lamaSky flex items-center justify-center cursor-pointer">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {String(role) === "admin" && (
            <button className="w-7 h-7 rounded-full bg-lamaPurple flex items-center justify-center cursor-pointer">
              <Image src="/delete.png" alt="view" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <section className="bg-white flex-1 p-4 m-4 mt-0 rounded-md">
      {/* top  */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold hidden md:block">All Parents</h2>
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
        <Table columns={columns} randerRow={renderRow} data={parentsData} />
      </div>
      {/* pagination  */}
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default ParentsListPage;
