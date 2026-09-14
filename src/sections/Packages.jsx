import './Packages.css'

function Packages({ activeStep }) {
  const packages = [
    {
      number: '01',
      name: 'STARTER',
      price: '₹15,000 – ₹20,000',
      description:
        'For personal brands, small businesses and simple digital needs.',
      features: [
        'Landing Page / Basic Website',
        'Up to 4 Pages',
        'Responsive Design',
        'Clean UI Design',
        'Basic Animations',
        'Contact Form',
        'Basic SEO Setup',
      ],
      label: 'ESSENTIAL',
    },
    {
      number: '02',
      name: 'PROFESSIONAL',
      price: '₹30,000 – ₹40,000',
      description:
        'For growing businesses and professional brands ready to grow digitally.',
      features: [
        'Up to 7 Pages',
        'Custom UI / UX Design',
        'Responsive Development',
        'Premium Animations',
        'Advanced Interactions',
        'Contact / Inquiry Forms',
        'Performance Optimization',
        'Basic SEO Setup',
      ],
      label: 'GROWTH',
    },
    {
      number: '03',
      name: 'PREMIUM',
      price: '₹50,000 – ₹75,000',
      description:
        'For brands looking for a distinctive, high-end digital experience.',
      features: [
        'Fully Custom Website',
        'Custom UI / UX System',
        'Advanced Animations & Motion',
        'Premium Interactions',
        'Complex Features',
        'Performance Optimization',
        'SEO Structure',
        'Cross-device Optimization',
        'Post-launch Support',
      ],
      label: 'SIGNATURE',
    },
  ]

  return (
    <section className="packages">
      <div className="packages-glow packages-glow-one" />
      <div className="packages-glow packages-glow-two" />

      <div className="packages-top">
        <span>OUR PACKAGES</span>
        <span>06 / 07</span>
      </div>

      {/* LEFT SIDE — LOCKED */}
      <div className="packages-heading">
        <span className="packages-kicker">
          FIND YOUR FIT
        </span>

        <h1>
          CHOOSE
          <span>YOUR</span>
          <strong>LEVEL.</strong>
        </h1>

        <p>
          Flexible packages designed around different
          stages of your digital journey.
        </p>
      </div>

      {/* RIGHT SIDE — INTERNAL SCREENS */}
      <div className="packages-stage">
        <div className="packages-progress">
          {[0, 1, 2, 3].map((step) => (
            <span
              key={step}
              className={
                activeStep === step ? 'active' : ''
              }
            />
          ))}
        </div>

        {packages.map((pkg, index) => (
          <div
            className={`package-screen ${
              activeStep === index ? 'is-active' : ''
            }`}
            key={pkg.number}
          >
            <div className="package-screen-top">
              <span>{pkg.number}</span>
              <span>{pkg.name}</span>
            </div>

            <div className="package-screen-content">
              <div className="package-main-info">
                <h2>{pkg.name}</h2>

                <p className="package-description">
                  {pkg.description}
                </p>

                <div className="package-price">
                  {pkg.price}
                </div>
              </div>

              <div className="package-features">
                {pkg.features.map((feature) => (
                  <span key={feature}>
                    <i />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="package-screen-bottom">
              <span>{pkg.label}</span>
              <span>↗</span>
            </div>
          </div>
        ))}

        <div
          className={`package-screen package-addons-screen ${
            activeStep === 3 ? 'is-active' : ''
          }`}
        >
          <div className="package-screen-top">
            <span>04</span>
            <span>ADD-ONS</span>
          </div>

          <div className="addons-content">
            <span className="addons-kicker">
              EXTEND THE EXPERIENCE
            </span>

            <h2>
              ADD-ON
              <span>SERVICES.</span>
            </h2>

            <div className="addons-list">
              <div className="addon-row">
                <span>VIDEO EDITING</span>
                <strong>Custom Quote</strong>
              </div>

              <div className="addon-row">
                <span>TEMPLATE &amp; POST DESIGN</span>
                <strong>₹2,500 / 4 Posts</strong>
              </div>

              <div className="addon-row">
                <span>ADDITIONAL PAGES</span>
                <strong>Custom Quote</strong>
              </div>

              <div className="addon-row">
                <span>ADVANCED / CUSTOM FEATURES</span>
                <strong>Custom Quote</strong>
              </div>
            </div>
          </div>

          <div className="package-screen-bottom">
            <span>FLEXIBLE</span>
            <span>↗</span>
          </div>
        </div>
      </div>

      <div className="packages-bottom">
        <span>
          {activeStep === 3
            ? 'CUSTOMISE YOUR EXPERIENCE'
            : 'SCROLL TO EXPLORE'}
        </span>

        <div className="packages-bottom-line" />

        <span>
          {String(activeStep + 1).padStart(2, '0')} / 04
        </span>
      </div>
    </section>
  )
}

export default Packages