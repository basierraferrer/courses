import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoCheckmark,
  IoCheckmarkDone,
  IoHome,
  IoHomeOutline,
  IoList,
  IoListOutline,
  IoStorefront,
  IoStorefrontOutline,
  IoPersonOutline,
  IoPerson,
} from "react-icons/io5";

import { SidebarItems } from "./SidebarItems";
import { MdCookie, MdOutlineCookie } from "react-icons/md";
import { auth } from "@/auth";
import { SignOutButton } from "./SignOutButton";
import { redirect } from "next/navigation";

const menuItems = [
  {
    icon: <IoHomeOutline size={30} />,
    iconActive: <IoHome size={30} />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckmark size={30} />,
    iconActive: <IoCheckmarkDone size={30} />,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline size={30} />,
    iconActive: <IoList size={30} />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
  {
    icon: <MdOutlineCookie size={30} />,
    iconActive: <MdCookie size={30} />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoStorefrontOutline size={30} />,
    iconActive: <IoStorefront size={30} />,
    title: "Products",
    path: "/dashboard/products",
  },
  {
    icon: <IoPersonOutline size={30} />,
    iconActive: <IoPerson size={30} />,
    title: "Profile",
    path: "/dashboard/profile",
  },
];

export const Sidebar = async () => {
  const session = await auth();

  if (!session) redirect("/api/auth/signin");

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              width={128}
              height={128}
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={
              session?.user?.image ??
              "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            }
            alt="Profile photo"
            width={120}
            height={120}
            className="m-auto rounded-full object-cover"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {session?.user?.name ?? "No Name"}
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            {session?.user?.roles?.join(", ")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItems key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <SignOutButton />
      </div>
    </aside>
  );
};
