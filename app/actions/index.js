"use server";

import {
  createUser,
  foundUserByCredintials,
  getEventById,
  updateGoing,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import EmailTemplate from "../components/payments/EmailTemplate";
import { render } from "@react-email/render";


async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await foundUserByCredintials(credential);
    return found;
  } catch (err) {
    throw err;
  }
}

async function addInterestedEvent(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
  } catch (err) {
    throw err;
  }
  revalidatePath("/");
}

async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
   await sendEmail(eventId, user);
  } catch (err) {
    throw err;
  }
  revalidatePath("/");
  redirect("/");
}

async function sendEmail(eventId, user) {
try{
    const event = await getEventById(eventId);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const message = `Dear ${user?.name} you have been successfully register for that event ,${event?.name}. We are exited to have you here <3`;
      const emailHtml = render(<EmailTemplate message={message} />);

  const send= await resend.emails.send({
    from:"noreply@noreply.tapascript.io",
    to: user?.email,
    subject:"Successfully Registered For The Event",
    html:emailHtml
  })
   console.log("Email send response:", send); 
}catch(error){
  console.log('error',error)
  throw error;
}
}

export { registerUser, performLogin, addInterestedEvent, addGoingEvent };
