import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex gap-2 items-end justify-center lg:justify-start"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer lg:w-12.5 lg:h-12.5 md:w-10 md:h-10 w-8 h-8"
          />
          <span className="hidden md:block">Campus Core</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
