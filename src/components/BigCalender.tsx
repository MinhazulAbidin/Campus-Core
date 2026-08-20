"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const BigCalender = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewChange = (newView: View) => {
    setView(newView);
  };
  const eventPropGetter = (event: { title?: string | number }) => {
    const eventClasses: Record<string, string> = {
      Math: "event-math",
      English: "event-english",
      Biology: "event-biology",
      Physics: "event-physics",
      Chemistry: "event-chemistry",
      History: "event-history",
    };

    return {
      className: eventClasses[String(event.title)] || "",
    };
  };

  const CustomEvent = ({
    event,
  }: {
    event: { start: Date | string; title?: string | number };
  }) => {
    const time = new Date(event.start).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    return (
      <div className="custom-event">
        <span className="custom-event-time">{time}</span>

        <span className="custom-event-title">{event.title}</span>
      </div>
    );
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleViewChange}
      style={{ height: "98%" }}
      eventPropGetter={eventPropGetter}
      components={{
        event: CustomEvent,
      }}
    />
  );
};

export default BigCalender;
