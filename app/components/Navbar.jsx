import Link from "next/link";
import React from "react";
import SigninOut from "./login/SigninOut";

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
         <SigninOut/>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
