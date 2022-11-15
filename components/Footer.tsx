import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="absolute bottom-3 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <Link href="#hero">
          <ChevronDoubleUpIcon className="h-10 w-10 rounded-full text-cyan-500/70 hover:text-cyan-500 animate-pulse" />
        </Link>
      </div>
    </footer>
  );
}
