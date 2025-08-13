"use client";
import { performLogin } from "@/app/actions";
import React, { useState } from "react";

function LoginForm() {
  const [error, setError] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const formData=new FormData(e.currentTarget)
      await performLogin(formData)
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <div className=" my-2 text-red-600">{error}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
