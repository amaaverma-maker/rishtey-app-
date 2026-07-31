import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Process from '@/components/Process'
import Coaching from '@/components/Coaching'
import Testimonials from '@/components/Testimonials'
import Membership from '@/components/Membership'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Coaching />
        <Testimonials />
        <Membership />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
