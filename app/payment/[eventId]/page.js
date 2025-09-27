import Paymentform from "@/app/components/payments/Paymentform";
import React from "react";
// import Paymentform from "../components/payments/Paymentform";

export default function PaymentPage({params}) {
  const {eventId}=params
  console.log("eventId in PaymentPage:", eventId);

  return (
    <section className="container">
      <div class="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 class="font-bold text-xl mb-8">Payment Details</h2>
        <Paymentform eventId={eventId}/>
      </div>
    </section>
  );
}
