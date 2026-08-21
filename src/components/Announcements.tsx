import React from "react";

const announcements = [
  {
    title: "Annual Sports Day 2026",
    date: "02 Jan 2027",
    description:
      "Our annual sports day will be held next week. Students are requested to participate actively.",
    bg: "bg-[#f3efff]",
    dot: "bg-purple-500",
  },
  {
    title: "Parent Teacher Meeting",
    date: "05 Jan 2027",
    description:
      "Parents are invited to attend the upcoming parent-teacher meeting at the school auditorium.",
    bg: "bg-[#fff8df]",
    dot: "bg-amber-500",
  },
  {
    title: "School Holiday Notice",
    date: "08 Jan 2027",
    description:
      "The school will remain closed on the upcoming public holiday. Regular classes will resume afterward.",
    bg: "bg-[#eaf8ff]",
    dot: "bg-sky-500",
  },
];

const Announcements = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Announcements
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Latest school updates
          </p>
        </div>

        <button
          type="button"
          className="text-xs font-medium text-indigo-500 hover:text-indigo-600 transition-colors"
        >
          View all
        </button>

      </div>


      {/* =================================================
          ANNOUNCEMENT LIST
      ================================================= */}

      <div className="flex flex-col gap-3 mt-5">

        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`
              ${announcement.bg}
              relative
              p-4
              rounded-xl
              border
              border-white/60
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:shadow-sm
            `}
          >

            {/* Accent dot */}
            <div
              className={`
                absolute
                left-0
                top-5
                w-1
                h-8
                ${announcement.dot}
                rounded-r-full
              `}
            />


            {/* Header */}
            <div className="flex items-start justify-between gap-3 pl-2">

              <div className="flex items-center gap-2 min-w-0">

                <span
                  className={`
                    w-2
                    h-2
                    rounded-full
                    ${announcement.dot}
                    shrink-0
                  `}
                />

                <h3 className="text-sm font-semibold text-gray-700 leading-5 truncate">
                  {announcement.title}
                </h3>

              </div>


              {/* Date */}
              <span className="shrink-0 text-[10px] font-medium text-gray-500 bg-white/80 px-2 py-1 rounded-lg">
                {announcement.date}
              </span>

            </div>


            {/* Description */}
            <p className="text-xs text-gray-500 leading-5 mt-2 pl-4">
              {announcement.description}
            </p>


            {/* Bottom */}
            <div className="flex items-center justify-end mt-3 pl-4">

              <button
                type="button"
                className="text-[10px] font-medium text-gray-500 hover:text-gray-800 transition-colors"
              >
                Read more →
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Announcements;