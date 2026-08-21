"use client";
import React, { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type EventItem = {
  id: number;
  title: string;
  time: string;
  description: string;
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Annual Sports Day",
    time: "12:00 PM - 2:00 PM",
    description:
      "Students are invited to participate in the annual sports day activities.",
  },
  {
    id: 2,
    title: "Parent Teacher Meeting",
    time: "12:00 PM - 2:00 PM",
    description:
      "Parents can meet with teachers to discuss student performance.",
  },
  {
    id: 3,
    title: "Science Exhibition",
    time: "12:00 PM - 2:00 PM",
    description:
      "Students will showcase their creative science projects and experiments.",
  },
];

const EventCalander = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      {/* =====================================================
          CALENDAR
      ===================================================== */}

      <div className="calendar-wrapper">
        <Calendar
          onChange={onChange}
          value={value}
          className="modern-calendar"
        />
      </div>

      {/* =====================================================
          EVENTS HEADER
      ===================================================== */}

      <div className="flex items-center justify-between mt-7 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Events</h2>

          <p className="text-xs text-gray-400 mt-1">Upcoming school events</p>
        </div>

        <button
          type="button"
          className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <Image src="/moreDark.png" alt="More" width={18} height={18} />
        </button>
      </div>

      {/* =====================================================
          EVENTS
      ===================================================== */}

      <div className="flex flex-col gap-3">
        {events.map((event, index) => {
          const styles = [
            {
              bg: "bg-[#f1f9ff]",
              border: "border-sky-400",
              dot: "bg-sky-400",
            },
            {
              bg: "bg-[#f6f2ff]",
              border: "border-purple-400",
              dot: "bg-purple-400",
            },
            {
              bg: "bg-[#fff9e8]",
              border: "border-amber-400",
              dot: "bg-amber-400",
            },
          ][index % 3];

          return (
            <div
              key={event.id}
              className={`
                relative
                ${styles.bg}
                rounded-xl
                border
                border-white
                p-4
                overflow-hidden
                transition-all
                duration-200
                hover:-translate-y-px
                hover:shadow-sm
              `}
            >
              {/* Left accent */}
              <div
                className={`
                  absolute
                  left-0
                  top-4
                  bottom-4
                  w-1
                  ${styles.dot}
                  rounded-r-full
                `}
              />

              {/* Event header */}
              <div className="flex items-start justify-between gap-3 pl-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`
                      w-2
                      h-2
                      rounded-full
                      ${styles.dot}
                      shrink-0
                    `}
                  />

                  <h3 className="text-sm font-semibold text-gray-700 truncate">
                    {event.title}
                  </h3>
                </div>

                {/* Time */}
                <span className="shrink-0 text-[10px] font-medium text-gray-500 bg-white/80 px-2 py-1 rounded-lg">
                  {event.time}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-5 mt-2 pl-4">
                {event.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalander;
