import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  {
    src: 'https://images.pexels.com/photos/5691473/pexels-photo-5691473.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&fit=crop',
    label: 'Pipe Repair & Fitting',
    sub: 'Wrench in hand — leaks fixed for good',
  },
  {
    src: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&fit=crop',
    label: 'Expert Pipe Installation',
    sub: 'Steel fittings, sealed tight every time',
  },
  {
    src: 'https://images.pexels.com/photos/34158878/pexels-photo-34158878.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&fit=crop',
    label: 'Radiator & Water Lines',
    sub: 'Hot water systems installed & serviced',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0) // re-triggers Ken Burns on each slide

  const goTo = useCallback(idx => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(i => (i + 1) % SLIDES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [goTo])

  // goTo with functional update — sync timer with manual click
  const advance = (idx) => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }

  return (
    <div className="hero-slider">
      {/* Image track */}
      <div className="hero-slider-track">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === current ? ' active' : ''}`}
          >
            <img
              key={`${slide.src}-${i === current ? animKey : 0}`}
              src={slide.src}
              alt={slide.label}
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
            {/* Gradient overlay */}
            <div className="hero-slide-overlay" />
            {/* Caption */}
            <div className="hero-slide-caption">
              <span className="hero-slide-label">{slide.label}</span>
              <span className="hero-slide-sub">{slide.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="hero-slider-dots" role="tablist" aria-label="Slider navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}: ${SLIDES[i].label}`}
            className={`slider-dot${i === current ? ' active' : ''}`}
            onClick={() => advance(i)}
          />
        ))}
      </div>

      {/* Rating badge — bottom-left */}
      <div className="slider-badge">
        <span className="slider-badge-stars">★★★★★</span>
        <span className="slider-badge-text">5.0 · 200+ Reviews</span>
      </div>

      {/* Floating pill — top-right corner */}
      <div className="slider-float-pill">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        Same-Day Service
      </div>
    </div>
  )
}
