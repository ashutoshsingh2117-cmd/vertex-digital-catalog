import './Craft.css'

function Craft() {
  const services = [
    {
      number: '01',
      title: 'WEB DESIGN',
      description:
        'Premium, modern websites crafted with a strong visual identity and a seamless user experience.',
    },
    {
      number: '02',
      title: 'WEB DEVELOPMENT',
      description:
        'Fast, responsive and carefully built digital experiences designed to perform across every screen.',
    },
    {
      number: '03',
      title: 'UI / UX DESIGN',
      description:
        'Thoughtful interfaces and user journeys that balance aesthetics, clarity and effortless interaction.',
    },
    {
      number: '04',
      title: 'DIGITAL EXPERIENCE',
      description:
        'Immersive digital experiences that bring brand, motion and technology together into one world.',
    },
    {
      number: '05',
      title: 'VIDEO EDITING',
      description:
        'Cinematic edits, social content and visual storytelling designed to make every frame matter.',
    },
    {
      number: '06',
      title: 'TEMPLATE & POST DESIGN',
      description:
        'Premium social posts, templates and branded visuals created for a consistent digital presence.',
    },
  ]

  return (
    <section className="craft">
      <div className="craft-glow craft-glow-left" />
      <div className="craft-glow craft-glow-right" />

      <div className="craft-inner">

        <div className="craft-top">
          <span className="craft-label">WHAT WE DO</span>
          <span className="craft-index">03 / 07</span>
        </div>

        <div className="craft-intro">
          <p className="craft-kicker">THE CRAFT</p>

          <h2>
            WE BUILD
            <span>DIGITAL WORLDS.</span>
          </h2>

          <p className="craft-description">
            Strategy, design and technology — brought together to create
            digital experiences that feel unmistakably yours.
          </p>
        </div>

        <div className="craft-services">
          {services.map((service) => (
            <div className="craft-service" key={service.number}>
              <div className="craft-service-number">
                {service.number}
              </div>

              <div className="craft-service-main">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="craft-service-arrow">
                ↗
              </div>
            </div>
          ))}
        </div>

        <div className="craft-bottom">
          <span>DESIGN • MOTION • TECHNOLOGY</span>
          <span>VERTEX STUDIO</span>
        </div>

      </div>
    </section>
  )
}

export default Craft