import React from "react";

function EventSchemaScript({ event }) {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event?.name,
    description: event?.details,
    startDate: event?.startDate || "2025-01-07T09:00:00-08:00", // আপনার DB তে date ফিল্ড থাকলে বসান
    endDate: event?.endDate || "2025-01-10T18:00:00-08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event?.location || "Unknown Venue",
      address: event?.location || "Unknown Address",
    },
    image: event?.imageUrl ? [event.imageUrl] : [],
    organizer: {
      "@type": "Organization",
      name: "Consumer Technology Association",
      url: "https://www.ces.tech",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedData) }}
    />
  );
}

export default EventSchemaScript;
