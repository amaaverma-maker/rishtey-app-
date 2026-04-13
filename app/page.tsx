import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Process from '@/components/Process'
import ForWhom from '@/components/ForWhom'
import Testimonials from '@/components/Testimonials'
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
        <ForWhom />
        <Testimonials />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
