"use client";

import { useEffect, useState } from "react";
import moment from "moment";

const DigitalClock = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-3">
      {/* Clock */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl">

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800 leading-none tracking-wide">
            {time.format("hh:mm:ss A")}
          </span>

          <span className="text-xs text-gray-400 mt-1 text-center">
            {time.format("ddd, DD MMM YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;