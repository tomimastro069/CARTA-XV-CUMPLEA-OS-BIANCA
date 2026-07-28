import { useRef, useState } from 'react'
import BalloonBackground from './components/BalloonBackground'
import Countdown from './components/Countdown'
import InvitationCard from './components/InvitationCard'
import VenueGallery from './components/VenueGallery'
import EventInfo from './components/EventInfo'
import LocationSection from './components/LocationSection'
import DressCode from './components/DressCode'
import PageFooter from './components/PageFooter'

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div
      className="min-h-screen relative"
      style={{ background: '#5d87a0ff', fontFamily: "'Raleway', sans-serif" }}
    >
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full shadow-lg"
        style={{
          background: '#c9a84c',
          color: 'white',
          fontSize: '20px',
        }}
      >
        {playing ? '🔊' : '🎵'}
      </button>

      <BalloonBackground />

      <div className="relative" style={{ zIndex: 1 }}>
        <Countdown />
        <VenueGallery />
        <LocationSection />
        <EventInfo />
        <DressCode />

        <section
          className="flex items-center justify-center py-14 px-4"
          style={{
            background:
              'linear-gradient(180deg, rgba(220, 245, 255, 0.15) 0%, rgba(245, 252, 255, 0.15) 100%)',
          }}
        >
          <InvitationCard />
        </section>

        <PageFooter />
      </div>
    </div>
  )
}