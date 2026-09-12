import './Work.css'

import vertexHero from '../assets/vertex-hero.png'
import hopeHero from '../assets/hope-hero.png'
import aurelleHero from '../assets/aurelle-hero.png'

function Work({ activeStep }) {
  const projects = [
    {
      number: '01',
      title: 'VERTEX STUDIO',
      brand: 'VERTEX STUDIO',
      type: 'DIGITAL STUDIO',
      image: vertexHero,
      description:
        'A premium digital presence shaped around bold typography, refined interaction and a distinctive editorial identity.',
    },
    {
      number: '02',
      title: 'HOPE FOUNDATION',
      brand: 'HOPE FOUNDATION',
      type: 'NON-PROFIT / IMPACT',
      image: hopeHero,
      description:
        'A warm and trustworthy digital experience created to communicate purpose, people and meaningful impact.',
    },
    {
      number: '03',
      title: 'AURELLE',
      brand: 'AURELLE',
      type: 'LUXURY BRAND',
      image: aurelleHero,
      description:
        'A refined digital world combining elegant visuals, minimal interfaces and a sophisticated luxury direction.',
    },
  ]

  return (
    <section className="work">
      <div className="work-orb work-orb-one" />
      <div className="work-orb work-orb-two" />
      <div className="work-noise" />

      <div className="work-top">
        <span>SELECTED WORK</span>
        <span>04 / 07</span>
      </div>

      <div className="work-progress">
        {[0, 1, 2, 3].map((step) => (
          <span
            key={step}
            className={
              activeStep === step ? 'active' : ''
            }
          />
        ))}
      </div>

      <div className="work-stage">

        {/* INTRO */}

        <div
          className={`work-panel work-intro-panel ${
            activeStep === 0 ? 'is-active' : ''
          }`}
        >
          <div className="work-intro-small">
            THE WORK
          </div>

          <h1>
            WE MAKE
            <span>DIGITAL</span>
            <strong>MATTER.</strong>
          </h1>

          <p>
            A selection of digital experiences created
            with intention, character and a sharp eye
            for detail.
          </p>

          <div className="work-intro-meta">
            <span>DESIGN</span>
            <i />
            <span>DEVELOPMENT</span>
            <i />
            <span>EXPERIENCE</span>
          </div>
        </div>

        {/* PROJECTS */}

        {projects.map((project, index) => {
          const step = index + 1

          return (
            <div
              key={project.number}
              className={`work-panel work-project-panel ${
                activeStep === step
                  ? 'is-active'
                  : ''
              }`}
            >
              <div className="project-copy">
                <div className="project-number">
                  {project.number}
                </div>

                <span className="project-type">
                  {project.type}
                </span>

                <h2>{project.title}</h2>

                <div className="project-line" />

                <p>{project.description}</p>

                <span className="project-year">
                  SELECTED PROJECT / 2026
                </span>
              </div>

              <div className="project-visual">
                <div className="project-frame">

                  <div className="project-frame-top">
                    <span>{project.brand}</span>

                    <span>
                      {project.number} / 03
                    </span>
                  </div>

                  <div className="project-image-box">
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="work-bottom">
        <span>
          {activeStep === 0
            ? 'SCROLL TO EXPLORE'
            : 'SELECTED PROJECT'}
        </span>

        <div className="work-bottom-line" />

        <span>
          {String(activeStep + 1).padStart(2, '0')} / 04
        </span>
      </div>
    </section>
  )
}

export default Work