import Image from 'next/image'
import React from 'react'
import ActionButton from '../ActionButton'

function HeroSection({event}) {
  return (
     <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image src={event?.imageUrl} alt="Event 1" width={800} height={500} className="h-[450px] mx-auto"  />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{event?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{event?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{event.interested_ids.length} Interested</span>
            <span>|</span>
            <span>{event?.going_ids.length} Going</span>
          </div>
        </div>

       <ActionButton fromDetails={true} eventId={event?.id} interestedUserIds={event?.interested_ids} goingUserIds={event?.going_ids}/>
      </div>
    </section>
  )
}

export default HeroSection