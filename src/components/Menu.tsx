import React from "react";
import menuItems from "../../data/menuItems";
import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 ">
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((subItem, subIndex) => {
            if (subItem.visible.includes(role))
              return (
                <Link
                  key={subIndex}
                  href={subItem?.href}
                  className="flex gap-4 items-center justify-center lg:justify-start text-gray-500 py-2 md:px-2 hover:shadow-md rounded-md hover:bg-lamaSkyLight hover:scale-x-110 duration-200"
                >
                  <Image
                    priority
                    src={subItem?.icon}
                    alt={subItem?.label}
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{subItem?.label}</span>
                </Link>
              );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
