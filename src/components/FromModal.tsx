"use client";

import Image from "next/image";
import React, { useState } from "react";
import TeacherFrom from "./froms/TeacherFrom";

const FromModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";

  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <form className="flex flex-col items-center gap-5 p-6 sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <Image src="/delete.png" alt="Delete" width={22} height={22} />
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-800">
              Delete {table}?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              All data will be lost. Are you sure you want to delete this{" "}
              {table}?
            </p>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-red-500 px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </form>
      );
    }

    if (type === "create" && table === "teacher") {
      return <TeacherFrom type="create" data={data} setOpen={setOpen} />;
    }

    return (
      <div className="p-6 text-center text-sm font-medium text-slate-600">
        Update {table}
      </div>
    );
  };

  return (
    <>
      <button
        type="button"
        className={`${size} ${bgColor} flex items-center justify-center rounded-full p-2 transition-all duration-200 hover:scale-105 hover:shadow-md`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90%] max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[90vh] overflow-y-auto overscroll-contain p-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200">
              <Form />
            </div>

            <button
              type="button"
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 transition-all hover:scale-105 hover:bg-slate-50 sm:right-5 sm:top-5"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Close" width={13} height={13} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FromModal;