import { useEffect } from 'react'

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')

    // Stagger delay for grid children
    document.querySelectorAll('.service-cards-grid, .why-grid, .services-grid, .testimonials-grid').forEach(grid => {
      grid.querySelectorAll('.fade-up').forEach((el, i) => {
        el.style.transitionDelay = `${i * 80}ms`
      })
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
