import './Approach.css'

function Approach() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      text:
        'We understand the brand, the audience and the problem before we design.',
    },
    {
      number: '02',
      title: 'CREATE',
      text:
        'Strategy turns into visual systems, interfaces and experiences.',
    },
    {
      number: '03',
      title: 'REFINE',
      text:
        'Every detail is polished until the experience feels effortless.',
    },
  ]

  return (
    <section className="approach">
      <div className="approach-glow approach-glow-one" />
      <div className="approach-glow approach-glow-two" />
      <div className="approach-grid" />

      <div className="approach-top">
        <span>THE APPROACH</span>
        <span>05 / 07</span>
      </div>

      <div className="approach-content">
        <div className="approach-heading">
          <span className="approach-kicker">
            HOW WE THINK
          </span>

          <h1>
            FROM
            <span>IDEA</span>
            <strong>TO IMPACT.</strong>
          </h1>

          <p>
            Great digital experiences don't happen by
            accident. They are discovered, crafted and
            refined with purpose.
          </p>
        </div>

        <div className="approach-steps">
          {steps.map((step) => (
            <div
              className="approach-step"
              key={step.number}
            >
              <span className="approach-step-number">
                {step.number}
              </span>

              <div className="approach-step-main">
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>

              <span className="approach-step-arrow">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="approach-center-line" />

      <div className="approach-bottom">
        <span>STRATEGY</span>
        <i />
        <span>DESIGN</span>
        <i />
        <span>TECHNOLOGY</span>

        <div className="approach-bottom-spacer" />

        <span>VERTEX STUDIO</span>
      </div>
    </section>
  )
}

export default Approach