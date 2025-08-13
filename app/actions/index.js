"use server";

import { createUser, foundUserByCredintials } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  const credential = {};
  credential.email = formData.get("email");
  credential.password = formData.get("password");
  const found = await foundUserByCredintials(credential);
  if (found) {
    redirect("/");
  } else {
    throw new Error(`user with email ${formData.get("email")} not found`);
  }
}
export { registerUser, performLogin };
