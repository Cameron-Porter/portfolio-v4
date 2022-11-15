import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="absolute bottom-10 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <Link href="#hero">
          <ChevronDoubleUpIcon className="h-10 w-10 rounded-full text-[#22f3ee]/70 hover:text-[#22f3ee] animate-pulse" />
        </Link>
      </div>
    </footer>
  );
}
