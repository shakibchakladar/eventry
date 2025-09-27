import Image from "next/image";
import React from "react";
import ActionButton from "../ActionButton";
import Link from "next/link";
import EventSchemaScript from "../meta/EventSchemaScript";

function EventCard({ event }) {
  // const id=JSON.stringify(event._id)
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventSchemaScript/>
      <Image
        src={event?.imageUrl}
        alt="Event 1"
        className="w-full"
        height={300}
        width={300}
      />

      <div className="p-3">
        <Link href={`/details/${event.id}`} className="font-bold text-lg">
          {event?.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
        <div className="text-[#737373] text-sm mt-1 mx-2">
          <span>{event.interested_ids.length} Interested</span>
          <span>|</span>
          <span>{event.going_ids.length} Going</span>
        </div>

        <ActionButton eventId={event.id} interestedUserIds={event?.interested_ids} goingUserIds={event?.going_ids} />
      </div>
    </div>
  );
}

export default EventCard;
