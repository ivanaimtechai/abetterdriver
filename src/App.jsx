import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WinBanner from './components/WinBanner'
import StartReferring from './components/StartReferring'
import ProgramTerms from './components/ProgramTerms'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Header />
      <main className="flex-grow-1">
        <Hero />
        <HowItWorks />
        <WinBanner />
        <StartReferring />
        <ProgramTerms />
      </main>
      <Footer />
    </div>
  )
}
