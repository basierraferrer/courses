"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoShieldOutline,
} from "react-icons/io5";

export const SignOutButton = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <IoShieldOutline size={30} />
        <span className="group-hover:text-gray-700">Wait...</span>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        onClick={() => signIn()}
      >
        <IoLogInOutline size={30} />
        <span className="group-hover:text-gray-700">Login</span>
      </button>
    );
  }

  return (
    <button
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      onClick={() => signOut()}
    >
      <IoLogOutOutline size={30} />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
};
