import './Cover.css'

function Cover() {
  return (
    <section className="cover">
      <div className="cover-light cover-light-one" />
      <div className="cover-light cover-light-two" />
      <div className="cover-glow" />
      <div className="cover-grain" />

      <div className="cover-frame">
        <span className="cover-frame-line cover-frame-top" />
        <span className="cover-frame-line cover-frame-bottom" />
        <span className="cover-frame-line cover-frame-left" />
        <span className="cover-frame-line cover-frame-right" />
      </div>

      <div className="cover-content">
        <div className="cover-kicker">
          <span className="cover-kicker-line" />
          <span>INDEPENDENT DIGITAL STUDIO</span>
          <span className="cover-kicker-line" />
        </div>

        <h1 className="cover-title">
          <span className="cover-word cover-word-main">VERTEX</span>
          <span className="cover-word cover-word-outline">STUDIO</span>
        </h1>

        <div className="cover-divider">
          <span />
        </div>

        <p className="cover-tagline">
          Digital Experiences.
          <span> Designed to Matter.</span>
        </p>
      </div>

      <div className="cover-bottom">
        <span className="cover-est">EST. 2026</span>

        <div className="cover-scroll">
          <span className="cover-scroll-text">SCROLL TO EXPLORE</span>
          <span className="cover-scroll-arrow">↓</span>
        </div>

        <span className="cover-index">01 / 07</span>
      </div>

      <div className="cover-corner cover-corner-tl" />
      <div className="cover-corner cover-corner-tr" />
      <div className="cover-corner cover-corner-bl" />
      <div className="cover-corner cover-corner-br" />
    </section>
  )
}

export default Cover