import React from "react";
import menuItems from "../../data/menuItems";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 ">
          <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
          {item.items.map((subItem, subIndex) => (
            <div key={subIndex}>
              <Link href={subItem?.href} className="flex gap-4 items-center justify-center lg:justify-start text-gray-500 py-2">
              <Image src={subItem?.icon} alt={subItem?.label} width={20} height={20}/>
                <span>{subItem?.label}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
