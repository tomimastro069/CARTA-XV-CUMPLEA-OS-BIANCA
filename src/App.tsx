import { useEffect, useRef, useState } from 'react'
import PageEdges from './components/PageEdges'
import Countdown from './components/Countdown'
import InvitationCard from './components/InvitationCard'
import VenueGallery from './components/VenueGallery'
import EventInfo from './components/EventInfo'
import LocationSection from './components/LocationSection'
import DressCode from './components/DressCode'
import GuestList from './components/GuestList'
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
      audioRef.current.muted = false
      audioRef.current.play()
      setPlaying(true)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = true
    audio.play().catch(() => {})

    const unmute = () => {
      audio.muted = false
      setPlaying(true)
      events.forEach((event) => window.removeEventListener(event, unmute))
    }

    const events = ['click', 'touchstart', 'keydown', 'scroll'] as const
    events.forEach((event) => window.addEventListener(event, unmute, { once: true }))

    return () => {
      events.forEach((event) => window.removeEventListener(event, unmute))
    }
  }, [])

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundColor: '#f9f7f2',
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      <audio ref={audioRef} loop>
        <source src="/is-this-love.mp3" type="audio/mpeg" />
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

      <PageEdges />

      <div className="relative" style={{ zIndex: 1 }}>
        <Countdown />
        <VenueGallery />
        <LocationSection />
        <EventInfo />
        <DressCode />

        <section
          className="flex items-center justify-center py-14 px-4"
          style={{ background: 'rgba(232, 225, 208, 0.25)' }}
        >
          <InvitationCard />
        </section>

        <GuestList />

        <PageFooter />
      </div>
    </div>
  )
}