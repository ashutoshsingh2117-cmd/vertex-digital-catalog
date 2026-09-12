import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-glow about-glow-left"></div>
      <div className="about-glow about-glow-right"></div>

      <div className="about-inner">
        <div className="about-top">
          <span className="about-label">ABOUT VERTEX</span>

          <span className="about-index">01 / 04</span>
        </div>

        <div className="about-content">
          <div className="about-heading-wrap">
            <p className="about-mini-title">OUR APPROACH</p>

            <h2>
              WE BUILD
              <span>DIGITAL PRESENCE.</span>
            </h2>
          </div>

          <div className="about-description">
            <p className="about-intro">
              Vertex Studio creates premium digital experiences designed to
              make brands look sharper, feel stronger, and stand apart.
            </p>

            <div className="about-points">
              <div className="about-point">
                <span className="point-number">01</span>

                <div>
                  <h3>DESIGN</h3>
                  <p>
                    Visual identities crafted with clarity, character, and
                    attention to every detail.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="point-number">02</span>

                <div>
                  <h3>EXPERIENCE</h3>
                  <p>
                    Digital experiences built to feel intuitive, immersive,
                    and memorable.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="point-number">03</span>

                <div>
                  <h3>IMPACT</h3>
                  <p>
                    Creative solutions focused on turning attention into
                    meaningful brand presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom">
          <span>VERTEX STUDIO</span>
          <span>CREATIVE DIGITAL STUDIO</span>
        </div>
      </div>
    </section>
  )
}

export default About