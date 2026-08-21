"use client";

import Image from "next/image";
import React, { useState } from "react";

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
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}
        </span>
        <button className="bg-red-700 text-white py-2 rounded-md px-4 border-none w-max self-center cursor-pointer">
          Delete
        </button>
      </form>
    ) : (
      <div className="p-4 text-center font-medium">
        {type === "create"
          ? `Create ${table}`
          : type === "update"
            ? `Update ${table}`
            : "Form"}
      </div>
    );
  };

  return (
    <>
      <button
        className={`${size} ${bgColor} p-2 rounded-full cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black/60 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
          <div className="bg-white p-2 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]" onClick={(e) => e.stopPropagation()}>
            <Form />
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FromModal;
