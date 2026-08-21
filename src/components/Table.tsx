import React from "react";

const Table = ({
  columns,
  randerRow,
  data,
}: {
  columns: {
    header: string;
    accessor: string;
    className?: string;
  }[];
  randerRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] mt-4">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-175 border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className={`
                    whitespace-nowrap
                    px-5
                    py-4
                    text-left
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-gray-400
                    ${column.className || ""}
                  `}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.length > 0 ? (
              data.map((item, index) => (
                <React.Fragment key={item.id ?? index}>
                  {randerRow(item)}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      <span className="text-lg text-gray-300">—</span>
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      No data found
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      There is nothing to display here.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;