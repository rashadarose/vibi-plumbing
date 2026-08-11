// mix-blend-mode:screen makes the black background disappear on dark navbars
export default function Logo({ height = 52 }) {
  return (
    <img
      src="/images/vibi-logo.png"
      alt="Vibi Plumbing & Remodeling"
      className="nav-logo-img"
      style={{ height }}
    />
  )
}
