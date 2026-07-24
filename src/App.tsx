import BalloonBackground from './components/BalloonBackground'
import Countdown from './components/Countdown'
import InvitationCard from './components/InvitationCard'
import VenueGallery from './components/VenueGallery'
import EventInfo from './components/EventInfo'
import LocationSection from './components/LocationSection'
import DressCode from './components/DressCode'
import PageFooter from './components/PageFooter'

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: '#5d87a0ff', fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Fixed real balloon photo background */}
      <BalloonBackground />

      <div className="relative" style={{ zIndex: 1 }}>
        {/* 1 — Countdown first */}
        <Countdown />


        <VenueGallery />
        <LocationSection />
        <EventInfo />
        <DressCode />
        {/* 2 — Invitation card */}
        <section
          className="flex items-center justify-center py-14 px-4"
          style={{ background: 'linear-gradient(180deg, rgba(220, 245, 255, 0.4) 0%, rgba(245, 252, 255, 0.4) 100%)' }}
        >
          <InvitationCard />
        </section>
        <PageFooter />
      </div>
    </div>
  )
}
