import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div
      className="
        group
        relative
        flex-1
        min-w-[160px]
        overflow-hidden
        rounded-2xl
        border
        border-white/60
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        odd:bg-gradient-to-br
        odd:from-[#f3efff]
        odd:to-[#e9e5ff]
        even:bg-gradient-to-br
        even:from-[#fff9df]
        even:to-[#fff2bd]
      "
    >

      {/* Decorative circle */}
      <div
        className="
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          bg-white/30
          transition-transform
          duration-300
          group-hover:scale-125
        "
      />

      {/* Header */}
      <div className="relative flex items-center justify-between">

        <span
          className="
            rounded-full
            bg-white/80
            px-2.5
            py-1
            text-[10px]
            font-semibold
            text-emerald-600
            shadow-sm
          "
        >
          2024/25
        </span>

        <button
          type="button"
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-white/60
            transition-all
            duration-200
            hover:bg-white
            hover:shadow-sm
          "
        >
          <Image
            src="/more.png"
            alt="More"
            width={17}
            height={17}
          />
        </button>

      </div>


      {/* Number */}
      <div className="relative mt-6">

        <h1
          className="
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          1,234
        </h1>

        <div className="mt-2 flex items-center gap-1.5">

          {/* Growth indicator */}
          <span
            className="
              flex
              items-center
              rounded-full
              bg-emerald-50
              px-1.5
              py-0.5
              text-[9px]
              font-semibold
              text-emerald-600
            "
          >
            ↑ 8.2%
          </span>

          <span className="text-[10px] text-gray-400">
            this year
          </span>

        </div>

      </div>


      {/* Label */}
      <div className="relative mt-4">

        <h2
          className="
            text-sm
            font-semibold
            capitalize
            text-gray-600
          "
        >
          {type}s
        </h2>

        <p className="mt-0.5 text-[10px] text-gray-400">
          Total registered {type}s
        </p>

      </div>

    </div>
  );
};

export default UserCard;