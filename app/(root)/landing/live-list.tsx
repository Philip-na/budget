import EventCard from '@/app/event/components/event-card'
import React from 'react'

const LiveList = () => {
  return (
    <div className="flex gap-3">
        <EventCard />
        <EventCard />
        <EventCard />
        
    </div>
  )
}

export default LiveList