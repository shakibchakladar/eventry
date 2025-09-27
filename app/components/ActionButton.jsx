"use client";
import { useAuth } from "../hooks/useAuth";
import { useState, useTransition } from "react";
import { addInterestedEvent } from "@/app/actions";
import { useRouter } from "next/navigation";

function ActionButton({ eventId, interestedUserIds, fromDetails, goingUserIds }) {
  const { auth } = useAuth();
  const router = useRouter();

  const isInterestedInitial = interestedUserIds?.includes(auth?.id);
  const isGoingInitial = goingUserIds?.includes(auth?.id);

  const [interested, setInterested] = useState(isInterestedInitial);
  const [isGoing, setIsGoing] = useState(!!isGoingInitial);
  const [isPending, startTransition] = useTransition();

  async function toggleInterest() {
    if (!auth) {
      router.push("/login");
      return;
    }

    setInterested(prev => !prev); // optimistic UI
    await addInterestedEvent(eventId, auth.id);
  }

  const markGoing = () => {
    if (!auth) {
      router.push("/login");
      return;
    }

    setIsGoing(true); // update button state
    router.push(`/payment/${eventId}`);
  };

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails ? "flex-1" : ""}`}>
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full py-2 text-black rounded ${
          interested ? "bg-indigo-600 hover:bg-indigo-800" : "bg-gray-300 hover:bg-gray-400 text-black font-semibold"
        }`}
      >
        Interested
      </button>

      <button
        onClick={markGoing}
        disabled={isGoing}
        className={`w-full py-2 text-black rounded ${
          isGoing ? "bg-green-600 cursor-not-allowed" : "bg-gray-300 text-black hover:bg-gray-400  font-semibold"
        }`}
      >
        Going
      </button>
    </div>
  );
}

export default ActionButton;
