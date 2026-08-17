import React from "react";

const Announcements = () => {
  return (
    <div className="w-full bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Announcements</h2>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaPurpleLight p-4 rounded-md">
          <div className="flex items-center justify-between rounded-md">
            <h3 className="text-sm text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              02.01.2027
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            natus perspiciatis modi
          </p>
        </div>
        <div className="bg-lamaYellowLight p-4 rounded-md">
          <div className="flex items-center justify-between rounded-md">
            <h3 className="text-sm text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              02.01.2027
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            natus perspiciatis modi
          </p>
        </div>
        <div className="bg-lamaSkyLight p-4 rounded-md">
          <div className="flex items-center justify-between rounded-md">
            <h3 className="text-sm text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              02.01.2027
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            natus perspiciatis modi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
