import FromModal from "@/components/FromModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Teacher = {
  id: number;
  teacherId: string;
  subjects: string[];
  classes: string[];
  phone: string;
  address: string;
  photo: string;
  email?: string;
  name: string;
};

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
  const renderRow = (item: Teacher) => (
    <tr
      key={item?.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurpleLight duration-150 text-sm"
    >
      <td className="flex items-center gap-4 px-6 py-3">
        <Image
          src={item?.photo}
          alt={item?.name}
          width={50}
          height={50}
          className="md:hidden xl:block rounded-full w-10 h-10 object-cover"
        />
        <div className="flext flex-col gap-2">
          <h2 className="font-semibold ">{item?.name}</h2>
          <p className="text-sm text-gray-400">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3">{item?.teacherId}</td>
      <td className="hidden md:table-cell px-6 py-3">
        {item?.subjects.join(", ")}
      </td>
      <td className="hidden md:table-cell px-6 py-3">
        {item?.classes.join(", ")}
      </td>
      <td className="hidden md:table-cell px-6 py-3">{item?.phone}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.address}</td>
      <td className="px-6 py-3">
        <div className="flex items-center gap-2">
          {String(role) === "admin" && (
            <>
              <Link href={`/list/teachers/${item?.id}`}>
                <button className="w-7 h-7 rounded-full bg-lamaSky flex items-center justify-center cursor-pointer">
                  <Image src="/view.png" alt="view" width={16} height={16} />
                </button>
              </Link>
              <FromModal table="teacher" type="delete" id={item?.id} />
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
            {role === "admin" && <FromModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <div>
        <Table columns={columns} randerRow={renderRow} data={teachersData} />
      </div>
      {/* pagination  */}
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default TeachersListPage;
