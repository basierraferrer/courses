import { titleFont } from "@/config/fonts";
import React from "react";

interface Props {
  className: string;
  subtitle?: string;
  title: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-xl font-semibold my-5`}
      >
        {title}
      </h1>
      {subtitle && <h3 className="text-md mb-5">{subtitle}</h3>}
    </div>
  );
};
