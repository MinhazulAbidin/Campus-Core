import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import Parformance from "@/components/Parformance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-5 p-4 md:p-5 bg-[#f8f9fc]">

      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <div className="w-full xl:w-2/3 space-y-5">

        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div className="flex flex-col lg:flex-row gap-5">

          {/* ================= STUDENT PROFILE ================= */}

          <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">

            {/* Top gradient */}
            <div className="h-20 bg-gradient-to-r from-[#e8f7ff] via-[#f3f0ff] to-[#fff5fb]" />

            <div className="px-5 pb-5">

              {/* Profile image */}
              <div className="-mt-10 flex items-end gap-4">

                <div className="relative shrink-0">
                  <Image
                    src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Student"
                    width={90}
                    height={90}
                    className="w-[90px] h-[90px] rounded-2xl object-cover border-4 border-white shadow-md"
                  />

                  {/* Online indicator */}
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>

                <div className="pb-1">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    Barak Obama
                  </h2>

                  <p className="text-xs text-gray-400 mt-0.5">
                    Student · Class 6A
                  </p>
                </div>

              </div>


              {/* Description */}
              <p className="text-xs md:text-sm text-gray-500 leading-5 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, nemo!
              </p>


              {/* Student information */}
              <div className="grid grid-cols-2 gap-3 mt-5">

                {/* Blood */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f8fbff]">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <Image
                      src="/blood.png"
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] text-gray-400">
                      Blood Group
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      A+
                    </p>
                  </div>
                </div>


                {/* Birth */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaff]">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <Image
                      src="/date.png"
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] text-gray-400">
                      Joined
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      Jan 2026
                    </p>
                  </div>
                </div>


                {/* Email */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fffafd]">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <Image
                      src="/mail.png"
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] text-gray-400">
                      Email
                    </p>
                    <p className="text-xs font-semibold text-gray-700 truncate">
                      donaldtrumd@gmail.com
                    </p>
                  </div>
                </div>


                {/* Phone */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f9fffc]">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <Image
                      src="/phone.png"
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] text-gray-400">
                      Phone
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      +0411264525
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>


          {/* ================= STAT CARDS ================= */}

          <div className="flex-1 grid grid-cols-2 gap-3">

            {/* Attendance */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)] hover:shadow-md transition-all duration-200">

              <div className="flex items-start justify-between">

                <div className="w-9 h-9 rounded-xl bg-[#e9f8ff] flex items-center justify-center">
                  <Image
                    src="/singleAttendance.png"
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>

                <span className="text-[9px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-500">
                  Good
                </span>

              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  90%
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Attendance
                </p>
              </div>

            </div>


            {/* Grade */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)] hover:shadow-md transition-all duration-200">

              <div className="w-9 h-9 rounded-xl bg-[#f1efff] flex items-center justify-center">
                <Image
                  src="/singleBranch.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  6th
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Grade
                </p>
              </div>

            </div>


            {/* Lessons */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)] hover:shadow-md transition-all duration-200">

              <div className="w-9 h-9 rounded-xl bg-[#fff0fa] flex items-center justify-center">
                <Image
                  src="/singleLesson.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  17
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Lessons
                </p>
              </div>
            </div>
            {/* Class */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)] hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-[#fff8df] flex items-center justify-center">
                <Image
                  src="/singleClass.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  6A
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Class
                </p>
              </div>

            </div>

          </div>

        </div>
        {/* =================================================
            STUDENT SCHEDULE
        ================================================= */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">

            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-900">
                Student's Schedule
              </h2>

              <p className="text-xs text-gray-400 mt-1">
                Weekly class schedule
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-xs text-gray-400">
                Current Week
              </span>
            </div>
          </div>

          {/* Calendar */}
          <div className="p-3 md:p-4 overflow-hidden h-[800px]">
            <BigCalender />
          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT SIDEBAR
      ===================================================== */}

      <div className="w-full xl:w-1/3 space-y-5">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Quick Access
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Student related information
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <Link
              href="/"
              className="group p-4 rounded-xl bg-[#e9f8ff] hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3">
                📚
              </div>

              <p className="text-xs font-semibold text-gray-700">
                Lessons
              </p>
              <span className="text-[10px] text-gray-400 group-hover:text-gray-500">
                View lessons
              </span>
            </Link>
            <Link
              href="/"
              className="group p-4 rounded-xl bg-[#f1efff] hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3">
                👨‍🏫
              </div>
              <p className="text-xs font-semibold text-gray-700">
                Teachers
              </p>
              <span className="text-[10px] text-gray-400">
                View teachers
              </span>
            </Link>
            <Link
              href="/"
              className="group p-4 rounded-xl bg-[#fff0fa] hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3">
                📝
              </div>
              <p className="text-xs font-semibold text-gray-700">
                Exams
              </p>
              <span className="text-[10px] text-gray-400">
                View exams
              </span>
            </Link>
            <Link
              href="/"
              className="group p-4 rounded-xl bg-[#fff8df] hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3">
                📢
              </div>
              <p className="text-xs font-semibold text-gray-700">
                Announcements
              </p>
              <span className="text-[10px] text-gray-400">
                View updates
              </span>
            </Link>
            <Link
              href="/"
              className="group col-span-2 p-4 rounded-xl bg-[#eaf8ef] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    Results
                  </p>
                  <span className="text-[10px] text-gray-400">
                    View academic results
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">

          <Parformance />

        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">

          <Announcements />

        </div>

      </div>

    </section>
  );
};

export default SingleStudentPage;