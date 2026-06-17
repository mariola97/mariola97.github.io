import { useEffect, useState } from 'react'
import edu1 from '../assets/img/edu.jpg'
import edu2 from '../assets/img/edu2.jpg'
import edu3 from '../assets/img/edu3.jpg'
import edu4 from '../assets/img/edu4.jpg'
import edu5 from '../assets/img/edu5.jpg'
import education from '../assets/img/education.jpg'

function Home() {
  const slides = [edu1, edu2, edu3, edu4, edu5, education]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => window.clearInterval(timer)
  }, [slides.length])

  const movePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const moveNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <main className="home-hero">
      <section className="hero-left">
        <div className="home-slider">
          <img
            src={slides[currentIndex]}
            alt={`Education slide ${currentIndex + 1}`}
            className="slider-image"
          />

          <div className="slider-controls">
            <button type="button" className="slider-button" onClick={movePrev}>
              ‹
            </button>
            <button type="button" className="slider-button" onClick={moveNext}>
              ›
            </button>
          </div>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="hero-right">
        <h1>Introduction</h1>
        <p>
          Passionate about technology and education, I am dedicated to inspiring the next
          generation of IT professionals. With a strong background in computer science and
          hands-on experience in various programming languages, I strive to create engaging
          and interactive learning experiences for my students. My goal is to empower them
          with the skills and knowledge needed to succeed in the ever-evolving world of technology.
        </p>
      </section>
    </main>
  )
}

export default Home;