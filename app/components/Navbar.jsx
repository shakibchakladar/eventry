import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            {/* <Image src="/logo.svg" alt={"logo"} width={135} height={135} /> */}
            <h2 className="font-extrabold text-2xl text-yellow-100">Eventry</h2>
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>About</li>
          <li>Contact Us</li>
          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
