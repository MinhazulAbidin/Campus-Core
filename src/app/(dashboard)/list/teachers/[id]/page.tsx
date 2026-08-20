import Image from "next/image";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <section className="flex flex-col flex-1 xl:flex-row gap-4 p-4">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top section  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user in card */}
          <div className="bg-lamaSky flex-1 px-4 py-6 rounded-md flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="rounded-full h-36 w-36 object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-2">
              <h2 className="text-xl font-semibold">Donald Trump</h2>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, nemo!
              </p>
              <div className="flex items-center gap-2 justify-between flex-wrap text-xs font-medium">
                <div className="md:w-1/3 flex items-center gap-2 w-full lg:w-full">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="md:w-1/3 flex items-center gap-2 w-full lg:w-full">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2026</span>
                </div>
                <div className="md:w-1/3 flex items-center gap-2 w-full lg:w-full">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>donaldtrumd@gmail.com</span>
                </div>
                <div className="md:w-1/3 flex items-center gap-2 w-full lg:w-full">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+0411264525</span>
                </div>
              </div>
            </div>
          </div>
          {/* small card */}
          <div className="flex-1 flex flex-wrap gap-4 justify-between">
            {/* card */}
            <div className="bg-white p-4 w-full md:w-[48%] rounded-md xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h3 className="text-xl font-semibold">90%</h3>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 w-full md:w-[48%] rounded-md xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleBranch.png" alt="" width={24} height={24} />
              <div>
                <h3 className="text-xl font-semibold">2</h3>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 w-full md:w-[48%] rounded-md xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h3 className="text-xl font-semibold">6</h3>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 w-full md:w-[48%] rounded-md xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h3 className="text-xl font-semibold">6</h3>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section  */}
        <div>calender</div>
      </div>
      {/* right  */}
      <div className="w-full xl:w-1/3"> right</div>
    </section>
  );
};

export default SingleTeacherPage;
