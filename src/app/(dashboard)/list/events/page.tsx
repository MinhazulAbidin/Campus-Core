import FromModal from "@/components/FromModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Events = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const EventsListPage = () => {
  const renderRow = (item: Events) => (
    <tr
      key={item?.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurpleLight duration-150 text-sm"
    >
      <td className="flex items-center gap-4 px-6 py-3">
        <div className="flext flex-col gap-2">
          <h2 className="font-semibold ">{item?.title}</h2>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3">{item?.class}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.date}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.startTime}</td>
      <td className="hidden md:table-cell px-6 py-3">{item?.endTime}</td>
      <td className="px-6 py-3">
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
            <FromModal table="event" type="update" data={item} />
            <FromModal table="event" type="delete" id={item?.id} />
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
        <h2 className="text-lg font-semibold hidden md:block">Events</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end ">
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/filter.png" alt="filter" width={20} height={20} />
            </button>
            <button className="bg-lamaYellow p-2 rounded-full w-8 h-8">
              <Image src="/sort.png" alt="sort" width={20} height={20} />
            </button>
            {role === "admin" && <FromModal table="event" type="create" />}
          </div>
        </div>
      </div>
      {/* list  */}
      <div>
        <Table columns={columns} randerRow={renderRow} data={eventsData} />
      </div>
      {/* pagination  */}
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default EventsListPage;
