import HeroSection from '@/app/components/details/HeroSection'
import React from 'react'

export default function DetailsPage({params}) {
  return (
    <>
    <div>DetailsPage{params.id}</div>
    <HeroSection/>
    </>
  )
}
