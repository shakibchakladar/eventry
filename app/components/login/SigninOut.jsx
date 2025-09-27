"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function SigninOut() {
  const { auth, setAuth } = useAuth();
  const router =useRouter();
  // console.log(auth);
  const handleLogout = () => {
    setAuth(false);
    alert("logged out...")
    router.push("/login")

  };

  return (
    <>
      {!auth ? (
        <Link href="/login">
          <li>Login</li>
        </Link>
      ) : (
        <li onClick={handleLogout} className="cursor-pointer hover:underline">
          Log out
        </li>
      )}
    </>
  );
}

export default SigninOut;
