import EventDetails from "@/app/components/details/EventDetails";
import HeroSection from "@/app/components/details/HeroSection";
import { getEventById } from "@/db/queries";
import React from "react";
export async function generateMetadata({ params }) {
  const id = params.id;
  const event = await getEventById(id);
  return {
    title: `Eventry | ${event?.name}`,
    description: event?.desciption,
  };
}

export default async function DetailsPage({ params }) {
  const id = params.id;
  const event = await getEventById(id);

  return (
    <>
      <HeroSection event={event} />
      <EventDetails event={event} />
    </>
  );
}
